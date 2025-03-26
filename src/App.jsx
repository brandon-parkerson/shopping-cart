import {useState} from "react";
import Shop from "./Shop.jsx";
import Nav from "./Shop.jsx";

export default function App() {
  const [numItems, setNumItems] = useState(0);

  return (
    <>
      <Shop onItem={setNumItems} />
      <Nav numItems={numItems} />
    </>
    
  )

}