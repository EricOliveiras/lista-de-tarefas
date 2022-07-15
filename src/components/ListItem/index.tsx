import { useState } from 'react';
import { Item } from '../../types/Item';
import { ListItemContainer }  from './styles';

type Props = {
  item: Item;
};

export const ListItem = ({ item }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <ListItemContainer done={isChecked}>
      <input 
        type="checkbox" 
        checked={isChecked}
        onChange={e => setIsChecked(!isChecked)}
      />
      <label htmlFor="">{item.name}</label>
      <button
       type="submit"
      >
        X
      </button>
    </ListItemContainer>
  );
};
