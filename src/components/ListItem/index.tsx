import { useEffect, useState } from 'react';
import { FiTrash } from 'react-icons/fi';
import { Item } from '../../types/Item';
import { ListItemContainer }  from './styles';

type Props = {
  item: Item;
  onDelete: (id: number) => void;
  storageChange: (id: number) => void;
};

export const ListItem = ({ item, onDelete, storageChange }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  const deleteItem = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onDelete(item.id);
  }; 
  
  const chanceCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    storageChange(item.id);
    setIsChecked(!isChecked);
  };
                                  
  return (
    <ListItemContainer done={isChecked}>
      <input 
        type="checkbox" 
        checked={isChecked}
        onChange={e => chanceCheck(e)}
      />
      <label htmlFor="">{item.name}</label>
      <button 
        type='button'
        onClick={deleteItem}
      >
        <FiTrash />
      </button>
    </ListItemContainer>
  );
};
