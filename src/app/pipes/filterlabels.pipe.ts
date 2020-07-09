import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterlabels'
})
export class FilterlabelsPipe implements PipeTransform {

  transform(listOfNames: string[], nameToFilter: string): string[] {
    if(!listOfNames) return null;
    if(!nameToFilter) return listOfNames;

    return listOfNames.filter(n => n.toLowerCase().indexOf(nameToFilter.toLowerCase()) >= 0);
  }

}
