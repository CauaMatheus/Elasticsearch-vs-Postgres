import getElasticSearchClient from '@shared/infra/elasticsearch';

import { ListAllDataController } from './ListAllDataController';
import { ListAllDataUseCase } from './ListAllDataUseCase';

const elasticClient = getElasticSearchClient();

const listAllDataUseCase = new ListAllDataUseCase(elasticClient);
const listAllDataController = new ListAllDataController(listAllDataUseCase);

export { listAllDataController };
