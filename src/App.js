import { grapesjs } from "grapesjs";
import { useEffect, useState } from "react";
import pluginPresent from "grapesjs-preset-webpage";

import './App.css';

function App() {

  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [
        pluginPresent,
      ],
      pluginsOpts: {
        pluginPresent: {},
      }
    });
    setEditor(editor);
  }, []);

  const handleCustomWeb = () => {
    console.log("Customs Web Code To Save a Database");
  }

  return (
    <div className="App">
      <div id="editor"></div>
      <button onClick={handleCustomWeb}>Save</button>
    </div>
  );
}

export default App;
