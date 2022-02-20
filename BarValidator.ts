import { IBarProperties } from "./BarProperties";
import { BaseValidator, IBaseValidator } from "./BaseValidator";

export interface IBarValidator extends BarValidator {}
export class BarValidator {
  
  private properties: IBarProperties;
  private baseValidator: IBaseValidator;
  
  constructor(properties: IBarProperties) {
    this.properties = properties;
    this.baseValidator = new BaseValidator(this.properties.baseProperties);
  }

  validate() {
    this.baseValidator.validate();
    this.validateRequiredFields();
    this.validatePropE();
    this.validatePropF();

    console.log('BarValidator passed');
  }

  validateRequiredFields() {
    if(this.properties.propE == null) throw new Error('missing required field propC');
    if(this.properties.propF == null) throw new Error('missing required field propD');
  }

  validatePropE() {
    if(!['choo', 'boo'].includes(this.properties.propE)) 
      throw new Error(`propE must be one of 'choo' or 'boo'`);
  }

  validatePropF() {
    if(this.properties.propE === 'choo' && this.properties.propF) 
      throw new Error(`if propD is 'choo' then propF must be false`);
  }
}
