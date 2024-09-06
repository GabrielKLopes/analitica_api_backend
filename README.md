
# Consulta de Umidade com Alerta

Este projeto foi desenvolvido como um teste técnico para a empresa Analitica. A aplicação backend foi construída com Node.js e TypeScript usando o framework NestJS. O objetivo é consultar a umidade atual de um local específico e gerar um alerta se a umidade estiver acima de um valor informado pelo usuário.



## Autor

- [@Gabriel Lopes](https://github.com/GabrielKLopes)


## Tecnologias
 - Linguagem: Node.js com TypeScript
 - Framework: NestJS
 - API Meteorológica: OpenWeather (https://openweathermap.org/api)
## Funcionalidades

- Recebe um valor de umidade e uma localização (latitude e longitude).
- Consulta a umidade atual do local informado usando a API do OpenWeather.
- Retorna um alerta se a umidade atual for maior que o valor informado.
- Retorna uma mensagem se a umidade atual for menor ou igual ao valor informado.


## Endpoints

```http
  POST /weather/humidity
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `humidity` | `number` | **Obrigatório**. O valor de umidade em porcentagem que você quer comparar.
| `lat` | `number` | **Obrigatório**. Latitude da localização para consultar a umidade atual. |
| `Lang` | `number` | **Obrigatório**. Longitude da localização para consultar a umidade atual. |

#### Exemplo de Requisição

```json
{
  "humidity": 80,
  "lat": -23.615470077098195,
  "Lang": -46.60030115275374
}
```

#### Exemplo de Resposta

- Se a umidade atual for maior que a umidade informada:
```json
{
  "alert": "Alerta: A umidade atual é 85%, maior que a umidade informada de 80%.",
  "data": {
    "coord": { "lon": -46.6003, "lat": -23.6155 },
    "weather": [{ "description": "Céu limpo" }],
    "main": { "temp": 22.5, "feels_like": 22.0, "temp_min": 20.0, "temp_max": 25.0, "pressure": 1015, "humidity": 85 },
    "visibility": 10000,
    "wind": { "speed": 3.6, "deg": 160 },
    "clouds": { "all": 0 },
    "dt": 1625247000,
    "sys": { "type": 1, "id": 4542, "country": "BR", "sunrise": 1625217505, "sunset": 1625264058 },
    "timezone": -10800,
    "id": 3469058,
    "name": "Cidade",
    "cod": 200
  }
}
```

- Se a umidade atual for menor que a umidade informada:
```json
{
  "message": "A umidade atual é 75%, menor que a umidade informada de 80%.",
  "data": {
    "coord": { "lon": -46.6003, "lat": -23.6155 },
    "weather": [{ "description": "Céu limpo" }],
    "main": { "temp": 22.5, "feels_like": 22.0, "temp_min": 20.0, "temp_max": 25.0, "pressure": 1015, "humidity": 75 },
    "visibility": 10000,
    "wind": { "speed": 3.6, "deg": 160 },
    "clouds": { "all": 0 },
    "dt": 1625247000,
    "sys": { "type": 1, "id": 4542, "country": "BR", "sunrise": 1625217505, "sunset": 1625264058 },
    "timezone": -10800,
    "id": 3469058,
    "name": "Cidade",
    "cod": 200
  }
}

```
- Se a umidade atual for igual à umidade informada:
```json
{
  "message": "A umidade atual é exatamente 80%, igual à umidade informada de 80%.",
  "data": {
    "coord": { "lon": -46.6003, "lat": -23.6155 },
    "weather": [{ "description": "Céu limpo" }],
    "main": { "temp": 22.5, "feels_like": 22.0, "temp_min": 20.0, "temp_max": 25.0, "pressure": 1015, "humidity": 80 },
    "visibility": 10000,
    "wind": { "speed": 3.6, "deg": 160 },
    "clouds": { "all": 0 },
    "dt": 1625247000,
    "sys": { "type": 1, "id": 4542, "country": "BR", "sunrise": 1625217505, "sunset": 1625264058 },
    "timezone": -10800,
    "id": 3469058,
    "name": "Cidade",
    "cod": 200
  }
}


```
## Configuração

- Clone o Repositório
```
git clone https://github.com/GabrielKLopes/analitica_api_backend.git
```

- Instalar Dependências

```
npm install
```

- Iniciar o Servidor
```
npm run start
```

## Testes

Use ferramentas como Insomnia ou Postman para testar o endpoint. Configure uma requisição POST para http://localhost:8080/weather/humidity com o corpo da requisição conforme descrito.
## Documentação

Para mais informações sobre a API do OpenWeather, consulte a [documentação oficial](https://openweathermap.org/api)