import { Router } from 'express';
import { findByIDController } from 'modules/elasticsearch/useCases/findByID';
import { importFromPGController } from 'modules/elasticsearch/useCases/importFromPG';
import { listAllDataController } from 'modules/elasticsearch/useCases/listAllData';

const elasticRoutes = Router();

// I know that POST is the best method to import data, but I'm using just for easier study case
elasticRoutes.get('/import', (request, response) => importFromPGController.handle(request, response));

elasticRoutes.get('/list', (request, response) => listAllDataController.handle(request, response));
elasticRoutes.get('/find/:id', (request, response) => findByIDController.handle(request, response));

export { elasticRoutes };
