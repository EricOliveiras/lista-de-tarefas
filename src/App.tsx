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

  const handleDeleteTask = (id: number) => {
    setList(list.filter(item => item.id !== id));
  };

  return (
    <>
      <GlobalStyles />
      <Container>
        <Area>
          <Header>Lista de Tarefas</Header>

          <AddArea onEnter={handleAddTask} />

          {list.map(item => (
            <ListItem key={item.id} item={item} onDelete={handleDeleteTask}/>
          ))}

        </Area>
      </Container>
    </>
  );

};
