import { useState } from "react";
import MonthlyGoalsEdit from "./MonthlyGoalsEdit";
import WeeklyGoalsList from "./WeeklyGoalsList";

const MonthlyGoalsItem = ({monthlyGoal, onDelete, onEdit}) => {

    const [editable, setEditable] = useState(false);

    const handleClickDelete = () => {
        onDelete(monthlyGoal.id);
    };

    const handleEditState = () => {
        setEditable(!editable);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setEditable(false);
        onEdit(monthlyGoal.id, editableMonthlyGoal)
    }

    const [editableMonthlyGoal, setEditableMonthlyGoal] = useState(monthlyGoal.goalName);

    const handleChange = (event) => {
        setEditableMonthlyGoal(event.target.value);
    }

    let content = <h3>{editableMonthlyGoal}</h3>

    if (editable) {
        content = <div>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" value={editableMonthlyGoal}/>
        </form>
    </div>
    }

    return (
    <div>
        <div>
            <div>{content}</div>
        </div>
        <button onClick={handleClickDelete}>Delete goal</button>
        <button onClick={handleEditState}>Edit goal</button>
    </div>
    )
};

export default MonthlyGoalsItem