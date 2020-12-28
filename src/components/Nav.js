export default function Nav({
  listStatus,
  setListStatus,
  overlayStatus,
  setOverlayStatus,
}) {
  return (
    <nav>
      <button
        onClick={() => {
          setListStatus(!listStatus)
          setOverlayStatus(!overlayStatus)
        }}
      >
        List
      </button>
    </nav>
  )
}
