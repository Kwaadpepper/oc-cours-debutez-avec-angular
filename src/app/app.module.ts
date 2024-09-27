import { provideHttpClient } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, provideZoneChangeDetection } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { NgStringPipesModule } from 'ngx-pipes'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FaceSnapCardComponent } from './components/face-snap-card/face-snap-card.component'
import { DatePipeComponent } from './components/helpers/date-format/date-format.component'
import { HeaderComponent } from './layouts/header/header.component'
import { FaceSnapListComponent } from './pages/face-snap-list/face-snap-list.component'
import { FaceSnapViewComponent } from './pages/face-snap-view/face-snap-view.component'
import { LandingComponent } from './pages/landing/landing.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    FaceSnapListComponent,
    FaceSnapViewComponent,
  ],
  imports: [
    BrowserModule,
    NgStringPipesModule,
    AppRoutingModule,
    FaceSnapCardComponent,
    DatePipeComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideHttpClient(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    {
      provide: LOCALE_ID, useValue: 'FR-fr',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
