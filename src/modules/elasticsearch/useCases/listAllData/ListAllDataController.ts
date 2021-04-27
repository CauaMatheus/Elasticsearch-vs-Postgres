import { Request, Response } from 'express';

import { ListAllDataUseCase } from './ListAllDataUseCase';

class ListAllDataController {
  constructor(
    private listAllDataUseCase: ListAllDataUseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = await this.listAllDataUseCase.execute();
      return response.json(data);
    } catch {
      return response.status(500).json({
        message: 'Internal server error. Maybe you didn\'t import data from postgres db',
        importUrl: 'http://localhost:3333/elastic/import',
      });
    }
  }
}

export { ListAllDataController };
