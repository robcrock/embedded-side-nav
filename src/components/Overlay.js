export default function Overlay({ overlayStatus }) {
  return <div className={`overlay ${overlayStatus ? "active" : ""}`}></div>
}
