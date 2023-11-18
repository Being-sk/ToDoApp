import React, { useState, useEffect } from "react";
import "./App.css";
import { TodoBox } from "./Components/TodoBox/TodoBox";
import { UserType, tasks } from "../src/common/constant";
function App() {
  const title = "To Do...";
  const [doneData, setDoneData] = useState<UserType[]>([]);
  const [announceText, setAnnounceText] = useState("");

  const handleAdd = (checked: string[]) => {
    const updatedDone = tasks.filter((todoItem) => {
      return (
        checked.includes(todoItem.id) &&
        !doneData.some((doneItem) => doneItem.id === todoItem.id)
      );
    });

    setDoneData((prevDoneData) => [...prevDoneData, ...updatedDone]);
    setAnnounceText(`${updatedDone.length} task(s) added.`);
  };

  const handleRemove = (unchecked: string[]) => {
    const updatedDone = doneData.filter(
      (doneItem) => !unchecked.includes(doneItem.id)
    );
    setDoneData(updatedDone);
    setAnnounceText(`${doneData.length - updatedDone.length} task(s) removed.`);
  };

  useEffect(() => {
    const announceTimer = setTimeout(() => {
      setAnnounceText("");
    }, 3000); // Clear the announcement after 3 seconds

    return () => {
      clearTimeout(announceTimer);
    };
  }, [announceText]);

  return (
    <div>
      <h1>{title}</h1>
      <div className="app-container">
        <TodoBox boxtitle="To do" data={tasks} onAdd={handleAdd} />
        <TodoBox boxtitle="Done" data={doneData} onRemove={handleRemove} />
      </div>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announceText && <div>{announceText}</div>}
      </div>
    </div>
  );
}

export default App;
