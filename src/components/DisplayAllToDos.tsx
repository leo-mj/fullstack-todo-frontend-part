import { useEffect, useState } from "react";
import { ToDoItemWithId } from "../utils/data-interfaces";
import { DisplayOneToDo } from "./DisplayOneToDo";

interface DisplayAllToDosProps {
  setOneToDo: React.Dispatch<React.SetStateAction<ToDoItemWithId | null>>;
}

export function DisplayAllToDos(prop: DisplayAllToDosProps): JSX.Element {
  const [allTodos, setAllTodos] = useState<ToDoItemWithId[]>();
  useEffect(() => {
    fetch("https://to-do-lm-app.herokuapp.com/todos")
      .then((response) => response.json())
      .then((jsonBody) =>
        jsonBody.sort((a: ToDoItemWithId, b: ToDoItemWithId) => b.id - a.id)
      )
      .then((jsonBody: ToDoItemWithId[]) => setAllTodos(jsonBody));
  }, [allTodos]);
  return (
    <>
      {allTodos && (
        <div className="allToDos">
          {allTodos.map((oneToDo: ToDoItemWithId) => (
            <DisplayOneToDo
              key={oneToDo.id}
              toDo={oneToDo}
              currentToDoState={null}
              setToDo={prop.setOneToDo}
            />
          ))}
        </div>
      )}
    </>
  );
}
