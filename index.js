const enquirer = require("enquirer");
const chalk = require("chalk");

const promptQuestion = `CocoaPods ${chalk.dim.underline(
  "(https://cocoapods.org/)"
)} ${chalk.reset.bold(
  "is not installed. CocoaPods is necessary for the iOS project to run correctly. Do you want to install it?"
)}`;

async function askPrompt() {
  const { shouldInstallCocoaPods } = await enquirer.prompt([
    {
      type: "select",
      name: "shouldInstallCocoaPods",
      message: promptQuestion,
      choices: ["a", "b", "c", "d"]
    }
  ]);
}

askPrompt();
