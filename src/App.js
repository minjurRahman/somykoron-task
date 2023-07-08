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

  return (
    <div className="App">
      <div id="editor"></div>
      <button>Save</button>
    </div>
  );
}

export default App;
