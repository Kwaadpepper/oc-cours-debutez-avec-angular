import { DatePipe } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-date-pipe',
  imports: [DatePipe],
  standalone: true,
  template: `@if(!isToday()) { Le {{date | date:'dd/MM/YY à HH:mm'}} } @else { Aujourd'hui à {{date | date:'HH:mm'}} }`,
})
export class DatePipeComponent {
  @Input({ required: true }) date!: Date

  isToday(): boolean {
    return this.date.getDay() === (new Date()).getDay()
  }
}
