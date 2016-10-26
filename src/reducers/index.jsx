import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as First from 'src/Story/theFirst';
import * as Second from 'src/Story/theSecond';
import * as Third from 'src/Story/theThird';
import * as Fourth from 'src/Story/theFourth';
import * as Fifth from 'src/Story/theFifth';
import * as Fin from 'src/Story/Fin';

export default combineReducers({
    [First.constants.NAME]: First.reducer,
    [Second.constants.NAME]: Second.reducer,
    [Third.constants.NAME]: Third.reducer,
    [Fourth.constants.NAME]: Fourth.reducer,
    [Fifth.constants.NAME]: Fifth.reducer,
    [Fin.constants.NAME]: Fin.reducer,
    routing: routerReducer
});