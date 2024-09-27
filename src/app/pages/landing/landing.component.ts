import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  constructor(private router: Router) {}

  onContinue(e: MouseEvent): void {
    e.preventDefault()
    this.router.navigateByUrl('facesnaps')
  }
}
