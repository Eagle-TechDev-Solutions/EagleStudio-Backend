import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";

dotenv.config({
  path:
    process.env.NODE_ENV !== undefined
      ? `.${process.env.NODE_ENV.trim()}.env`
      : ".env",
});

const Config: DataSourceOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [__dirname + "/./**/*.entity{.ts,.js}"],
  migrations: [__dirname + "/./migrations/*{.ts,.js}"],
  synchronize: false,
  migrationsRun: true,
  logging: false
};

export const AppDataSource: DataSource = new DataSource(Config);