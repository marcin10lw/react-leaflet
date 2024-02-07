import { NextFunction, Request, Response } from "express";

export const asyncWrapper = (
  callback: (req: Request, res: Response, next: NextFunction) => any
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      callback(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
