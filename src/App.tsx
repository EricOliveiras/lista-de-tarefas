import React, { useState } from 'react'

import { ListItem } from './components/ListItem'
import { AddArea } from './components/AddArea'

import { Container, Area, Header } from './styles/App.styles';
import { GlobalStyles } from './styles/GlobalStyles';

import { Item } from './types/Item';

export const App = () => {
  const [list, setList] = useState<Item[]>([]);

  const handleAddTask = (taskName: string) => {
    setList([...list, { id: list.length + 1, name: taskName, done: false }]);
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Area>
          <Header>Lista de Tarefas</Header>

          <AddArea onEnter={handleAddTask} />

          {list.map((listItem, index) => (
            <ListItem key={index} item={listItem} />
          ))}

        </Area>
      </Container>
    </>
  );

};
