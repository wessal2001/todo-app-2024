import { useState } from "react";

function AddToDo(props) {
  const [value, setValue] = useState("");
  function handleChange(e) {
      setValue(e.target.value);
  }


  return (
    <>
    
      <form className="add text-center my-4" onSubmit={(event)=>{event.preventDefault();props.add(value); setValue('');}}>
        <label htmlFor="add" className="add text-light">
          Add a new todo:
        </label>
        <input
          type="text"
          className="form-control m-auto"
          placeholder="enter your todo"
          name="add"
          id="add"
          data-testid="todo-input"
          value={value} onChange={handleChange}
        />
      </form>
    </>
  );
}

export default AddToDo;