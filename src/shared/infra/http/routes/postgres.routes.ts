import { Router } from 'express';
import { listPgDataController } from 'modules/postgres/useCases/listPgData';

const postgresRoutes = Router();

postgresRoutes.get('/list', (request, response) => listPgDataController.handle(request, response));

export { postgresRoutes };
