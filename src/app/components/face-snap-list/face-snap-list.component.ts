import { Component, OnInit } from '@angular/core'
import FaceSnap from '../../core/models/face-snap'
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

  ngOnInit(): void {
    this.facesnapList.push(new FaceSnap(
      'Face de Snap 1',
      'Une ville génerée par ordinateur',
      new Date('2024-03-25 12:03'),
      5,
      {
        url: 'https://www.buzzwebzine.fr/wp-content/uploads/2022/09/Starry-ia-1-1-1200x666.jpg',
        title: 'Une image d\'une citee generé par prompt IA et trouvée sur internet',
        alt: 'Snap 1',
      },
    ))
    this.facesnapList.push(new FaceSnap(
      'Face de snap 2',
      'Une superbe photo à la montagne',
      new Date(),
      19,
      {
        url: 'https://cdn.photographylife.com/wp-content/uploads/2014/09/Nikon-D750-Image-Samples-2.jpg',
        title: 'Une image d\'une montagne prise par un photographe et trouvée sur internet',
        alt: 'Snap 2',
      },
    ))
    this.facesnapList.at(1)!.setLocation('a la montagne')
  }
}
