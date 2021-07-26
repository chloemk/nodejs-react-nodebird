export const initialState = {
    isLoggedIn: false,
    user: null,
    signUpData: {},
    loginData: {},
}

//action creator
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }   
}

export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
    }   
}

// 리듀서: 이전 스테이트와 액션을 받아서 다음 스테이트를 돌려주는 함수
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.data,
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        default:
            return state;
    }
};

export default reducer;