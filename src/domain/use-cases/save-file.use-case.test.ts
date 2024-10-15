import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe("Save File Use Case", () => {
  beforeEach(() => {
    // Cleaning the output folder
    fs.rmSync("outputs", { recursive: true });
    // fs.rmSync("tests", { recursive: true });
  });
  afterEach(() => {
    // Cleaning the output folder
    fs.rmSync("outputs", { recursive: true });
    // fs.rmSync("tests", { recursive: true });
  });
  test("Should save a file with default options", () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: "Hello World",
    };
    const path = `output/table.txt`;
    const result = saveFile.execute(options);
    const checkFile = fs.existsSync(path);
    const content = fs.readFileSync(path, "utf8");

    // Checking if the function returned true
    expect(result).toBe(true);
    // Checking if the file was created
    expect(checkFile).toBe(true);
    // Checking if the file content is what I wrote
    expect(content).toBe(options.fileContent);
  });
  test("Should save a file with custom options", () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: "Hello world",
      destination: "tests",
      fileName: "test",
    };
    const path = `${options.destination}/${options.fileName}.txt`;
    const result = saveFile.execute(options);
    const checkFile = fs.existsSync(path);
    const content = fs.readFileSync(path, "utf8");

    // Checking if the function returned true
    expect(result).toBe(true);
    // Checking if the file was created
    expect(checkFile).toBe(true);
    // Checking if the file content is what I wrote
    expect(content).toBe(options.fileContent);
  });
});
