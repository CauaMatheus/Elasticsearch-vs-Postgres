import getPostgresClient from '@shared/infra/postgres';

interface IDataModel {
  id: string
  upi: string
  timestamp: string
  userstamp: string
  crc64: string
  len: number,
  seq_short: string
  seq_long: string | null,
  md5: string
}

class ListPgDataUseCase {
  async execute(): Promise<IDataModel[]> {
    const pgClient = getPostgresClient();
    pgClient.connect();

    console.time('Postgres search time');
    const { rows } = await pgClient.query(`SELECT * FROM rna LIMIT ${process.env.IMPORT_SIZE}`);
    console.timeEnd('Postgres search time');

    await pgClient.end();
    return rows as IDataModel[];
  }
}

export { ListPgDataUseCase };
