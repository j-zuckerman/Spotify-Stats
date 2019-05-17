const initialState = {
  features: null,
  recommended: null,
  randomSongIDs: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AUDIO_FEATURES':
      console.log(action.randomSongIDs);
      //average out a few different audio features to get recommended tracks
      let danceability = 0;
      let valence = 0;
      let energy = 0;
      action.payload.audio_features.forEach(feature => {
        danceability += feature.danceability;
        valence += feature.valence;
        energy += feature.energy;
      });

      danceability = danceability / action.payload.audio_features.length;
      valence = valence / action.payload.audio_features.length;
      energy = energy / action.payload.audio_features.length;

      const audioFeatures = {
        danceability: danceability,
        valence: valence,
        energy: energy
      };

      return {
        ...state,
        features: audioFeatures,
        randomSongIDs: action.randomSongIDs
      };

    case 'FETCH_RECOMMENDED':
      return {
        ...state,
        recommended: action.payload
      };

    default:
      return state;
  }
};
