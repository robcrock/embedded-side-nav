import { useState } from "react"
// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
// Import Components
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
      <FontAwesomeIcon
        className="bars"
        icon={faBars}
        onClick={() => {
          setListStatus(!listStatus)
          setOverlayStatus(!overlayStatus)
        }}
      />
      <Viz currentDashboard={currentDashboard} />
    </div>
  )
}

export default App
