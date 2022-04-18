import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button prop="plus" />
      <Button prop="minus" />
      <Button prop="add" text="Add to cart" />
    </>
  );
}

export default App;
