// App.jsx
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar setIsOpen={setIsOpen} />
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default App;