import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'take'
})
export class TakePipe implements PipeTransform {

  transform(value: any[], args?: number): any[] {
    return value.filter((recipe, index) => (index < args));
  }

}
