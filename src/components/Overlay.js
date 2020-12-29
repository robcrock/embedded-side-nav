export default function Overlay({
  listStatus,
  setListStatus,
  overlayStatus,
  setOverlayStatus,
}) {
  return (
    <div
      className={`overlay ${overlayStatus ? "active" : ""}`}
      onClick={() => {
        setListStatus(!listStatus)
        setOverlayStatus(!overlayStatus)
      }}
    ></div>
  )
}
