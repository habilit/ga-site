import { CONTACT_ACTIONS } from '../globalConstants';

const defaultData = {
    isFetching: false,
    data: [],
};

const contacts = (state = defaultData, action) => {
    switch (action.type) {
        case CONTACT_ACTIONS.ADD_CONTACT :
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case CONTACT_ACTIONS.IS_FETCHING_CONTACT :
            return {
                ...state,
                isFetching: true,
            };
        case 'TOGGLE_TODO':
            return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
        case CONTACT_ACTIONS.FETCH_CONTACTS :
            return {
                ...state,
                isFetching: false,
                data: action.payload
            };
        default:
            return state
    }
};

export default contacts;
