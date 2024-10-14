import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    // This option turns the base into a required argument
    demandOption: true,
    describe: "Base for the multiplication table",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Limit for the multiplication table",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show the multiplication table on console",
  })
  .option("n",{
    alias: "name",
    type: "string",
    default: "table",
    describe: "File name"
  })
  .option("d",{
    alias: "destination",
    type: "string",
    default: "outputs",
    describe: "File destination"
  })
  .check((argv, options) => {
    if (argv.b < 1) throw "The base must be greater than 0";
    return true
  })
  .parseSync();
