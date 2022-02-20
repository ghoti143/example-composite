export interface IBaseProperties extends BaseProperties {}
export class BaseProperties {
  propA: string;
  propB: string;

  constructor(data: any) {
    this.propA = data.propA;
    this.propB = data.propB;
  }
}
