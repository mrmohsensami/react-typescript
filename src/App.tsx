import Greeting from './components/Greeting';
import User from './components/User';

function App() {
    const userInfo = {
        name: 'John',
        age: 30,
    };
    return (
        <div className="App">
            {/* <Greeting name="John" messageCount={5} isLoggedIn={true} /> */}
            <User userInfo={userInfo} />
        </div>
    );
}

export default App;
