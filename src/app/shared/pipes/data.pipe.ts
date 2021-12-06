import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.length === 6) { //250322 --> 25/03/22
      return `${value.substr(0, 2)}/${value.substr(2, 2)}/${value.substr(4, 2)}`;
    } else if (value && value.length === 8) { //25-03-22 ou 25/03/22 --> 25/03/22
      return `${value.substr(0, 2)}/${value.substr(3, 2)}/${value.substr(6, 2)}`;
    } else if (value && value.length === 10) { //25-03-2022 ou 25/03/2022 --> 25/03/22
      return `${value.substr(0, 2)}/${value.substr(3, 2)}/${value.substr(6, 4)}`;
    } else {
      return value;
    }
  }
}
