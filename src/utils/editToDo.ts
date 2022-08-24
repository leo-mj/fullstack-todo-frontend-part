export function editToDo(id: number, draftDescription: string): void {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      description: draftDescription,
    }),
  };
  fetch(`https://to-do-lm-app.herokuapp.com/todos/${id}`, requestOptions).then(
    (response) => response.json()
  );
}
