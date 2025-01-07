import { useState } from "react";
import { HiOutlineDocumentAdd } from "react-icons/hi";
import { FaPlusCircle } from "react-icons/fa";

function AddCard({ column, setCards }) {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(), // TODO: Trzeba się na tym zastanowić czy to dobre rozwiązanie jest!
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <div>
      {adding ? (
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Dodaj nowe zadanie!"
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <div className="mt-1.5 flex items-center justify-end gap-1.5">
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-100 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Dodaj</span>
              <FaPlusCircle />
            </button>
            <button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Anuluj
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Dodaj Zadanie!</span>
          <HiOutlineDocumentAdd />
        </button>
      )}
    </div>
  );
}
export default AddCard;
