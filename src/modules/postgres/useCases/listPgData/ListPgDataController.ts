import { Request, Response } from 'express';

import { ListPgDataUseCase } from './ListPgDataUseCase';

class ListPgDataController {
  constructor(
    private listPgDataUseCase: ListPgDataUseCase,
  ) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.listPgDataUseCase.execute();
      return response.json(data);
    } catch (err) {
      return response.status(501).json({ message: err.message });
    }
  }
}

export { ListPgDataController };
