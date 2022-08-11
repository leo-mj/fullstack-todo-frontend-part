import { useState } from "react";
import { AddToDo } from "./components/AddToDo";
import { DisplayAllToDos } from "./components/DisplayAllToDos";
import { DisplayOneToDo } from "./components/DisplayOneToDo";
import { ToDoItemWithId } from "./utils/data-interfaces";

function App(): JSX.Element {
  const [previousToDo, setToDo] = useState<ToDoItemWithId | null>(null);
  const [draftTitle, setDraftTitle] = useState<string>();
  const [draftDescription, setDraftDescription] = useState<string>();

  return (
    <>
      <div>
        {previousToDo ? (
          <DisplayOneToDo
            toDo={previousToDo}
            currentToDoState={previousToDo}
            setToDo={setToDo}
          />
        ) : (
          <div className="HomePage">
            <AddToDo
              draftTitle={draftTitle}
              setDraftTitle={setDraftTitle}
              draftDescription={draftDescription}
              setDraftDescription={setDraftDescription}
            />
            <DisplayAllToDos setOneToDo={setToDo} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
