import { AwilixContainer } from 'awilix';
import { Request, Response } from 'express';

export interface RequestWithContainer extends Request {
  AwilixContainer: AwilixContainer;
}

export interface IController {
  run(req: RequestWithContainer, res: Response): Promise<void>;
}
