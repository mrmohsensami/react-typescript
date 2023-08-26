// import Greeting from './components/Greeting';
// import User from './components/User';
// import Users from './components/Users';
// import Status from './components/Status';
import Title from './components/Title';
import Wrapper from './components/Wrapper';

function App() {
    // const UserInfo = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    // };
    // const UsersInfo = [
    //     {
    //         firstName: 'John',
    //         lastName: 'Doe',
    //     },
    //     {
    //         firstName: 'Jane',
    //         lastName: 'Doe',
    //     },
    // ];
    return (
        <div className="App">
            {/* <Greeting name="John" messageCount={5} isLoggedIn={true} />
            <hr />
            <User UserInfo={UserInfo} />
            <hr />
            <Users UsersInfo={UsersInfo} /> */}
            {/* <Status status="failed" /> */}

            <Wrapper>
                <Title>Hello World</Title>
            </Wrapper>
        </div>
    );
}

export default App;
