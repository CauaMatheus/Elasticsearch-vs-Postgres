import { Client as ElasticClient } from 'elasticsearch';

import getPostgresClient from '@shared/infra/postgres';

class ImportFromPGUseCase {
  constructor(
    private elasticClient: ElasticClient,
  ) { }
  async execute(): Promise<void> {
    const pgClient = getPostgresClient();
    await pgClient.connect();

    const { rows } = await pgClient.query(`SELECT * FROM rna LIMIT ${process.env.IMPORT_SIZE}`);

    rows.forEach(async (row) => {
      await this.elasticClient.index({
        index: 'rna',
        type: 'rna_types',
        body: row,
      }, (err) => {
        if (err) {
          throw new Error('Import failed');
        }
      });
    });
  }
}

export { ImportFromPGUseCase };
