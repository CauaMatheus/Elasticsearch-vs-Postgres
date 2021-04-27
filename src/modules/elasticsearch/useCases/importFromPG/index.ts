import getElasticSearchClient from '@shared/infra/elasticsearch';

import { ImportFromPGController } from './ImportFromPGController';
import { ImportFromPGUseCase } from './ImportFromPGUseCase';

const elasticClient = getElasticSearchClient();

const importFromPGUseCase = new ImportFromPGUseCase(elasticClient);
const importFromPGController = new ImportFromPGController(importFromPGUseCase);

export { importFromPGController };
