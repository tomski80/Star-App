import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parsecToLy'
})
export class ParsecToLightYearPipe implements PipeTransform {

  transform(parsec: number): string {
    if (parsec) {
    return (parsec * 3.26156).toFixed(3);
    }else {
      return null;
    }
  }

}
