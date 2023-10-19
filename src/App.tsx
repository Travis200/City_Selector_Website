import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

const items = ["London", "Manchester", "Edinburgh", "Newcastle", "York"];

const App = () => {
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");

  const handleSelectItem = (item: string) => {
    console.log(item);
    setSelectedCity(item);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisible(false)}>
          You selected {selectedCity}
        </Alert>
      )}

      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Button onClick={() => setAlertVisible(true)}>Counter: </Button>
    </div>
  );
};

export default App;
