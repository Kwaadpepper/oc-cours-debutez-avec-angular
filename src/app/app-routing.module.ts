import { NgModule } from '@angular/core'
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router'
import { routes } from './app.routes'

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true,
    enableViewTransitions: true,
  }),
  RouterLink,
  RouterLinkActive],
  exports: [RouterModule],
})
export class AppRoutingModule {}
