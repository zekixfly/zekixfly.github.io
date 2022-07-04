import Item from "./Item";

const List = ({ arrayData, deleteData, submittingStatus }) => {
  return (
    <div className="list">
      {arrayData.map((objItem) => {
        const { id, note, date, time } = objItem;
        return (
          <Item
            key={id}
            id={id}
            note={note}
            date={date}
            time={time}
            deleteData={deleteData}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
