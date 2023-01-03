import { useState } from "react";

const WeeklyGoalsInput = ({weeklyGoals, onCreate}) => {

    const [newWeeklyGoal, setNewWeeklyGoal] = useState('');

    const handleChange = (event) => {
        setNewWeeklyGoal(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={newWeeklyGoal}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default WeeklyGoalsInput