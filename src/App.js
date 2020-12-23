import { useState } from "react"

import Viz from "./components/Viz"
import List from "./components/List"
// Adding styles
import "./styles/app.css"
// Import the data
import data from "./utils"

function App() {
  // State
  const [dashboards, setDashboards] = useState(data())
  const [currentDashboard, setCurrentDashboard] = useState(dashboards[0])
  const [listStatus, setListStatus] = useState(false)

  return (
    <div className="App">
      <Viz currentDashboard={currentDashboard} />
      <List
        listStatus={listStatus}
        dashboards={dashboards}
        setDashboards={setDashboards}
        setCurrentDashboard={setCurrentDashboard}
      />
    </div>
  )
}

export default App
