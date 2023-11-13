import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

const App = () => {
  const [alert, setAlert] = useState(false)

  return (
    <div>
      {alert && <Alert onClose={() => setAlert(false)}>My alert</Alert>}
      <Button
        color = 'secondary'
        onClick={() => setAlert(true)}>
        Click
      </Button>
    </div>
  );
};

export default App;
