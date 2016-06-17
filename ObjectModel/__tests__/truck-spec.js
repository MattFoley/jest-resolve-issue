import Truck from 'Truck';

jest.unmock('Truck');
jest.mock('react-native', () => {
  return require('ReactNativeMock');
});

describe('isTruck', () => {
  it('should return true', () => {
    let truck = new Truck();
    expect(truck.isTruck()).toBeTruthy();
  });
});
