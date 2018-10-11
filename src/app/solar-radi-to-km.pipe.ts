import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'radiiToKm'
})
export class RadiiToKmPipe implements PipeTransform {

  /**
   * Pipe,
   * transforms Solar or Jovian Radii to Kilometers
   * @param value - value to be transformed
   * @param name - optional parameter to determin if value is SolarRadii or JovianRadii
   */
  transform(value: number, name?: string ): string {
    let rKm = 1;
    switch (name) {
      case 'solar':
        rKm = 695700;
      break;
      case 'jovian':
        rKm = 71492;
      break;
      default:
      rKm = 695700;
      break;
    }
    return (value * rKm).toFixed(3);
  }
}
