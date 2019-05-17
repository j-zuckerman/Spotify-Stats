const initialState = {
  recentlyPlayed: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RECENTLY_PLAYED':
      return {
        ...state,
        recentlyPlayed: action.payload
      };

    default:
      return state;
  }
};
