import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Designer from "./Designer";
import Blocks from "./Blocks";

import "./App.css";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <div className="flex flex-row">
          <Blocks />
          <div className="w-10"></div>
          <Designer />
        </div>
      </DndProvider>
    </div>
  );
}

export default App;
