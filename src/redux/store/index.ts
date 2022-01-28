import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import storageSession from 'redux-persist/lib/storage/session';

const initialState = {};
const middleware = [thunk];
const enhancers: any = [];

if (process.env.NODE_ENV === 'development') {
    //   const { devToolsExtension } = window;
    //   if (typeof devToolsExtension === 'function') {
    //     enhancers.push(devToolsExtension());
    //   }
}

// 数据持久化配置
const persistConfig = {
    key: 'root',
    // whitelist: [], // 不能这样加，会导致全部不持久化
    blacklist: [],
    // storage: storageSession,
    storage,
};

// 全局你可以创建多个reducer 在这里统一在一起
const rootReducers = combineReducers({});
const persistedReducer = persistReducer(persistConfig, rootReducers);

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 全局就管理一个store
export const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

export const persistor = persistStore(store);
// export default store;
