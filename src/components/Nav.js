export default function Nav({ listStatus, setListStatus }) {
  return (
    <nav>
      <button onClick={() => setListStatus(!listStatus)}>List</button>
    </nav>
  )
}
