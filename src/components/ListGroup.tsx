import { Fragment } from "react";

function ListGroup() {
  const items = ["London", "Manchester", "Newcastle", "Edinburgh", "York"];
  // const items: string[] = [];

  return (
    <>
      <h1>List</h1>
      {/* {emptyItemsCheck}
      {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
