import { Component, Input, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import FaceSnap from '../../core/models/face-snap'
import { FaceSnapsService } from '../../core/services/face-snaps.service'
import Picture from '../../core/types/picture'

@Component({
  selector: 'app-face-snap-view',
  templateUrl: './face-snap-view.component.html',
  styleUrl: './face-snap-view.component.scss',
})
export class FaceSnapViewComponent implements OnInit {
  @Input({ required: true }) facesnap!: FaceSnap

  snappedByUser = false
  picture!: Picture

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private faceSnapsService: FaceSnapsService,
  ) {}

  ngOnInit(): void {
    this.facesnap = this.faceSnapsService.getFaceSnapById(this.route.snapshot.params['id'])
    this.titleService.setTitle(`${this.facesnap.getTitle()} - FaceSnap`)

    this.snappedByUser = false
    this.picture = this.facesnap.getPicture()
  }

  onSnap(): void {
    if (this.snappedByUser) this.unSnap()
    else this.snap()
  }

  snap(): void {
    this.faceSnapsService
      .snapFaceSnapById(this.facesnap.getId(), 'snap')
    this.snappedByUser = true
  }

  unSnap(): void {
    this.faceSnapsService
      .snapFaceSnapById(this.facesnap.getId(), 'unsnap')
    this.snappedByUser = false
  }

  getGreenerStyle(): object {
    const topValue = 20
    const greenValue = (255 * Math.min(topValue, this.facesnap.getSnapCount() / topValue))
    return { color: `rgb(0, ${greenValue}, 0)` }
  }
}
