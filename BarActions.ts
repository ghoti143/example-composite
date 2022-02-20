import { IBarProperties } from "./BarProperties";
import { BaseActions, IBaseActions } from "./BaseActions";

export interface IBarActions extends BarActions {}
export class BarActions {
  
  private properties: IBarProperties;
  private baseActions: IBaseActions;
  
  constructor(properties: IBarProperties) {
    this.properties = properties;
    this.baseActions = new BaseActions(this.properties.baseProperties);
  }

  onUpdate() {
    this.persist();
    this.sendToBarApi();
  }

  private persist() {
    this.baseActions.persist();
    
    // this would write to a table specific for bar
    console.log(`writing bar properties to DB: ${JSON.stringify(this.properties)}`);
  }

  private sendToBarApi() {
    console.log('send to bar api');
  }
  
}
