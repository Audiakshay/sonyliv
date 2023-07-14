function MovieAction(data) {
  return {
    type: 'selectedMovie',
    payload: data
  };
};

export default MovieAction;