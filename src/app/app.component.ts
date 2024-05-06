import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureService } from './services/temperature.service';
import { FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [TemperatureService],
  imports: [RouterOutlet, HttpClientModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'weather-forecast';
  data: any = {};
  httpClient = inject(HttpClient);
  api_key = '45937c74ec7cc2298a6fe8c7bb4417df';
  input_city = '';
  sunset = '';
  sunrise = '';

  constructor(private service: TemperatureService) {}

  ngOnInit(): void {
    this.service.getDataOnInit().subscribe((data) => {
      this.data = data;
      this.sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
      this.sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    });
  }

  searchWeatherForecast() {
    return this.service.getData(this.input_city).subscribe((data) => {
      this.data = data;
      this.sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();
      this.sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    });
  }
}
