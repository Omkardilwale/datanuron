import SplitPane from 'react-split-pane';
import './App.css';
import C1 from './components/C1'
import C2 from './components/C2'
import C3 from './components/C3'
function App() {
  return (
    <div className="App">
      <SplitPane split="horizontal" minSize={50} defaultSize={500}>
      <SplitPane split="vertical" defaultSize={800}>
          <C1/>
          <C2/>
        </SplitPane>
        <C3/>
      </SplitPane>
    </div>
  );
}

export default App;
