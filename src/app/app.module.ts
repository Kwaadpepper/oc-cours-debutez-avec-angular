import { provideHttpClient } from '@angular/common/http'
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule, provideZoneChangeDetection } from '@angular/core'

import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FaceSnapComponent } from './components/face-snap/face-snap.component'
import { HeaderComponent } from './layouts/header/header.component'
import { FaceSnapListComponent } from './pages/face-snap-list/face-snap-list.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FaceSnapListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FaceSnapComponent,
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
