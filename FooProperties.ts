import { BaseProperties, IBaseProperties } from './BaseProperties';
import { payload } from './index';

export interface IFooProperties extends FooProperties {}
export class FooProperties {
  propC: number;
  propD: number;
  baseProperties: IBaseProperties;

  constructor(data: payload) {
    this.propC = data.propC;
    this.propD = data.propD;
    this.baseProperties = new BaseProperties(data);
  }
}
