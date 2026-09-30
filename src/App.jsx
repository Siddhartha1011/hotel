import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Home
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    />
  );
}

export default App;