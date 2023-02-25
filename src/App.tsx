import React from 'react';
import { useDrag, DndProvider } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { HTML5Backend } from 'react-dnd-html5-backend'
import './App.css';

const style = {
  border: '1px dashed gray',
  padding: '0.5rem 1rem',
  marginBottom: '.5rem',
  backgroundColor: 'white',
  cursor: 'move',
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Masters App
      </header>
      <body>
        <ul>
          <li>Create a way to associate a list of players with a participant</li>
          <li>Create a sorted list of players on the right</li>
          <li>Create a list of participants on the left</li>
          <li>Drag player from right to participant</li>
        </ul>
        <DndProvider backend={HTML5Backend}>
          <Card text='hello world!' />
        </DndProvider>
      </body>
    </div>
  );
}

interface CardProps {
  text: string;
}

const Card = ({ text }: CardProps) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: ItemTypes.CARD,
      item: { text },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )
  return (
    <div ref={dragRef} style={{ ...style, opacity }}>
      {text}
    </div>
  )
}

export default App;
