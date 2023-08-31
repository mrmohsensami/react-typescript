// import Greeting from './components/Greeting';
// import User from './components/User';
// import Users from './components/Users';
// import Status from './components/Status';
// import Title from './components/Title';
// import Wrapper from './components/Wrapper';
// import Button from './components/Button';

import Toast from './components/Toast';

// import List from './components/List';

// import Private from './components/Private';
// import Profile from './components/Profile';
// import Timer from './components/Timer';

// import Counter from './components/Counter';
// import User from './context/User';
// import UserContextProvider from './context/UserContext';

// import Container from './components/Container';
// import Login from './components/Login';

// import { useState } from 'react';
// import Input from './components/Input';

function App() {
    // function handler(item: string | number) {
    //     console.log(item);
    // }
    // const [inputValue, setInputValue] = useState<string>('');
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
            <Toast position="center-bottom" />
            {/* <>
                <List items={['John', 'Kevin', 'Merry']} handler={handler} />
                <List items={[1, 2, 4]} handler={handler} />
            </> */}
            {/* <Private isLoggedIn={true} Component={Profile} /> */}
            {/* <Timer /> */}
            {/* <UserContextProvider>
                <User />
            </UserContextProvider> */}
            {/* <Counter /> */}
            {/* <Login /> */}
            {/* <Container styles={{ border: '1px solid red', padding: '1rem ' }}></Container> */}
            {/* <Greeting name="John" messageCount={5} isLoggedIn={true} />
            <hr />
            <User UserInfo={UserInfo} />
            <hr />
            <Users UsersInfo={UsersInfo} /> */}
            {/* <Status status="failed" /> */}
            {/* <Wrapper>
                <Title>Hello World</Title>
            </Wrapper> */}
            {/* <Button clickHandler={(e, id) => console.log(e, id)} /> */}
            {/* <Input
                value={inputValue}
                handleChange={(e) => {
                    console.log(e.target.value);
                    setInputValue(e.target.value);
                }}
            /> */}
        </div>
    );
}

export default App;
