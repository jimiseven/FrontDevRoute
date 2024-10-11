import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    // Verificamos que el valor es un string y luego lo invertimos
    return value.split('').reverse().join('');
  }

}
