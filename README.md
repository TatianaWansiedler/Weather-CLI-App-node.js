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

## Local Installation 

To install locally from GitHub, clone this repository and install dependencies manually:

1. Clone repository:

```bash
git clone https://github.com/TatianaWansiedler/weather-forecast-cli-app.git

cd weather-forecast-cli-app
```

2. Install dependencies:

```bash
npm install
```

Alternatively, if you installed it locally, use it with npx:

```bash
npx weather-forecast-cli-app
```

## Usage
Once installed globally, you can start the application using command:

- globaly
```bash
weather
```
- localy

```bash
npm start 
```

## Setting up API Key
For the first use, you need to set up an API key from [OpenWeather](https://openweathermap.org/price) (free version available). Use the following command to save your API key:

- globaly
```bash
weather -t YOUR_API_KEY
```
- localy
```bash
npm start -t YOUR_API_KEY
```

Replace YOUR_API_KEY with the key you received from OpenWeather.

## Commands
weather (without parameters) - Display the current weather
- -s [CITY] - Set the city for which to retrieve the weather

- -h - Display help with available commands

- -t [API_KEY] - Save the API key for accessing weather data

These commands make it easy to set your preferred city and save an API key for authentication.


### Author
Tatiana Vanzidler

### Contacts
You can connect with me on [LinkedIn](https://www.linkedin.com/in/tatiana-vanzidler/).
