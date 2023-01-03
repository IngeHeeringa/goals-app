import { useState } from "react";
import MonthlyGoalsItem from "./MonthlyGoalsItem"

const MonthlyGoalsList = ({monthlyGoals, onDelete, onEdit}) => {
    
    return (
        <div>
            {monthlyGoals.map(monthlyGoal => <MonthlyGoalsItem key={monthlyGoal.id} monthlyGoal={monthlyGoal} onDelete={onDelete} onEdit={onEdit}/>)}
        </div>
    )
}

export default MonthlyGoalsList