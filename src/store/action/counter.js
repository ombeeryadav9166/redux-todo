export const updateCounter = (value)=>{
  return {
    type:"Counter_Update",
    payload:value
  }
}