const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Add_TODO':
      return [...state, action.payload];

    case 'Todo_Delete':
      let todos = [...state];
      todos.splice(action.payload, 1);
      return [...todos];

      case "Todo_Edit": 
        let {index ,value} = action.payload;
        let todosArray = [...state];
        todosArray.splice(index, 1,value);
        return [...todosArray];
      
    default:
      return state;
  }
};
export default todoReducer;
