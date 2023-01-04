import MonthlyGoalsItem from "./MonthlyGoalsItem"

const MonthlyGoalsList = ({monthlyGoals, onDelete, onEdit}) => {
    
    return (
        <section>
            {monthlyGoals.map(monthlyGoal => <MonthlyGoalsItem key={monthlyGoal.id} monthlyGoal={monthlyGoal} onDelete={onDelete} onEdit={onEdit}/>)}
        </section>
    )
}

export default MonthlyGoalsList