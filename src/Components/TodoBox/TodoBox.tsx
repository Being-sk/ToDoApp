import React, { useEffect, useState } from "react";
import "./TodoBox.css";
import { UserType } from "../../common/constant";
import { Checkbox } from "../Checkbox/Checkbox";
import "../Checkbox/Checkbox.css";
interface TodoBoxProps {
  boxtitle: string;
  data: UserType[];
  onAdd?: (checked: string[]) => void;
  onRemove?:(checked: string[]) => void;
}
export const TodoBox: React.FC<TodoBoxProps> = ({ boxtitle, data, onAdd, onRemove}) => {
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    setChecked((prevChecked) =>
      isChecked ? [...prevChecked, value] : prevChecked.filter((id) => id !== value)
    );
  };
  const handleMarked = () => {
    onAdd && onAdd(checked);
    setChecked([])
  }
  const handleUnmarked = () => {
    onRemove && onRemove(checked);
    setChecked([]);
  };

  useEffect(()=>{
    setChecked([])
  },[data])
  return (
    <div className="Todobox-wrapper">
      <div className="boxtitle">
        <h2>{boxtitle}</h2>
      </div>
      <div className="items-wrapper">
        <ul>
          {data.length > 0 &&
            data.map((task) => (
              <li className="listitem" key={task.id}>
                <Checkbox
                  id={task.id}
                  title={task.title}
                  checked={checked.includes(task.id)}
                  onChange={handleCheckboxChange}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="action-pane">
        {onAdd &&(
          <div className="button-wrapper">
            <button className="Add-button" onClick={handleMarked}>
              Mark as Done
            </button>
          </div>
        )}
        {onRemove && (
          <div className="button-wrapper">
            <button className="Add-button" onClick={handleUnmarked}>
              Mark as Not done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
