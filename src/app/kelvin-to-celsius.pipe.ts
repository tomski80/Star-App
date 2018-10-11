import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {

  transform(tempKelvin: number): string {
    return (tempKelvin - 273.15).toFixed(3);
  }
}
