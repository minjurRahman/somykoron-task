import { grapesjs } from "grapesjs";
import { useEffect, useState } from "react";
import plugin from "grapesjs-preset-webpage"
import './App.css';

function App() {

  const [editor, setEditor] = useState(null);
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      plugins: [plugin],
      pluginsOpts: {
        [plugin]: { /* options */ }
      }
    });
    setEditor(editor);
  }, [])

  return (
    <div className="App">
      <div id="editor"></div>
    </div>
  );
}

export default App;
