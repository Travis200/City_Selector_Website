const items = ["London", "Manchester", "Newcastle", "Edinburgh", "York"];

import ListGroup from "./components/ListGroup";

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
