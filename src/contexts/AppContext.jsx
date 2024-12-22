import { createContext, useState } from "react"

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const { children } = props

  // eslint-disable-next-line no-unused-vars
  const [developer, setDeveloper] = useState("Ebbecke")
  const [tasks, setTasks] = useState([
    { id: 1, nome: "Tarefa 1" },
    { id: 2, nome: "Tarefa 2" },
    { id: 3, nome: "Tarefa 3" },
  ])

  const addTask = (taskName) => {
    setTasks((currentState) => {
      const newTask = {
        id: currentState.length + 1,
        nome: taskName,
      }

      return [...currentState, newTask]
    })
  }

  const removeTask = (taskId) => {
    setTasks((currentState) => {
      const updatedTasks = currentState.filter((task) => task.id !== taskId)
      return [...updatedTasks]
    })
  }

  const updateTask = (taskId, newTaskName) => {
    setTasks((currentState) => {
      const updatedTasks = currentState.map((task) => {
        if (task.id === taskId) {
          return { ...task, nome: newTaskName }
        }
        return task
      })

      return [...updatedTasks]
    })
  }

  return (
    <AppContext.Provider
      value={{ developer, tasks, addTask, removeTask, updateTask }}
    >
      {children}
    </AppContext.Provider>
  )
}
