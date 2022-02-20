import { Operation } from './Operation';

export type payload = {
  propA: string,
  propB: string,
  propC: number,
  propD: number,
  propE: string,
  propF: boolean,
}

const data: payload = {
  propA: 'hello',
  propB: 'world',
  propC: 123,
  propD: 99,
  propE: 'choo',
  propF: false,
};

const opFoo1 = Operation.create(data, 'Foo');  // EXPECT validation pass
const opBar1 = Operation.create(data, 'Bar');  // EXPECT validation pass

opFoo1.onUpdate();
opBar1.onUpdate();

//const opFoo2 = Operation.create({...data, propC: -1}, 'Foo');  // EXPECT validation fail
//const opBar2 = Operation.create({...data, propE: 'wha'}, 'Bar');  // EXPECT validation fail
