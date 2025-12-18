type LightToggleProps = {
  setIsLightsOn: React.Dispatch<React.SetStateAction<boolean>>;
};

const LightToggle = ({ setIsLightsOn }: LightToggleProps) => {
  const handleToggle = () => {
    setIsLightsOn((prev) => !prev);
  };

  return <button onClick={handleToggle}>Toggle Lights</button>;
};

export default LightToggle;
