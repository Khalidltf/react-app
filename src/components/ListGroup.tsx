function ListGroup() {
  let items = ["Paris", "Rabat", "Madrid", "New York", "London"];
  items = []

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item"> {item} </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
