import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limit: number;
  show: boolean;
  name: string;
  destination: string;
}

export class ServerApp {
  static run({ base, limit, show, name, destination }: RunOptions) {
    console.log("Server is running...");
    const table = new CreateTable().execute({ base, limit });
    if (show) console.log(table);
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      destination: destination,
      fileName: name,
    });
    wasCreated
      ? console.log("File created successfully")
      : console.error("Error creating the file");
  }
}
