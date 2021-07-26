import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import user from './user';
import post from './post';

//(이전상태, 액션) ⇒ 다음상태 
const rootReducer = combineReducers({
    //리액트 서버사이드렌더링을 위해서 hydrate라는 것이 있는데, 그걸 넣어주려면 index를 넣어주고, hydrate를 위해서 리듀서를 추가하게 된다.
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;