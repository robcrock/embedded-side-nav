import React from "react"
// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
// Import components
import ListDashboard from "./ListDashboard"

export default function List({
  listStatus,
  setListStatus,
  overlayStatus,
  setOverlayStatus,
  dashboards,
  setDashboards,
  setCurrentDashboard,
}) {
  return (
    <div className={`list ${listStatus ? "active-list" : ""}`}>
      <div className="list-header">
        <h2>Dashboards</h2>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => {
            setListStatus(!listStatus)
            setOverlayStatus(!overlayStatus)
          }}
        />
      </div>
      <div className="list-dashboards">
        {dashboards.map((dashboard) => (
          <ListDashboard
            dashboard={dashboard}
            dashboards={dashboards}
            setDashboards={setDashboards}
            setCurrentDashboard={setCurrentDashboard}
            // React requires the key prop with a unique values on components
            // that have the same props.
            key={dashboard.id}
            id={dashboard.id}
          />
        ))}
      </div>
    </div>
  )
}
