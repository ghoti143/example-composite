import { BaseProperties, IBaseProperties } from './BaseProperties';
import { payload } from './index';

export interface IBarProperties extends BarProperties {}
export class BarProperties {
  propE: string;
  propF: boolean;
  baseProperties: IBaseProperties;

  constructor(data: payload) {
    this.propE = data.propE;
    this.propF = data.propF;
    this.baseProperties = new BaseProperties(data);
  }
}
