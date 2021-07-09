import { FoodModel } from '../models/food-model'

describe('Classes', () => {
  it('Class FoodModel', () => {
    const foodModel = new FoodModel({
      name: 'Pizza',
      description: 'Pollo',
      price: 2000,
      inventory: 20
    })

    expect(foodModel.getFood()).toEqual(foodModel)
    expect(foodModel.getName()).toEqual('Pizza')
    expect(foodModel.getDescription()).toEqual('Pollo')
    expect(foodModel.getPrice()).toBe(2000)
    expect(foodModel.getinventory()).toBe(20)
  })
})
