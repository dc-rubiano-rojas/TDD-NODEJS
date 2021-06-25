import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const foodModel = new FoodModel('Pizza', 'Pollo', 2000)

    expect(foodModel.getName()).toEqual('Pizza')
    expect(foodModel.getDescription()).toEqual('Pollo')
    expect(foodModel.getPrice()).toBe(2000)
  })
})
