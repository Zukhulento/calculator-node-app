import { yarg } from "./config/plugins/yarg.plugins";

// Destructuring the argv object
const { b: base, l: limit, s: show } = yarg;

const header = `=============================
        Tabla del ${base} 
=============================\n
`;
let content = ``;
for (let index = 1; index <= limit; index++) {
  content += `${base} x ${index} = ${base * index}\n`;
}
if (show) {
  console.log(header + content);
}
import fs from "node:fs";
const outputPath = `output`;
// MkdirSync creates a directory if it does not exist
fs.mkdirSync(outputPath, { recursive: true });
// writeFile creates the file in the given path, it needs the content and a callback function for error handling
fs.writeFile(`${outputPath}/tabla-${base}.txt`, header + content, (err) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
    console.log("File created successfully");
  }
});
