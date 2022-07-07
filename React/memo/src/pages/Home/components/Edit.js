import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Edit = ({ add, submittingStatus }) => {

  function checkDate(date) {  
    if(date.toString().length < 2) {
        return `0${date}`
    }
    else {
      return date;
    }
    
  }

  const [note, setNote] = useState("");
  function noteChange(e) {
    setNote(e.target.value);
  }
  let now = new Date();
  const [date, setDate] = useState(`${now.getFullYear()}-${checkDate(now.getMonth()+1)}-${checkDate(now.getDate())}`);
  function dateChange(e) {
    setDate(e.target.value);
  }

  const [time, setTime] = useState(`${checkDate(now.getHours())}:${checkDate(now.getMinutes())}`);
  function timeChange(e) {
    setTime(e.target.value);
  }

  function addItem() {
    if(note === null || note === "") {
      alert("記事欄位勿為空！");
      return;
    }
    submittingStatus.current = true;
    add((prev) => {
      return [        
        {
          id: uuidv4(),
          note,
          date,
          time,
        },
        ...prev,
      ];
    });
  }

  return (
    <div>
      <h1>備忘錄</h1>
      <p>記事：</p>
      <input type="text" value={note} onChange={noteChange} />
      <p>日期：</p>
      <input type="date" value={date} onChange={dateChange} />
      <p>時間：</p>
      <input type="time" value={time} onChange={timeChange} />
      <button onClick={addItem} className="add">
        新增
      </button>
    </div>
  );
};

export default Edit;
