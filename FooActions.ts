import { IFooProperties } from "./FooProperties";
import { BaseActions, IBaseActions } from "./BaseActions";

export interface IFooActions extends FooActions {}
export class FooActions {
  
  private properties: IFooProperties;
  private baseActions: IBaseActions;
  
  constructor(properties: IFooProperties) {
    this.properties = properties;
    this.baseActions = new BaseActions(this.properties.baseProperties);
  }

  onUpdate() {
    this.persist();
    this.sendToFooApi();
  }

  private persist() {
    this.baseActions.persist();

    // this would write to a table specific for foo
    console.log(`writing foo properties to DB: ${JSON.stringify(this.properties)}`);
  }

  private sendToFooApi() {
    console.log('send to foo api');
  }
  
}
