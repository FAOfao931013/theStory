import {
    createSelector
} from 'reselect';
import Immutable from 'immutable';
import * as actions from './actions';
import {
    push
} from 'react-router-redux';
import {
    NAME
} from './constants';
import localStore from 'localStore';


const {
    Map
} = Immutable;


const {
    getDialog,
    getCommonDialog,
    getChooseDialog
} = actions;

const _getDialog = state => state[NAME].get('dialog');
const _getCommonDialog = state => state[NAME].get('commonDialog');
const _getChooseDialog = state => state[NAME].get('chooseDialog');
const _getCount = state => state[NAME].get('count');
const _getPoint = state => state[NAME].get('point');

export const getProductsSelector = createSelector(
    [_getDialog, _getCommonDialog, _getChooseDialog, _getCount, _getPoint],
    (dialog, commonDialog, chooseDialog, count, point) => {
        return {
            dialog,
            commonDialog,
            chooseDialog,
            count,
            point
        };
    }
);

export function mapStateToProps(state) {
    return {
        dialog: getProductsSelector(state).dialog,
        commonDialog: getProductsSelector(state).commonDialog,
        chooseDialog: getProductsSelector(state).chooseDialog,
        count: getProductsSelector(state).count,
        point:getProductsSelector(state).point,
    };
}

export function mapDispatchToProps(dispatch) {
    return {
        getDialog() {
            dispatch(getDialog());
        },
        getCommonDialog() {
            dispatch(getCommonDialog());
        },
        getChooseDialog(choose) {
            dispatch(getChooseDialog(choose));
        },
        gotoSecond(point) {
            localStore.set('first', point);
            dispatch(push('/story/second'));
        }
    };
}