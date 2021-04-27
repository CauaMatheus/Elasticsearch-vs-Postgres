import { Request, Response } from 'express';

import { FindByIdUseCase } from './FindByIdUseCase';

class FindByIDController {
  constructor(
    private findByIdUseCase: FindByIdUseCase,
  ) { }
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      const data = await this.findByIdUseCase.execute({ id });
      return response.json(data);
    } catch (err) {
      return response.status(500).json({ message: err.message });
    }
  }
}

export { FindByIDController };
