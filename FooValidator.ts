import { BaseValidator, IBaseValidator } from "./BaseValidator";
import { IFooProperties } from "./FooProperties";

export interface IFooValidator extends FooValidator {}
export class FooValidator {
  
  private properties: IFooProperties;
  private baseValidator: IBaseValidator;
  
  constructor(properties: IFooProperties) {
    this.properties = properties;
    this.baseValidator = new BaseValidator(this.properties.baseProperties);
  }

  validate() {
    this.baseValidator.validate();
    this.validateRequiredFields();
    this.validatePropC();
    this.validatePropD();

    console.log('FooValidator passed');
  }

  validateRequiredFields() {
    if(this.properties.propC == null) throw new Error('missing required field propC');
    if(this.properties.propD == null) throw new Error('missing required field propD');
  }

  validatePropC() {
    if(this.properties.propC < 0) throw new Error('propC cannot be negative');
  }

  validatePropD() {
    if(this.properties.propD > 100) throw new Error('propD cannot be more than 100');
  }
}
