/* eslint-disable @typescript-eslint/strict-boolean-expressions */
export class RegisterVehicle {
  handle (httpRequests: any): any {
    if (!httpRequests.body.name) {
      return {
        statusCode: 400,
        body: new Error('error in the: name')
      }
    }
    if (!httpRequests.body.model) {
      return {
        statusCode: 400,
        body: new Error('error in the: model')
      }
    }
  }
}
