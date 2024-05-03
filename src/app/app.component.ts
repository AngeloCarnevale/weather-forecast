import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'weather-forecast';
  data:any = {};
  httpClient = inject(HttpClient);
  api_key = '45937c74ec7cc2298a6fe8c7bb4417df';

  searchWeatherForecast() {
    const response = this.httpClient.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Campinas&appid=${this.api_key}`
    );
    console.log(
      response.subscribe((data: any) => {
        this.data = data;
        console.log(data.name);
      })
    );
  }
}
