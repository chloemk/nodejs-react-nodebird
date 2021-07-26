export const initialState = {
    mainPosts: [],
}

// 리듀서: 이전 스테이트와 액션을 받아서 다음 스테이트를 돌려주는 함수
const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default reducer;