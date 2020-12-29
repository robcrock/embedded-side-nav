import { useState } from "react"
// Import Components
import Menu from "./components/Menu"
import Overlay from "./components/Overlay"
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
  const [overlayStatus, setOverlayStatus] = useState(false)

  return (
    <div className="App">
      <List
        listStatus={listStatus}
        setListStatus={setListStatus}
        overlayStatus={overlayStatus}
        setOverlayStatus={setOverlayStatus}
        dashboards={dashboards}
        setDashboards={setDashboards}
        setCurrentDashboard={setCurrentDashboard}
      />
      <Menu
        listStatus={listStatus}
        setListStatus={setListStatus}
        overlayStatus={overlayStatus}
        setOverlayStatus={setOverlayStatus}
      />
      <Overlay
        listStatus={listStatus}
        setListStatus={setListStatus}
        overlayStatus={overlayStatus}
        setOverlayStatus={setOverlayStatus}
      />
      <Viz currentDashboard={currentDashboard} />
    </div>
  )
}

export default App
