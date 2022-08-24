import { useState } from "react";
import { ToDoItemWithId } from "../utils/data-interfaces";
import { deleteToDos } from "../utils/deleteToDo";
import { putToDo } from "../utils/putToDo";
import { ToDoEditor } from "./ToDoEditor";

interface DisplayGetProps {
  toDo: ToDoItemWithId;
  currentToDoState: ToDoItemWithId | null;
  setToDo: React.Dispatch<React.SetStateAction<ToDoItemWithId | null>>;
}

export function DisplayOneToDo(prop: DisplayGetProps): JSX.Element {
  const previousDescription = prop.toDo.description;
  const [editText, setEditText] = useState<string>(prop.toDo.description);
  return (
    <div className="oneToDo">
      <h2 onClick={() => prop.setToDo(prop.toDo)}>{prop.toDo.title}</h2>
      {prop.currentToDoState !== null && (
        <button onClick={() => prop.setToDo(null)}>return to all to-dos</button>
      )}
      <ToDoEditor
        previousDescription={previousDescription}
        id={prop.toDo.id}
        editText={editText}
        setEditText={setEditText}
      />
      {prop.toDo.completed === true && (
        <h2 onClick={() => putToDo(prop.toDo, false)}>☑️</h2>
      )}
      {prop.toDo.completed === false && (
        <h2 onClick={() => putToDo(prop.toDo, true)}>☐</h2>
      )}
      <button
        onClick={() => {
          deleteToDos(prop.toDo);
          prop.setToDo(null);
        }}
      >
        Delete to-do
      </button>
    </div>
  );
}
