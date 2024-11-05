# Weather Forecast CLI App (Node.js )

[![npm version](https://img.shields.io/npm/v/weather-forecast-cli-app)](https://www.npmjs.com/package/weather-forecast-cli-app)

## Description
A Command Line Interface (CLI) application for getting weather forecasts. This tool allows users to retrieve current weather information and forecasts for any location via a simple CLI command.

It is built with **Node.js** to ensure fast and efficient operation in the command line environment.

## Global Installation

You can install CLI globally from npm:

```bash
npm install -g weather-forecast-cli-app
```

## Usage
Once installed globally, you can start the application using command:

```bash
weather
```
## Setting up API Key
For the first use, you need to set up an API key from [OpenWeather](https://openweathermap.org/price) (free version available). Use the following command to save your API key:

```bash
weather -t YOUR_API_KEY
```

Replace YOUR_API_KEY with the key you received from OpenWeather.

## Setting up City

```bash
weather -s CITY
```

## Commands
weather (without parameters) - Display the current weather
- -h - display help with available commands
- -s [CITY] - set the city for which to retrieve the weather
- -t [API_KEY] - save the API key for accessing weather data



### Author
Tatiana Vanzidler

### Contacts
You can connect with me on [LinkedIn](https://www.linkedin.com/in/tatiana-vanzidler/).
