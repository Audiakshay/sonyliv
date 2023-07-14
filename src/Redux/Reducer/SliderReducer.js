const initState = [];

function SliderReducer(state = initState, {type, payload}) {
  switch(type){
    case 'fetchSlider':
        return payload;
    
    case 'deleteMovie':
        return [
              payload,
                ...state.slice(1)
            ]
    default: 
        return state;
  }
}

export default SliderReducer