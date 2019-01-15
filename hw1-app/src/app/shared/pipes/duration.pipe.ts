import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
  transform(minutes: number): string {
    let hours = (Math.floor(minutes/60));
    let min = minutes - hours*60;
    return hours > 0 ? `${hours}h ${minutes}min` : `${min}min`;
  }
}
