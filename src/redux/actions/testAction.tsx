import { INCREMENT, DECREMENT } from '../reducers/testReducer';

export const increaseCounter = () => {
    return {
        type: INCREMENT,
    };
};
export const decreaseCounter = () => {
    return {
        type: DECREMENT,
    };
};