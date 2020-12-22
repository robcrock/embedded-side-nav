import { useState } from "react"

import Viz from "./components/Viz"

import "./App.css"
// Import the data
import data from "./utils"

function App() {
  // State
  const [dashboards, setDashboards] = useState(data())
  const [currentDashboard, setCurrentDashboard] = useState(dashboards[0])

  return (
    <div className="App">
      <Viz currentDashboard={currentDashboard} />
    </div>
  )
}

export default App
