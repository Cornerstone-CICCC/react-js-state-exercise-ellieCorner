type ClickCounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const ClickCounter = ({ setCount }: ClickCounterProps) => {
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return <button onClick={handleClick}>Click Counter</button>;
};

export default ClickCounter;
