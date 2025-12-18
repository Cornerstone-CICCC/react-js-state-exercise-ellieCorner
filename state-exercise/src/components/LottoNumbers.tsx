type LottoNumbersProps = {
  setLottoNumbers: React.Dispatch<React.SetStateAction<number[]>>;
};

const LottoNumbers = ({ setLottoNumbers }: LottoNumbersProps) => {
  const generateLottoNumbers = () => {
    const numbers: number[] = [];
    while (numbers.length < 7) {
      const randomNum = Math.floor(Math.random() * 50) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }
    setLottoNumbers(numbers.sort((a, b) => a - b));
  };

  return <button onClick={generateLottoNumbers}>Generate Lotto Numbers</button>;
};

export default LottoNumbers;
