const initialState = {
  playlists: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PLAYLISTS':
      return {
        ...state,
        playlists: action.payload
      };

    default:
      return state;
  }
};
