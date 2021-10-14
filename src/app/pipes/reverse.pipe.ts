import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    // invertirmos el contenido de la cadena
    return value.split('').reverse().join('');
  }
}
