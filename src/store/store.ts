import { compose, applyMiddleware, Middleware } from 'redux';
import { legacy_createStore as createStore } from 'redux'
import { persistStore, persistReducer, PersistConfig  } from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';


export type RootState = ReturnType<typeof rootReducer>;

declare global {
    interface window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

type ExtendedPersistConfig  = PersistConfig<RootState> & {
    whitelist: (keyof RootState)[];
}

const persistConfig: ExtendedPersistConfig   = {
    key: 'root',
    storage,
    whitelist: ['user'],
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    process.env.NODE_ENV === 'development' && logger,
    sagaMiddleware, 
].filter((middleware): middleware is Middleware => Boolean(middleware));


const composeEnhancer =
    (process.env.NODE_ENV !== 'production' &&
        window &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;




const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = composeEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
    persistedReducer,
    undefined,
    composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);