import BeginningAnimation from "./components/ModelPage/BeginningAnimation";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import "@mantine/carousel/styles.css";
import * as React from "react";

const App: React.FC = () => {
  return (
    <div id="App" style={{ overflow: "hidden" }}>
      <MantineProvider>
        <BeginningAnimation />
      </MantineProvider>
    </div>
  );
};

export default App;
