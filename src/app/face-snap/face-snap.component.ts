import { Component, OnInit } from '@angular/core'

interface Picture {
  url: string
  title: string
  alt: string
}

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent implements OnInit {
  title = 'Title'
  description = 'Description'
  createdAt: Date = new Date()
  snaps = 0
  picture!: Picture
  snappedByUser = false

  ngOnInit(): void {
    this.title = 'Face de snap'
    this.description = 'J\'aime les peluches'
    this.snaps = 5
    this.picture = {
      url: 'https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg',
      title: 'Une image d\'une montagne prise par un photographe et trouvée sur internet',
      alt: 'Snap 1',
    }
  }

  onSnap(): void {
    if (this.snappedByUser) this.unSnap()
    else this.snap()
  }

  snap(): void {
    this.snaps++
    this.snappedByUser = true
  }

  unSnap(): void {
    this.snaps--
    this.snappedByUser = false
  }
}
