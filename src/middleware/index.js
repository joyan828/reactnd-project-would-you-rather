import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from './logger'

applyMiddleware(
    thunk,
    logger
)