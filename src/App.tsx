import { Typography } from "@mui/material";
import "./App.css";
import Counter from "./components/Counter";
function App() {
  return (
    <>
      <Typography variant="h2" sx={{ margin: "30px 0" }}>
        Basic Redux Counter
      </Typography>
      <Counter />
    </>
  );
}

export default App;
