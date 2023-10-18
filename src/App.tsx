import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Alert>Hello World</Alert>
      <Button>Counter: </Button>
    </div>
  );
};

export default App;

// const items = ["London", "Manchester", "Newcastle", "Edinburgh", "York"];

// import ListGroup from "./components/ListGroup";

// function App() {
//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };
//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;
