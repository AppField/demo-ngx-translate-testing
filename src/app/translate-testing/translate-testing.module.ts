import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { TranslateTestingPipeStub } from './translate-testing.pipe';
import { TranslateTestingServiceStub } from './translate-testing.service';

const translations: any = {};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

@NgModule({
  declarations: [TranslateTestingPipeStub],
  providers: [
    {
      provide: TranslateService,
      useClass: TranslateTestingServiceStub
    },
    {
      provide: TranslatePipe,
      useClass: TranslateTestingPipeStub
    }
  ],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: FakeLoader
      }
    })
  ],
  exports: [TranslateTestingPipeStub]
})
export class TranslateTestingModule {}
