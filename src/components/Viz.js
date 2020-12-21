import { useState, useRef, useEffect } from "react"
const { tableau } = window

export default function Viz() {
  const [viz, setViz] = useState(null)

  // Set up the arguments to pass into the Tableau Viz function
  const ref = useRef(null)
  const url =
    "https://10ax.online.tableau.com/t/developmentonlydev595736/views/SocialMediaKPIs/kpi1"
  const options = {
    hideTabs: true,
    hideToolbar: true,
    width: "900px",
    height: "540px",
    onFirstInteractive: function () {
      console.log("This viz is interactive.")
    },
  }

  function getUnderlyingData() {
    if (viz !== null) {
      console.log("Viz is not null")
      const workbook = viz.getWorkbook()
      console.log(workbook)
    } else {
      console.log("We don't have a viz yet")
    }
  }

  // This function will be run on page load to initialize our viz.
  const initViz = () => {
    setViz(new tableau.Viz(ref.current, url, options))
    getUnderlyingData()
  }

  // Initialize viz when the page loads
  useEffect(initViz, [])

  return <div ref={ref} />
}
