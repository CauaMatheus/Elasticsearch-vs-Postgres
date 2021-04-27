import getElasticSearchClient from '@shared/infra/elasticsearch';

import { FindByIDController } from './FindByIDController';
import { FindByIdUseCase } from './FindByIdUseCase';

const elasticClient = getElasticSearchClient();

const findByIdUseCase = new FindByIdUseCase(elasticClient);
const findByIDController = new FindByIDController(findByIdUseCase);

export { findByIDController };
