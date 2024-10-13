#!/user/bin/env node

import { getArgs } from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICT } from "./services/storage.service.js";

const saveToken = async (token) => {
    if (!token.length) {
        printError("Token not provided");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICT.token, token);
        printSuccess("Token saved");
    } catch (error) {
        printError(error.message);
    }
};

const initCLI = () => {
    const args = getArgs(process.argv);

    if (args.h) {
        printHelp();
    }
    if (args.s) {
        // save city
    }
    if (args.t) {
        return saveToken(args.t);
    }
    getWeather('moscow')
};

initCLI();
