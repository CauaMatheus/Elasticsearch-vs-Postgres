import { Request, Response } from 'express';

import { ImportFromPGUseCase } from './ImportFromPGUseCase';

class ImportFromPGController {
  constructor(private importFromPGUseCase: ImportFromPGUseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      await this.importFromPGUseCase.execute();
      return response.status(201).json({ message: 'Imported' });
    } catch (err) {
      return response.status(501).json({ message: err.message });
    }
  }
}

export { ImportFromPGController };
