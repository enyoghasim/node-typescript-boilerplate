import { NextFunction, Request, Response } from 'express';

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {};

export const loggedOutOnly = (req: Request, res: Response, next: NextFunction) => {};
