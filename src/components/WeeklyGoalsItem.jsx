import { useState } from "react";
import WeeklyGoalsEdit from "./WeeklyGoalsEdit";

const WeeklyGoalsItem = ({weeklyGoal, onEdit}) => {

    const [editable, setEditable] = useState(true);

    const handleClick = () => {
        setEditable(true);
    }

    const handleEditState = () => {
        setEditable(false);
    }

    return (
    <div>
        <div onDoubleClick={handleClick}>
            {editable === false ? 
            <h2>{weeklyGoal.input}</h2>
            :
            <WeeklyGoalsEdit weeklyGoal={weeklyGoal} onEdit={onEdit} onSave={handleEditState}/>
            }
        </div>
    </div>
    )
};

export default WeeklyGoalsItem