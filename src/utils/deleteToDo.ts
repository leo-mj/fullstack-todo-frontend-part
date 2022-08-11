import { ToDoItemWithId } from "./data-interfaces";

export function deleteToDos(toDo: ToDoItemWithId): void {
  const url = `https://to-do-lm-app.herokuapp.com/to-dos/${toDo.id}`;
  fetch(url, { method: "DELETE" })
    .then((response) => response.json())
    .then((response) => console.log(response));
}
