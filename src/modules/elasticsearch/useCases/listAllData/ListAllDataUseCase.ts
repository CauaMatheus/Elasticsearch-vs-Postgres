import { Client as ElasticClient, SearchResponse } from 'elasticsearch';

class ListAllDataUseCase {
  constructor(
    private elasticClient: ElasticClient,
  ) { }

  async execute(): Promise<SearchResponse<unknown>> {
    console.time('elasticsearch time');
    const data = await this.elasticClient.search({
      index: 'rna',
      size: Number(process.env.IMPORT_SIZE),
    });
    console.timeEnd('elasticsearch time');
    return data;
  }
}

export { ListAllDataUseCase };
