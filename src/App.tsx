import Greeting from './components/Greeting';
import logo from './logo.svg';

function App() {
    return (
        <div className="App">
            <Greeting name="John" messageCount={5} isLoggedIn={true} />
        </div>
    );
}

export default App;
