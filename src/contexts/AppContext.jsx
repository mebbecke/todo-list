import { createContext, useEffect, useState } from "react"
import { api } from "../services/"

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext({})

export const AppContextProvider = (props) => {
  const { children } = props

  // eslint-disable-next-line no-unused-vars
  const [developer, setDeveloper] = useState("Ebbecke")
  const [tasks, setTasks] = useState([])

  const [getLoading, setGetLoading] = useState(false)
  const [addLoading, setAddLoading] = useState(false)
  const [removeLoading, setRemoveLoading] = useState(null)
  const [updateLoading, setUpdateLoading] = useState(null)

  const loadTasks = async () => {
    setGetLoading(true)
    const { data = [] } = await api.get("/tasks")

    setTasks([...data])
    setGetLoading(false)
  }

  const addTask = async (taskName) => {
    setAddLoading(true)
    const { data: task } = await api.post("/tasks", { name: taskName })

    setTasks((currentState) => {
      return [...currentState, task]
    })
    setAddLoading(false)
  }

  const removeTask = async (taskId) => {
    setRemoveLoading(taskId)
    await api.delete(`/tasks/${taskId}`)

    setTasks((currentState) => {
      const updatedTasks = currentState.filter((task) => task.id !== taskId)
      return [...updatedTasks]
    })
    setRemoveLoading(null)
  }

  const updateTask = async (taskId, newTaskName) => {
    setUpdateLoading(taskId)
    const { data: updatedTask } = await api.put(`tasks/${taskId}`, {
      name: newTaskName,
    })

    setTasks((currentState) => {
      const updatedTasks = currentState.map((task) => {
        return task.id == taskId
          ? {
              ...task,
              name: updatedTask.name,
            }
          : task
      })

      return [...updatedTasks]
    })
    setUpdateLoading(null)
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return (
    <AppContext.Provider
      value={{
        developer,
        tasks,
        addTask,
        removeTask,
        updateTask,
        getLoading,
        addLoading,
        removeLoading,
        updateLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
