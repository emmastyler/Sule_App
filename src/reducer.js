export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    playlist_id: ''


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
         case 'SET_PLAYLISTS' :
             return {
                 ...state,
                 playlists: action.playlists
             }
        case 'SET_PLAYLISTS_TRACKS' :
            return {
                ...state,
                playlists_tracks: action.playlists_tracks
            }
        case 'SET_PLAYLIST_ID' :
            return {
                ...state,
                playlist_id: action.playlist_id
            }
        default:
            return state;
    }
}

export default reducer