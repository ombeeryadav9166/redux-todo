export const AddToDo = (value)=>{
  return{
    type:"Add_TODO",
    payload:value
  }
}
export const Todo_Delete = (value)=>{
  return{
    type:"Todo_Delete",
    payload:value
  }
}

export const Todo_Edit = (value,index)=>{
  return{
    type:"Todo_Edit",
    payload:{
      value:value,
      index:index
    }
  }
}