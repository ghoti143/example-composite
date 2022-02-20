import { BaseProperties, IBaseProperties } from './BaseProperties';

export interface IBarProperties extends BarProperties {}
export class BarProperties {
  propE: boolean;
  propF: boolean;
  baseProperties: IBaseProperties;

  constructor(data: any) {
    this.propE = data.propE;
    this.propF = data.propF;
    this.baseProperties = new BaseProperties(data);
  }
}
