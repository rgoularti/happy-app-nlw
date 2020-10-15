import { ErrorRequestHandler } from 'express';
import { get } from 'lodash'

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  console.error(error);

  return response.status(500).json({ message: get(error, 'message', 'Internal server error') });
}

export default errorHandler;