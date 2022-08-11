import { useEffect, useState } from "react";
import { DisplayOneToDo } from "./components/DisplayOneToDo";
import { ToDoItemWithId } from "./utils/data-interfaces";

function App(): JSX.Element {
  const [allTodos, setAllTodos] = useState<ToDoItemWithId[]>();
  useEffect(() => {
    fetch("https://to-do-lm-app.herokuapp.com/to-dos")
      .then((response) => response.json())
      .then((jsonBody: ToDoItemWithId[]) => setAllTodos(jsonBody));
  }, []);
  console.log(allTodos);
  return (
    <>
      {allTodos && (
        <p>
          {allTodos.map((oneToDo: ToDoItemWithId) => (
            <DisplayOneToDo key={oneToDo.id} toDo={oneToDo} />
          ))}
        </p>
      )}
    </>
  );
}

export default App;
