import { RegisterVehicle } from '../controllers/register-vehicle'
import { MissingFormalParameter } from '../errors/client-error'

describe('RegisterVehicle', () => {
  test('if the name does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequests = {
      body: {
        // name: 'Nissam',
        color: 'Black',
        model: 'DXT',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequests)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('name'))
  })

  test('if the model does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequests = {
      body: {
        name: 'Nissam',
        color: 'Black',
        // model: 'DXT',
        year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequests)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('model'))
  })

  test('if the year does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequests = {
      body: {
        name: 'Nissam',
        model: 'DXT',
        color: 'Black'
        // year: 2020
      }
    }
    const httpResponse = sut.handle(httpRequests)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('year'))
  })

  test('if the color does not exist return 400', () => {
    const sut = new RegisterVehicle()
    const httpRequests = {
      body: {
        name: 'Nissam',
        model: 'DXT',
        year: 2020
        // color: 'Black'
      }
    }
    const httpResponse = sut.handle(httpRequests)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingFormalParameter('color'))
  })
})
