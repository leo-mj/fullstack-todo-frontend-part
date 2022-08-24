import { useState } from "react";
import { editToDo } from "../utils/editToDo";

interface EditorProps {
  id: number;
  previousDescription: string;
  editText: string;
  setEditText: React.Dispatch<React.SetStateAction<string>>;
}

export function ToDoEditor({
  id,
  previousDescription,
  editText,
  setEditText,
}: EditorProps): JSX.Element {
  const [editStatus, setEditStatus] = useState<boolean>(false);
  const handleEditButton = () => {
    if (editStatus === true) {
      setEditStatus(false);
    } else {
      setEditStatus(true);
    }
  };
  return (
    <>
      {editStatus ? (
        <div className="editTextBox">
          <textarea
            className="DraftDescription"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          ></textarea>
          <button
            onClick={async () => {
              await editToDo(id, editText);
              setEditStatus(false);
            }}
          >
            Save edits
          </button>
        </div>
      ) : (
        previousDescription
      )}
      <button onClick={handleEditButton}>Edit to-do</button>
    </>
  );
}
