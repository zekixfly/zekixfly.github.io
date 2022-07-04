const Item = ({ id, note, date, time, deleteData, submittingStatus }) => {
  function deleteItem() {
    submittingStatus.current = true;
    deleteData((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <div className="item">
      <div>{note}</div>
      <div>
        {date} {time}
      </div>

      <button className="remove" onClick={deleteItem}>
        刪除
      </button>
    </div>
  );
};

export default Item;
