import { useEffect, useState } from "react";
import { ToDoItemWithId } from "../utils/data-interfaces";

export function DisplayAllToDos(): JSX.Element {
  const [allTodos, setAllTodos] = useState<ToDoItemWithId[]>([]);
  useEffect(() => {
    fetch("https://to-do-lm-app.herokuapp.com/to-dos")
      .then((response) => response.json())
      .then((jsonBody: ToDoItemWithId[]) => setAllTodos(jsonBody));
  }, []);
  return (
    <>
      <p>{allTodos[0].title}</p>
    </>
  );
}
