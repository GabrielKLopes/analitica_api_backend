import { IsNumber, Min, Max } from 'class-validator';

export class HumidityDto {
  @IsNumber({}, { message: 'A umidade deve ser um número' })
  @Min(0, { message: 'A umidade deve ser pelo menos 0%' })
  @Max(100, { message: 'A umidade deve ser no máximo 100%' })
  humidity: number;

  @IsNumber({}, { message: 'A latitude deve ser um número' })
  @Min(-90, { message: 'A latitude deve ser no mínimo -90' })
  @Max(90, { message: 'A latitude deve ser no máximo 90' })
  lat: number;

  @IsNumber({}, { message: 'A longitude deve ser um número' })
  @Min(-180, { message: 'A longitude deve ser no mínimo -180' })
  @Max(180, { message: 'A longitude deve ser no máximo 180' })
  lang: number;
}
