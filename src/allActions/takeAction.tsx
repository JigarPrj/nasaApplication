
const initialState = {
  nasaData: [],
  astroidData: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action:any) => {
  switch (action.type) {
    case 'GET_NASADATA':
      return {
        ...state,
        nasaData: [action.payload]
      };
      case 'GET_NASA_ATROID_DATA':
        return {
          ...state,
          astroidData: [action.payload]
        };  
    default:
      return state;
  }
};
