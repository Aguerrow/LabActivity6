import "./App.css";
import Header from "./Header";
import Form from "./Form";
import ItemList from "./ItemList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  return (
    <div>
      <Header />
      <Form onAddItem={handleAddItems} />
      <ItemList items={items} />
    </div>
  );
}

export default App;
