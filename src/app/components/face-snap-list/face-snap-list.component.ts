import { Component, OnInit } from '@angular/core'
import FaceSnap from '../../core/models/face-snap'
import { FaceSnapsService } from '../../core/services/face-snaps.service'
import { FaceSnapComponent } from '../face-snap/face-snap.component'

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss',
})
export class FaceSnapListComponent implements OnInit {
  facesnapList: FaceSnap[] = []

  constructor(private faceSnapsService: FaceSnapsService) {
  }

  ngOnInit(): void {
    this.facesnapList = this.faceSnapsService.getFacesnaps()
  }
}
