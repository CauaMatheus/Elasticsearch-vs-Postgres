import { Router } from 'express';

import { elasticRoutes } from './elastic.routes';
import { postgresRoutes } from './postgres.routes';

const routes = Router();

routes.use('/elastic', elasticRoutes);
routes.use('/postgres', postgresRoutes);

export { routes };
