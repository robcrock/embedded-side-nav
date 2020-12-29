import React from "react"
// Import FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

export default function Menu({
  listStatus,
  setListStatus,
  overlayStatus,
  setOverlayStatus,
}) {
  return (
    <nav
      className="bars"
      onClick={() => {
        setListStatus(!listStatus)
        setOverlayStatus(!overlayStatus)
      }}
    >
      <FontAwesomeIcon icon={faBars} />
    </nav>
  )
}
