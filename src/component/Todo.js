import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddToDo, Todo_Delete, Todo_Edit } from '../store/action/todo';

const Todo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [editValue, setEditValue] = useState('');
  const [Edit, setEdit] = useState(null);
  const todoList = useSelector((state) => state.todo);

  const AddnewTodo = () => {
    value && dispatch(AddToDo(value));
    setValue('');
  };

  const deleteTodo = (index) => {
    dispatch(Todo_Delete(index));
  };

  const saveTodo = (index) => {
    if (editValue) {
      dispatch(Todo_Edit(editValue, index));
      setEditValue('');
      setEdit(null);
    }
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <input
          className="form-control"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <br />
        <button
          onClick={() => {
            AddnewTodo();
          }}
          className="btn btn-primary"
        >
          Add Todo
        </button>
      </div>
      <div className="col-md-6">
        <ul className="list-group">
          {todoList?.map((res, index) => (
            <li className="list-group-item" key={index}>
              {Edit == index ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => {
                    setEditValue(e.target.value);
                  }}
                />
              ) : (
                <span>{res}</span>
              )}
             {" "} <button onClick={() => deleteTodo(index)} className="btn btn-danger">Delete</button>
             {" "} {Edit == index ? (
                <button className="btn btn-primary"
                  onClick={() => {
                    saveTodo(index);
                  }}
                >
                  Save
                </button>
              ) : (
                <button
                className="btn btn-success"
                  onClick={() => {
                    setEdit(index);
                    setEditValue(res);
                  }}
                >
                  Edit
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
