import { HumidityDto } from "./dto/weather.dto";
import { WeatherService } from "./weather.service";
import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";

@Controller("weather")
export class WeatherController {
    constructor(private readonly weatherService: WeatherService){}

    @Post('humidity')
    @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    async checkHumidity(@Body() humidityDto: HumidityDto){
            const {humidity, lat, lang} = humidityDto;
            const currentWeather = await this.weatherService.getWeather(lat, lang);
            const currentHumidity = currentWeather.main.humidity;

            if (currentHumidity > humidity) {
                return {
                  alert: `Alerta: A umidade atual é ${currentHumidity}%, maior que a umidade informada de ${humidity}%.`,
                  data: currentWeather,
                };
            } else if (currentHumidity < humidity) {
                return {
                  message: `A umidade atual é ${currentHumidity}%, menor que a umidade informada de ${humidity}%.`,
                  data: currentWeather,
                };
            } else {
                return {
                  message: `A umidade atual é exatamente ${currentHumidity}%, igual à umidade informada de ${humidity}%.`,
                  data: currentWeather,
                };
            }
        }
}
