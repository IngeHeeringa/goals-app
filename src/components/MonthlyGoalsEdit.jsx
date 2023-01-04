import { useState } from "react";

const MonthlyGoalsEdit = ({monthlyGoal, onSubmit}) => {

    const [editableMonthlyGoal, setEditableMonthlyGoal] = useState(monthlyGoal.goalName);

    const handleChange = (event) => {
        setEditableMonthlyGoal(event.target.value);
    }

    const handleEditSubmit = (event) => {
        event.preventDefault();
        onSubmit(monthlyGoal.id, editableMonthlyGoal)
    }

    return (
        <div>
            <form onSubmit={handleEditSubmit}>
                <input onChange={handleChange} type="text" value={editableMonthlyGoal}/>
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default MonthlyGoalsEdit