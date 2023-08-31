#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

// Questions after the card 
const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:toheebbadru97@yahoo.com");
                    console.log("\nDone, see you soon.\n");
                }
            },
            {
                name: "Just quit.",
                value: () => {
                    console.log("Good Bye!\n");
                }
            }
        ]
    }
];

// Data for the card
const data = {
    name: chalk.bold.green("        Toheeb Badru"),
    work: `${chalk.white("Software Developer")} ${chalk
        .hex("#2b82b2")
        .bold("BYU-I")}`,
    //blog: chalk.gray("https://dev.to/") + chalk.whiteBright(""),
    //twitter: chalk.gray("https://twitter.com/") + chalk.cyan(""),
    github: chalk.gray("https://github.com/") + chalk.green("TBadru"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.blue("toheeb-badru"),
   // web: chalk.cyan(""),
    npx: chalk.red("npx") + " " + chalk.white("toheebbadru"),

    labelWork: chalk.white.bold("       Work:"),
    labelBlog: chalk.white.bold("     Blog:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

// Build the card
const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        `${data.labelBlog}  ${data.blog}`,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "An ambitious full-stack software engineer with a passion for creating innovative and scalable solutions."
        )}`,
        `${chalk.italic("I have worked on projects in various domains/industries such as International Trade, Publishing, Financial and Insurance sectors, Aerospace and Aviation delivering high-quality software that meets the needs of the business/clients")}`,
        `${chalk.italic("I am always eager to learn new skills, especially in the .NET ecosystem and take on new challenges in the software development field .")}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

// Print the card
console.log(me);

// Optional tip to help users use the links
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");

// Show the tip 
console.log(tip);

// Ask the Inquirer questions. 
prompt(questions).then(answer => answer.action());