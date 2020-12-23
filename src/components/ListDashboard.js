export default function LibrarySong({
  dashboard,
  dashboards,
  setDashboards,
  setCurrentDashboard,
  id,
}) {
  const dashboardSelectHandler = () => {
    console.log(dashboard)
    setCurrentDashboard(dashboard)
    // Add active state
    const newDashboards = dashboards.map((dashboards) => {
      if (dashboards.id === id) {
        return {
          ...dashboards,
          active: true,
        }
      } else {
        return {
          ...dashboards,
          active: false,
        }
      }
    })
    setDashboards(newDashboards)
  }

  return (
    <div
      className={`list-dashboard ${dashboard.active ? "selected" : ""}`}
      onClick={dashboardSelectHandler}
    >
      <img src={dashboard.image} alt={dashboard.name}></img>
      <div className="dashboard-description">
        <h3>{dashboard.name}</h3>
        <h4>{dashboard.author}</h4>
      </div>
    </div>
  )
}
