import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
    console.log(chalk.bgRed("ERROR: ", error));
};

const printSuccess = (msg) => {
    console.log(chalk.bgGreen("SUCCESS: ", msg));
};

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan("HELP")}
		Without parameters - weather output
		-s [CITY] - set the city
		-h - display help
		-t [API_KEY] - save the token
		`
    );
};

export { printError, printSuccess, printHelp };
