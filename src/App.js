import logo from './logo.svg';
import './App.css';
import {PostProvider} from "./contexts/postContext";
import {Post} from "./Post";
import {ContextProvider} from "./contexts/providerComposer";

function App() {
  return (
      <ContextProvider>
        <div className="App">
            <Post></Post>
        </div>
      </ContextProvider>
  );
}

export default App;
