/* eslint no-console: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store/index';
import { IntlProvider } from 'react-intl';

import { PersistGate } from 'redux-persist/lib/integration/react';
import moment from 'moment';
import { ConfigProvider } from 'antd';
import antdEn from 'antd/es/locale/en_US';
import antdZhCN from 'antd/es/locale/zh_CN';
import antdIt from 'antd/es/locale/it_IT';
import antdRu from 'antd/es/locale/ru_RU';
import antdFr from 'antd/es/locale/fr_FR';
import antdTh from 'antd/es/locale/th_TH';
import antdNl from 'antd/es/locale/nl_NL';
import antdHe from 'antd/es/locale/he_IL';
import antdTR from 'antd/es/locale/tr_TR';
import antdPT from 'antd/es/locale/pt_PT';
import antdCZ from 'antd/es/locale/cs_CZ';
import antdPL from 'antd/es/locale/pl_PL';
import antdZhTW from 'antd/es/locale/zh_TW';
import antdDE from 'antd/es/locale/de_DE';
import antdES from 'antd/es/locale/es_ES';

class RootElement extends React.Component {
    constructor(props: Readonly<{}>) {
        super(props);
    }
    state = {
        lang: 'en',
        loading: false,
    };
    render() {
        const antdMessages: any = {};
        antdMessages['zh-CN'] = antdZhCN;
        antdMessages['en'] = antdEn;
        antdMessages['it'] = antdIt;
        antdMessages['ru'] = antdRu;
        antdMessages['de'] = antdDE;
        antdMessages['es'] = antdES;
        antdMessages['fr'] = antdFr;
        antdMessages['th'] = antdTh;
        antdMessages['nl'] = antdNl;
        antdMessages['he'] = antdHe;
        antdMessages['tr'] = antdTR;
        antdMessages['pt'] = antdPT;
        antdMessages['cz'] = antdCZ;
        antdMessages['pl'] = antdPL;
        antdMessages['zh-TW'] = antdZhTW;

        const Loading = () => <div>loading</div>;
        const language = (window as any).__lang__;
        return (
            <Provider store={store}>
                <PersistGate loading={<Loading />} persistor={persistor}>
                    <ConfigProvider locale={antdMessages[this.state.lang]}>
                        {!this.state.loading && (
                            <IntlProvider locale={this.state.lang} messages={language}>
                                <BrowserRouter>
                                    <App />
                                </BrowserRouter>
                            </IntlProvider>
                        )}
                    </ConfigProvider>
                </PersistGate>
            </Provider>
        );
    }
}

ReactDOM.render(<RootElement />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
