import { ToDoItemWithId } from "./data-interfaces";

export function putToDo(toDo: ToDoItemWithId): void {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: "Fetch PUT Request Example" }),
  };
  fetch(
    "https://to-do-lm-app.herokuapp.com/to-dos" + toDo.id,
    requestOptions
  ).then((response) => response.json());
}
