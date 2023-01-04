import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import MonthlyGoalsList from './components/MonthlyGoalsList'
import MonthlyGoalsInput from './components/MonthlyGoalsInput'


function App() {
  const [monthlyGoals, setMonthlyGoals] = useState([{id: 1, goalName: 'bootcamp'}]);

  const createGoal = (goalInput) => {
    const updateGoal = [...monthlyGoals, {id: Math.floor(Math.random() * 9999), goalName: goalInput}];
    setMonthlyGoals(updateGoal);
  }

  const deleteGoalById = (goalId) => {
    const updateGoal = monthlyGoals.filter(monthlyGoal => monthlyGoal.id !== goalId);
    setMonthlyGoals(updateGoal);
  }

  const editGoalById = (goalId, editableMonthlyGoal) => {
    const updateGoal = monthlyGoals.map(monthlyGoal => {
      if (monthlyGoal.id === goalId) {
        return {...monthlyGoal, goalName: editableMonthlyGoal}
      }
      return monthlyGoal
    })
    setMonthlyGoals(updateGoal);
  }

  return (
    <div className="App">
      <Header />
      <MonthlyGoalsList monthlyGoals={monthlyGoals} onDelete={deleteGoalById} onEdit={editGoalById}/>
      <MonthlyGoalsInput onCreate={createGoal}/>
    </div>
  )
}

export default App
