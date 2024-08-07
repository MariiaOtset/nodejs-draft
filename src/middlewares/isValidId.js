// src/middlewares/isValidId.js

import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId =
  (idName = 'id') =>
  (req, res, next) => {
    const id = req.params[idName];

    if (!id) {
      return next(createHttpError(400, 'Id is not provided'));
    }

    if (!isValidObjectId(id)) {
      return next(createHttpError(404, 'Not found'));
    }

    next();
  };
