import { IBaseProperties } from "./BaseProperties";
import { payload } from "./index";

export interface IBaseActions extends BaseActions {}
export class BaseActions {
  
  private properties: IBaseProperties;

  constructor(properties: IBaseProperties) {
    this.properties = properties;
  }

  persist() {
    // this would write to a common table
    console.log(`writing base properties to DB: ${JSON.stringify(this.properties)}`);
  }
}
