import { ToDoItemWithId } from "./data-interfaces";

export function putToDo(toDo: ToDoItemWithId, completionStatus: boolean): void {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: completionStatus }),
  };
  fetch(
    "https://to-do-lm-app.herokuapp.com/todos/" + toDo.id,
    requestOptions
  ).then((response) => {
    console.log(response);
    response.json();
  });
}
