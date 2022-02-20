import { IBaseProperties } from "./BaseProperties";

export interface IBaseValidator extends BaseValidator {}
export class BaseValidator {
  
  private properties: IBaseProperties;
  
  constructor(properties: IBaseProperties) {
    this.properties = properties;
  }

  validate() {
    this.validateRequiredFields();
    this.validatePropA();
    this.validatePropB();
  }

  validateRequiredFields() {
    if(this.properties.propA == null) throw new Error('missing required field propA');
    if(this.properties.propB == null) throw new Error('missing required field propB');
  }

  validatePropA() {
    if(this.properties.propA.length <= 2) throw new Error('propA is too short');
  }

  validatePropB() {
    if(this.properties.propB.length >= 10) throw new Error('propB is too long');
  }
}
