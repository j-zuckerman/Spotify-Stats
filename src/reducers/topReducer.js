const initialState = {
  tracks: null,
  artists: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TOP_ARTISTS':
      return {
        ...state,
        artists: action.payload
      };
    case 'FETCH_TOP_TRACKS':
      return {
        ...state,
        tracks: action.payload
      };

    default:
      return state;
  }
};
