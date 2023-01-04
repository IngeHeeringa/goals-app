import { useState } from "react";
import MonthlyGoalsEdit from "./MonthlyGoalsEdit";
import WeeklyGoalsList from "./WeeklyGoalsList";

const MonthlyGoalsItem = ({ monthlyGoal, onDelete, onEdit }) => {
  const [editable, setEditable] = useState(false);

  const handleClickDelete = () => {
    onDelete(monthlyGoal.id);
  };

  const handleEditState = () => {
    setEditable(!editable);
  };

  const handleSubmit = (id, newGoalName) => {
    setEditable(false);
    onEdit(id, newGoalName);
  };

  let content = <h3>{monthlyGoal.goalName}</h3>;

  if (editable) {
    content = (
      <MonthlyGoalsEdit onSubmit={handleSubmit} monthlyGoal={monthlyGoal} />
    );
  }

  return (
    <div>
      <div>
        <div>{content}</div>
      </div>
      <button onClick={handleClickDelete}>Delete goal</button>
      <button onClick={handleEditState}>Edit goal</button>
    </div>
  );
};

export default MonthlyGoalsItem;
