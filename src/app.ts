import { yarg } from "./config/plugins/yarg.plugins";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv)

// console.log(yarg)

// ! This is a self-invoking function
// ? This allows me to use async/await in the main function
(async () => {
  await main();
})();

async function main() {
  const { b: base, l: limit, s: show,n: name, d: destination  } = yarg;
  ServerApp.run({ base, limit, show, name, destination });
}
