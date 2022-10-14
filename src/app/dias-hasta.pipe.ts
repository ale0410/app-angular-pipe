import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diasHasta'
})
export class DiasHastaPipe implements PipeTransform {

  transform(value: any[]): any[] {
    let fActual:any = new Date();

    console.log(fActual);

    return [];
  }

}
