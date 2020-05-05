import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class TranslateTestingServiceStub {
  public get<T>(key: T): Observable<T> {
    return of(key);
  }

  public addLangs(langs: string[]) {}

  public setDefaultLang(lang: string) {}

  public getBrowserLang(): string {
    return 'en';
  }

  public use(lang: string) {}
}
