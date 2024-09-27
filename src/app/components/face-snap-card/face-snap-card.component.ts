import { CommonModule, DatePipe, NgClass, NgStyle } from '@angular/common'
import { Component, CUSTOM_ELEMENTS_SCHEMA, HostBinding, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { NgStringPipesModule } from 'ngx-pipes'
import FaceSnap from '../../core/models/face-snap'
import { FaceSnapsService } from '../../core/services/face-snaps.service'
import Picture from '../../core/types/picture'
import { DatePipeComponent } from '../helpers/date-format/date-format.component'

@Component({
  selector: 'app-face-snap-card',
  standalone: true,
  imports: [DatePipeComponent, CommonModule, NgStyle, NgClass, NgStringPipesModule, DatePipe],
  templateUrl: './face-snap-card.component.html',
  styleUrl: './face-snap-card.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FaceSnapCardComponent implements OnInit {
  @Input({ required: true }) facesnap!: FaceSnap

  @HostBinding('class.snapped') isSnapped = false

  constructor(
    private router: Router,
    private faceSnapsService: FaceSnapsService,
  ) {}

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

  onView(): void {
    this.router.navigateByUrl(`facesnaps/${this.facesnap.getId()}`)
  }

  snap(): void {
    this.faceSnapsService
      .snapFaceSnapById(this.facesnap.getId(), 'snap')
    this.snappedByUser = true
    this.isSnapped = true
  }

  unSnap(): void {
    this.faceSnapsService
      .snapFaceSnapById(this.facesnap.getId(), 'unsnap')
    this.snappedByUser = false
    this.isSnapped = false
  }

  getGreenerStyle(): object {
    const topValue = 20
    const greenValue = (255 * Math.min(topValue, this.facesnap.getSnapCount() / topValue))
    return { color: `rgb(0, ${greenValue}, 0)` }
  }
}
