import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '@/pages/login/Login';
import './App.css';
class App extends React.Component<any> {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Redirect to="/" />
                </Switch>
            </>
        );
    }
}

export default App;
