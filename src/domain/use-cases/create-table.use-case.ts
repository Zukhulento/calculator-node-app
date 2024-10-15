export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}
export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export class CreateTable implements CreateTableUseCase {
  constructor /*
        This allows me to inject dependencies into the use case. (DI)
        */() {}
  execute({ base, limit = 10 }: CreateTableOptions) {
    let content = ``;
    for (let index = 1; index <= limit; index++) {
      content += `${base} x ${index} = ${base * index}`;
      if (index < limit) {
        content += `\n`;
      }
    }
    return content;
  }
}
