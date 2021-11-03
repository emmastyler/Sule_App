export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBOJWxx7Egwb-NsCTjCxqxeLhmuQ5uBgXOdneBg1sOI9qV8-SoCLVqPzeAEKyEpk_aTx5bQ73JNQ_mQZtvBcnIKP5OyDnynShJngnqKyhXVV-FZwzfVgWts2kUrxz7cEE3kSERLrclYxtbCMPgyqZxB3dd7VqdtxN6ctb25Y9L88nRyIq-f"
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

export default reducer