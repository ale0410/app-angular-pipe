import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dias'
})
export class DiasPipe implements PipeTransform {

  transform(value: any[]): any[] {
    let diaActual:any = new Date();

    console.log(diaActual);

    return [];
  }

}
