import { HttpError } from 'http-errors';

export const errorHandler = (error, request, response, next) => {
  if (error instanceof HttpError) {
    return response.status(error.status).json({
      message: error.message || error.name,
    });
  }
  response.status(500).json({
    message: error.message || 'Internal Server Error',
  });
};
