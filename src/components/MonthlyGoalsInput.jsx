import { useState } from "react"

const MonthlyGoalsInput = ({onCreate}) => {

    const [newMonthlyGoal, setNewMonthlyGoal] = useState('');

    const handleChange = (event) => {
        setNewMonthlyGoal(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(newMonthlyGoal);
        setNewMonthlyGoal('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={newMonthlyGoal}/>
                <button type="submit">Add goal</button>
            </form>
        </div>
    )
}

export default MonthlyGoalsInput