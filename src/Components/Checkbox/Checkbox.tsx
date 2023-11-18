import React from "react";

interface CheckboxProps {
  id: string;
  title: string;
  checked: boolean;
  onChange: (value: string, isChecked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ id, title, checked, onChange }) => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, e.target.checked);
  };

  return (
    <div className="checkbox-wrapper" tabIndex={0}>
      <input
        className="sc-gJwTLC ikxBAC"
        type="checkbox"
        name={title}
        id={id}
        value={id}
        onChange={handleCheckboxChange}
        checked={checked}
        tabIndex={1}
      />
      <label htmlFor={id} className="toggle">
        <span></span>
      </label>
      <span>{title}</span>
    </div>
  );
};
