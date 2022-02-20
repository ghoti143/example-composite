import { BarActions, IBarActions } from './BarActions';
import { BarProperties, IBarProperties } from './BarProperties';
import { BarValidator, IBarValidator } from './BarValidator';
import { FooActions, IFooActions } from './FooActions';
import { FooProperties, IFooProperties } from './FooProperties';
import { FooValidator, IFooValidator } from './FooValidator';
import { payload } from './index';

// there's probably a better way to type these
type prop = IFooProperties | IBarProperties;
type val = IFooValidator | IBarValidator;
type act = IFooActions | IBarActions;

export interface IOperation extends Operation {}
export class Operation {
  private properties: prop;
  private validator: val;
  private actions: act;

  private constructor(properties: prop, validator: val, actions: act) {
    this.properties = properties;
    this.validator = validator;
    this.actions = actions;
  }

  static create(data: payload, type: string) {
    let operation: IOperation;

    switch (type) {
      case 'Foo':
        // maybe instead of passing properties into validator
        // and action constructors, it would be better to only pass
        // properties or specific properties into validate() fn
        // or action functions?
        const fooProperties: IFooProperties = new FooProperties(data);
        const fooValidator: IFooValidator = new FooValidator(fooProperties);
        const fooActions: IFooActions = new FooActions(fooProperties);
        operation = new Operation(fooProperties, fooValidator, fooActions);
        break;
      case 'Bar':
        const barProperties: IBarProperties = new BarProperties(data);
        const barValidator: IBarValidator = new BarValidator(barProperties);
        const barActions: IBarActions = new BarActions(barProperties);
        operation = new Operation(barProperties, barValidator, barActions);
        break;
    }

    operation.validate();
    return operation;
  }

  private validate() {
    this.validator.validate();
  }

  public onUpdate() {
    this.actions.onUpdate();
  }

  public logPoperties() {
    console.log(this.properties);
  }
}
