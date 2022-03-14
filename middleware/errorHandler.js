import SalesStatisticsError from '../errors/index.js'
import response from '../lib/response.js';

export default function errorHandler(err, req, res, next) {
  if (err instanceof SalesStatisticsError) {
    // customized error
    res.status(err.httpStatus).json(response.return(err.message, err.httpStatus));
  } else {
    // server internal error
    res.status(500).json(response.return(err.message, 500));
  }
}