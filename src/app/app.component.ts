import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component'
import { HeaderComponent } from './layouts/header/header.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'snapface'

  onClick(e: MouseEvent): void {
    e.preventDefault()

    alert('toto')
  }
}
