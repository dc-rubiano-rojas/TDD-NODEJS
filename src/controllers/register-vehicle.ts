import { HttpRequest, HttpResponse } from '../interface/http-interface'
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class RegisterVehicle {
  handle (httpRequests: HttpRequest): HttpResponse {
    const requiredProperties = ['name', 'model', 'year', 'color']
    for (const props of requiredProperties) {
      if (!httpRequests.body[props]) {
        return {
          statusCode: 400,
          body: new Error(`error in the: ${props}`)
        }
      }
    }
    return {
      statusCode: 200,
      body: ''
    }
  }
}
