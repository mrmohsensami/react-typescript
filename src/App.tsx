import Greeting from './components/Greeting';
import User from './components/User';
import Users from './components/Users';

function App() {
    const UserInfo = {
        firstName: 'John',
        lastName: 'Doe',
    };
    const UsersInfo = [
        {
            firstName: 'John',
            lastName: 'Doe',
        },
        {
            firstName: 'Jane',
            lastName: 'Doe',
        },
    ];
    return (
        <div className="App">
            <Greeting name="John" messageCount={5} isLoggedIn={true} />
            <hr />
            <User UserInfo={UserInfo} />
            <hr />
            <Users UsersInfo={UsersInfo} />
        </div>
    );
}

export default App;
