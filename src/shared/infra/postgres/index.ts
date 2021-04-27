import { Client } from 'pg';

function getPostgresClient(): Client {
  const client = new Client({
    host: process.env.PG_HOST,
    port: Number(process.env.PG_PORT),
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    user: process.env.DB_USER_NAME,
  });

  return client;
}
export default getPostgresClient;
