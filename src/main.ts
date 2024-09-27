import { registerLocaleData } from '@angular/common'
import * as fr from '@angular/common/locales/fr'
import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

registerLocaleData(fr.default)

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err))
