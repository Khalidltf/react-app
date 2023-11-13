import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Paris", "Rabat", "Madrid", "New York", "London"]

  return <div><ListGroup items={items} heading="Cities" /></div>
}

export default App
