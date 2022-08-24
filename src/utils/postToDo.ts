export function postToDo(draftTitle: string, draftDescription: string): void {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: draftTitle,
      description: draftDescription,
      completed: false,
    }),
  };
  fetch("https://to-do-lm-app.herokuapp.com/todos", requestOptions).then(
    (response) => response.json()
  );
}
