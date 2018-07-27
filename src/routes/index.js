import React from 'react';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';

import Index from '../containers/home'
import BlockList from '../containers/blockList'
import Detail from '../containers/detail'
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
history.listen((v) => {
    history.location.query = history.location.search
})

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <Router  history={history}>
                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route exact path="/blockList" component={BlockList}/>
                    <Route exact path="/detail/:id" component={Detail}/>
                </Switch>
            </Router>
        );
    }
}
export default App;