import { VehicleHelper } from '../helpers/vehicle-model-helper'

export class VehicleModel {
  constructor (private readonly vechicle: VehicleHelper) {}

  getName (): string {
    return this.vechicle.name
  }

  getModel (): string {
    return this.vechicle.model
  }

  getYear (): number {
    return this.vechicle.year
  }

  getPrice (): number {
    return this.vechicle.price
  }

  getInventory (): boolean {
    return this.vechicle.inventory
  }
}
