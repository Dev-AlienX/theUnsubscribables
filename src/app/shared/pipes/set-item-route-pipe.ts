import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'setItemRoute',
  pure: true,
})
export class SetItemRoutePipe implements PipeTransform {
  transform(value: any , ...args: any): string {
    const name = args[0].name;
    const nameArr: string[] = name.split(' ');
    nameArr[0] = nameArr[0].toLowerCase();
    return value = nameArr.join('');
  }
}
