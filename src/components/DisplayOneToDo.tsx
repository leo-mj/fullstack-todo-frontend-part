import { useEffect } from "react";
import { ToDoItemWithId } from "../utils/data-interfaces";

interface DisplayGetProps {
    props: ToDoItemWithId;
}

export function DisplayOneToDo({props}: DisplayGetProps): JSX.Element {
    return (
        <>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            {(props.completed === true) && <h2>☑️</h2>}
            {(props.completed === false) && <h2>☐</h2>}
        </>
    )
}