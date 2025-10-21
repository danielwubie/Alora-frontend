import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom>
        Hello Material UI 👋
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
}

export default App;
