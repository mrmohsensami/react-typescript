type propsGreeting = {
    name: string;
    messageCount: number;
    isLoggedIn: boolean;
};

const Greeting = (props: propsGreeting) => {
    return (
        <div>
            {props.isLoggedIn ? (
                <h1>
                    Welcome {props.name} you have {props.messageCount}
                </h1>
            ) : (
                <h1>Hello Guest</h1>
            )}
        </div>
    );
};

export default Greeting;
