import { useState } from "react";
import Button from "./Button";
import Display from "./Display";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>العداد</h1>

      <Display value={count} />

      <Button onClick={() => setCount(count + 1)} text="زيادة" />
      <Button onClick={() => setCount(count - 1)} text="نقصان" />
      <Button onClick={() => setCount(0)} text="تصفير" />
    </div>
  );
};

export default Counter;