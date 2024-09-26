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
  facesnapAutre!: FaceSnap

  public ngOnInit(): void {
    this.facesnap = new FaceSnap(
      'Face de snap 1',
      'Une ville génerée par ordinateur',
      new Date(),
      5,
      {
        url: 'https://www.buzzwebzine.fr/wp-content/uploads/2022/09/Starry-ia-1-1-1200x666.jpg',
        title: 'Une image d\'une citee generé par prompt IA et trouvée sur internet',
        alt: 'Snap 1',
      },
    )
    this.facesnapAutre = new FaceSnap(
      'Face de snap 2',
      'Une superbe photo à la montagne',
      new Date(),
      19,
      {
        url: 'https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg',
        title: 'Une image d\'une montagne prise par un photographe et trouvée sur internet',
        alt: 'Snap 2',
      },
    )
    this.facesnapAutre.setLocation('a la montagne')
  }
}
