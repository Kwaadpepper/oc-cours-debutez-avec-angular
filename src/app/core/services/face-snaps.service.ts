import { Injectable } from '@angular/core'
import { cloneDeep } from 'lodash'
import FaceSnap from '../models/face-snap'
import { SnapAction } from '../types/snap-action.type'

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private facesnapList: FaceSnap[] = []

  constructor() {
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
    ).withLocation('a la montagne'))
  }

  getFaceSnaps(): FaceSnap[] {
    return cloneDeep(this.facesnapList)
  }

  snapFaceSnapById(id: string, action: SnapAction): void {
    const faceSnap = this.facesnapList.find(fs => fs.getId() === id)
    if (faceSnap === undefined) {
      throw new Error('Facesnap not found')
    }
    faceSnap.snap(action)
  }
}
