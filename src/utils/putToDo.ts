import { ToDoItemWithId } from "./data-interfaces";

export function putToDo(toDo: ToDoItemWithId, completionStatus: boolean): void {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completion: completionStatus }),
  };
  fetch(
    "https://to-do-lm-app.herokuapp.com/to-dos" + toDo.id,
    requestOptions
  ).then((response) => response.json());
}
