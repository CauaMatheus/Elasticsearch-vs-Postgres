import { ListPgDataController } from './ListPgDataController';
import { ListPgDataUseCase } from './ListPgDataUseCase';

const listPgDataUseCase = new ListPgDataUseCase();
const listPgDataController = new ListPgDataController(listPgDataUseCase);

export { listPgDataController };
