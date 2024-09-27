import { Routes } from '@angular/router'
import { FaceSnapListComponent } from './pages/face-snap-list/face-snap-list.component'
import { FaceSnapViewComponent } from './pages/face-snap-view/face-snap-view.component'
import { LandingComponent } from './pages/landing/landing.component'

export const routes: Routes = [
  {
    title: 'Welcome to FaceSnaps',
    path: '', component: LandingComponent,
  },
  {
    title: 'FaceSnaps',
    path: 'facesnaps', component: FaceSnapListComponent,
  },
  {
    title: 'FaceSnaps view',
    path: 'facesnaps/:id', component: FaceSnapViewComponent,
  },
]
