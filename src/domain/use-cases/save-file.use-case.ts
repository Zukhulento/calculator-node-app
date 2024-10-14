import fs from "fs";

export interface SaveFileUseCase {
  execute: (options: Options) => boolean;
}
export interface Options {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {} // Here I could send some dependencies to the use case.
  execute({
    fileContent,
    destination = "output",
    fileName = "table",
  }: Options): boolean {
    // MkdirSync creates a directory if it does not exist
    fs.mkdirSync(destination, { recursive: true });
    // writeFile creates the file in the given path, it needs the content and a callback function for error handling
    fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent);
    return true
  }
}
