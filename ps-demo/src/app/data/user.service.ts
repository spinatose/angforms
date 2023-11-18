import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any>{
    return this.http.post('https://putsreq.com/ECiEwsLEjPiZiW1f0Xam', userSettings)
    //return of(userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(["monthly", "annual", "permanente"]);
  }
}
