import React, { useEffect, useState } from "react";

import { execTest } from "lib/api/test";

const App: React.FC = () => {
  const [message, setMassage] = useState<string>("");

  const handleExecTest = async () => {
    const res = await execTest();

    if (res.status === 200) {
      setMassage(res.data.message);
    }
  };

  useEffect(() => {
    handleExecTest();
  }, []);

  return <h1>{message}</h1>;
};

export default App;
