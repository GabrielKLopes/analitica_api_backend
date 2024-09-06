import axios from 'axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
@Injectable()
export class WeatherService {
    private apiKey = '413b0eeb65e6c1f0c431283f2bfbfd3e'

    async getWeather(lat: number, lang:number): Promise<any>{
        try{
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lang}&appid=${this.apiKey}&units=metric&lang=pt_br`;
            const response = await axios.get(url);

            if(!response.data ||!response.data.main || !response.data.main.humidity ){
                throw new HttpException('Dados incompletos', HttpStatus.BAD_REQUEST);
            }
            return response.data;
        }catch(error){
            if(error.response){
                throw new HttpException('Erro API OpenWeather', error.response.status || HttpStatus.BAD_REQUEST);
            }
            throw new HttpException('Falha ao buscar dados', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
