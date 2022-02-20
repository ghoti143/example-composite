import { BaseProperties, IBaseProperties } from './BaseProperties';

export interface IFooProperties extends FooProperties {}
export class FooProperties {
  propC: number;
  propD: number;
  baseProperties: IBaseProperties;

  constructor(data: any) {
    this.propC = data.propC;
    this.propD = data.propD;
    this.baseProperties = new BaseProperties(data);
  }
}
