import { DatePipe } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-date-pipe',
  imports: [DatePipe],
  standalone: true,
  template: `@if(!isToday()) { Le {{date | date:'short'}} } @else { Aujourd'hui à {{date | date:'shortTime'}} }`,
})
export class DatePipeComponent {
  @Input({ required: true }) date!: Date

  isToday(): boolean {
    return this.date.getDay() === (new Date()).getDay()
  }
}
