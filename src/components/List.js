import React from "react"
import ListDashboard from "./ListDashboard"

export default function Library({
  listStatus,
  dashboards,
  setDashboards,
  setCurrentDashboard,
}) {
  return (
    <div className={`list ${listStatus ? "active-list" : ""}`}>
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
