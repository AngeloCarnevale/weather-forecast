import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TemperatureService {
  private apiKey = '45937c74ec7cc2298a6fe8c7bb4417df';

  constructor(private httpClient: HttpClient) {}

  getData(city = 'Campinas'): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    
    return this.httpClient.get(apiUrl);
  }

  getDataOnInit():Observable<any> {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=Campinas&appid=${this.apiKey}&units=metric`)
  }
 }
