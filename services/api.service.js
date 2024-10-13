import https from "https";
import { getKeyValue, TOKEN_DICT } from "./storage.service.js";
import axios from "axios";
const getWeather = async (city) => {
    const token = await getKeyValue(TOKEN_DICT.token);
    if (!token) {
        throw new Error("Token undefined! Set token command: -t [API_KEY]");
    }

    const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
            params: {
                q: city,
                appid: token,
                lang: "en",
                units: "metric",
            },
        }
    );
	return data;
};

export { getWeather };
