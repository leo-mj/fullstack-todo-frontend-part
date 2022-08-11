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
  fetch("https://to-do-lm-app.herokuapp.com/to-dos", requestOptions).then(
    (response) => response.json()
  );
}
