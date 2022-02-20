import { BarProperties, IBarProperties } from './BarProperties';
import { FooProperties, IFooProperties } from './FooProperties';

export interface IOperation extends Operation {}
export class Operation {
  private properties: IFooProperties | IBarProperties;
  private validator;

  private constructor(properties: any) {
    this.properties = properties;
  }

  static create(data: any, type: string) {
    let operation: IOperation;
    switch (type) {
      case 'Foo':
        operation = new Operation(new FooProperties(data));
        break;
      case 'Bar':
        operation = new Operation(new BarProperties(data));
        break;
    }
    operation.validate();
    return operation;
  }

  private validate() {
    //this.validator.validate(this.properties);
  }

  public logPoperties() {
    console.log(this.properties);
  }
}
