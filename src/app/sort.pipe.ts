import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, args: any): any {

    const sortDirection = args[0];

    //Ordena los elementos de manera ascendente
    if (sortDirection === 'asc') {
      let newValue = value.sort((a: any, b: any) => 
        a.name.localeCompare(b.name)
      );
      return newValue;
    }
    else {
      //Ordena los elementos de manera descendente
      if (sortDirection === 'desc') {
        let newValue = value.sort((a: any, b: any) => 
          b.name.localeCompare(a.name)
        );
        return newValue
      } 
      else 
      {
        //No se han ejecutado los eventos que ordenan el arreglo
        return value;
      }
    }
  }

}
