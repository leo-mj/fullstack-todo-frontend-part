import { greet } from "./utils/greet";
import { useEffect, useState } from "react";
import { DisplayOneToDo } from "./components/DisplayOneToDo";
import { ToDoItemWithId } from "./utils/data-interfaces";
import { DisplayAllToDos } from "./components/DisplayAllToDos";



function App(): JSX.Element {
  return (
    <>
      <DisplayAllToDos/>
    </>
  )
}

export default App;
