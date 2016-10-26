import React from 'react';
import { Route } from 'react-router';
import rootNode from './rootNode';
import Begin from 'src/Story/begin/containers';
import * as First from 'src/Story/theFirst';
import * as Second from 'src/Story/theSecond';
import * as Third from 'src/Story/theThird';
import * as Fourth from 'src/Story/theFourth';
import * as Fifth from 'src/Story/theFifth';
import * as Fin from 'src/Story/Fin';

let routes = (
    <div>
        <Route path='/story' component={rootNode}>
            <Route path='begin' component={Begin} />
            <Route path='first' component={First.containers} />
            <Route path='second' component={Second.containers} />
            <Route path='third' component={Third.containers} />
            <Route path='fourth' component={Fourth.containers} />
            <Route path='fifth' component={Fifth.containers} />
            <Route path='fin/:point' component={Fin.containers} />
        </Route>
    </div>
);

export default routes;