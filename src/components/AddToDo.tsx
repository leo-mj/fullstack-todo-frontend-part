import { postToDo } from "../utils/postToDo";

interface AddToDoProps {
  draftTitle: string | undefined;
  setDraftTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  draftDescription: string | undefined;
  setDraftDescription: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export function AddToDo({
  draftTitle,
  setDraftTitle,
  draftDescription,
  setDraftDescription,
}: AddToDoProps): JSX.Element {
  return (
    <>
      <h2>Add a to-do:</h2>
      <div>
        <input
          type="text"
          value={draftTitle}
          placeholder="to-do title"
          onChange={(e) => setDraftTitle(e.target.value)}
        />
        <button
          onClick={() => {
            setDraftTitle("");
          }}
        >
          Delete title
        </button>
      </div>
      <div>
        <textarea
          className="DraftDescription"
          value={draftDescription}
          onChange={(e) => setDraftDescription(e.target.value)}
        ></textarea>
        <button
          onClick={() => {
            setDraftDescription("");
          }}
        >
          Delete description
        </button>
      </div>
      {draftTitle !== ("" || undefined) &&
        draftDescription !== ("" || undefined) && (
          <button
            onClick={() => {
              postToDo(draftTitle, draftDescription);
              setDraftTitle("");
              setDraftDescription("");
            }}
          >
            Save to-do
          </button>
        )}
    </>
  );
}
