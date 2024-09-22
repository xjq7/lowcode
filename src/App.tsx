import { DndProvider } from 'react-dnd';
import Editor from './editor';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Editor />
    </DndProvider>
  );
}

export default App;
