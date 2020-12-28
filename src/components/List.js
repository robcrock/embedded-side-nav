import React from "react"
import ListDashboard from "./ListDashboard"

export default function Library({
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
      <div
        id="dismiss"
        onClick={() => {
          setListStatus(!listStatus)
          setOverlayStatus(!overlayStatus)
        }}
      >
        <p>Left Arrow</p>
        <i className="fas fa-arrow-left"></i>
      </div>
      <h2>List</h2>
      <div className="list-dashboards">
        {dashboards.map((dashboard) => (
          <ListDashboard
            dashboard={dashboard}
            dashboards={dashboards}
            setDashboards={setDashboards}
            setCurrentDashboard={setCurrentDashboard}
            key={dashboard.id}
            id={dashboard.id}
          />
        ))}
      </div>
    </div>
  )
}
