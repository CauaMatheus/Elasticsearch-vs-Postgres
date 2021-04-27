import { Client as ElasticClient, SearchResponse } from 'elasticsearch';

interface IRequest {
  id: string
}

class FindByIdUseCase {
  constructor(
    private elasticClient: ElasticClient,
  ) { }

  async execute({ id }: IRequest): Promise<SearchResponse<unknown>> {
    const search = await this.elasticClient.search({
      index: 'rna',
      q: `id:${id}`,
      size: 1,
    });

    return search;
  }
}

export { FindByIdUseCase };
