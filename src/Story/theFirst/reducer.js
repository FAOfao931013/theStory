import Immutable from 'immutable';
import * as actionTypes from './actionTypes';

const {
    Map,
    List
} = Immutable;

const {
    FIRST_GETDIALOG,
    FIRST_GETCOMMONDIALOG,
    FIRST_GETCHOOSEDIALOG
} = actionTypes;

const initialState = Map({
    //所有对话
    dialog: List(),
    //当前对话序号
    count: 0,
    //当前对话
    commonDialog: Map(),
    //选择型对话
    chooseDialog: Map(),
    //本章得分
    point:0
});

export default (state = initialState, action) => {
    switch (action.type) {
        case FIRST_GETDIALOG:
            return state.update(
                newState => newState
                .set('dialog', action.dialog)
                .set('count', action.count)
                .set('commonDialog', action.dialog.get(0))
            );
        case FIRST_GETCOMMONDIALOG:
            {
                const currentCount = state.get('count') + 1;
                const commonDialog = state.get('dialog').get(currentCount);
                return state.update(
                    newState => newState
                    .set('commonDialog', commonDialog)
                    .set('count', currentCount)
                );
            }
        case FIRST_GETCHOOSEDIALOG:
            {
                const currentCount = state.get('count');
                const chooseDialog = state.get('dialog').get(currentCount).get('choose').get(action.choose);
                const role = state.get('dialog').get(currentCount).get('role');
                const enemy = state.get('dialog').get(currentCount).get('enemy');
                const commonDialog = Map({
                    role: role,
                    text: chooseDialog,
                    enemy: enemy
                });

                const currentPoint = state.get('dialog').get(currentCount).get('point').get(action.choose);
                let newPoint = state.get('point') + currentPoint;

                return state.update(
                    newState => newState
                    .set('commonDialog', commonDialog)
                    .set('count', currentCount)
                    .set('point', newPoint)
                );
            }
        default:
            return state;
    }
};