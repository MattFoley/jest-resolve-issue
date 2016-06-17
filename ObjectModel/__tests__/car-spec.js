import Car from 'Car';

jest.unmock('Car');
jest.mock('react-native', () => {
  return require('ReactNativeMock');
});

describe('isCar', () => {
  it('should return true', () => {
    let car = new Car();
    expect(car.isCar()).toBeTruthy();
  });
});
