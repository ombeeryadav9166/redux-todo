const initialState = {count:0};

const counterReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'Counter_Update':
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default counterReducer;