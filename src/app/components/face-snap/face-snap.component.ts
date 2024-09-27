import { CommonModule, NgClass, NgStyle } from '@angular/common'
import { Component, HostBinding, Input, OnInit } from '@angular/core'
import { NgStringPipesModule } from 'ngx-pipes'
import FaceSnap from '../../core/models/face-snap'
import Picture from '../../core/types/picture'
import { DatePipeComponent } from '../helpers/date-format/date-format.component'

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [DatePipeComponent, CommonModule, NgStyle, NgClass, NgStringPipesModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  @Input({ required: true }) facesnap!: FaceSnap

  @HostBinding('class.snapped') isSnapped = false

  snappedByUser = false
  picture!: Picture

  ngOnInit(): void {
    this.snappedByUser = false
    this.picture = this.facesnap.getPicture()
  }

  onSnap(): void {
    if (this.snappedByUser) this.unSnap()
    else this.snap()
  }

  snap(): void {
    this.facesnap.incSnaps()
    this.snappedByUser = true
    this.isSnapped = true
  }

  unSnap(): void {
    this.facesnap.subSnaps()
    this.snappedByUser = false
    this.isSnapped = false
  }

  getGreenerStyle(): object {
    const topValue = 20
    const greenValue = (255 * Math.min(topValue, this.facesnap.getSnapCount() / topValue))
    return { color: `rgb(0, ${greenValue}, 0)` }
  }
}
