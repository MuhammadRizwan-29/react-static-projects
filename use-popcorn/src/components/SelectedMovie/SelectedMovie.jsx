export default function SelectedMovie({ selectedID, onCloseMovie }) {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        &larr;
      </button>
      {selectedID}
    </div>
  );
}
