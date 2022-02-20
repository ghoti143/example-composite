import { Operation } from './Operation';

const data = {
  propA: 'hello',
  propB: 'world',
  propC: 123,
  propD: 456,
  propE: true,
  propF: false,
};

const opFoo = Operation.create(data, 'Foo');
opFoo.logPoperties();

const opBar = Operation.create(data, 'Bar');
opBar.logPoperties();
