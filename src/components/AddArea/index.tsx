import { useState } from "react";
import { Container } from './styles';

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value !== '') {
      onEnter(value);
      e.target.value = '';
    };
  };

  return (
    <Container>
      <div className="image">&#43;</div>
      <input 
        type="text" 
        placeholder="Adicione uma tarefa"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
};
