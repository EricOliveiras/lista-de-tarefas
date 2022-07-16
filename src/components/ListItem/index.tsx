import { useState } from 'react';
import { Item } from '../../types/Item';
import { ListItemContainer }  from './styles';

type Props = {
  item: Item;
  onDelete: (id: number) => void;
};

export const ListItem = ({ item, onDelete }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const deleteItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDelete(item.id);
  };                                                            

  return (
    <ListItemContainer done={isChecked}>
      <input 
        type="checkbox" 
        checked={isChecked}
        onChange={e => setIsChecked(!isChecked)}
      />
      <label htmlFor="">{item.name}</label>
      <button 
        type='button'
        onClick={deleteItem}
      >
        X
      </button>
    </ListItemContainer>
  );
};
