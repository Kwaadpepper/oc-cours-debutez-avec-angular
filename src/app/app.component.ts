import { Component, OnInit } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FaceSnapComponent } from './components/face-snap/face-snap.component'
import FaceSnap from './core/models/face-snap'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'snapface'

  facesnap!: FaceSnap

  public ngOnInit(): void {
    this.facesnap = new FaceSnap(
      'Face de snap',
      'J\'aime les peluches',
      new Date(),
      5,
      {
        url: 'https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg',
        title: 'Une image d\'une montagne prise par un photographe et trouvée sur internet',
        alt: 'Snap 1',
      },
    )
  }
}
