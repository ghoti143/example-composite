import { payload } from "./index";

export interface IBaseProperties extends BaseProperties {}
export class BaseProperties {
  propA: string;
  propB: string;

  constructor(data: payload) {
    this.propA = data.propA;
    this.propB = data.propB;
  }
}
