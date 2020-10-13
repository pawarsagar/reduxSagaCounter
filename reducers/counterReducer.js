const initialState = {
    counter: 0,
};

export default function (state = initialState, action) {
    const { payload } = action;
    console.log(action, "<----- action");
    switch (action.type) {

        case 'INCREASE_COUNTER_ASYNC': {
            return { ...state, counter: state.counter + payload }
            break
        }
        case 'DECREASE_COUNTER_ASYNC': {
            return { ...state, counter: state.counter - payload }
            break
        }

        default:
            return { ...state };
    }
}
