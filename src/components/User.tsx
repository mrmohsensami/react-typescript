type userProps = {
    userInfo: {
        name: string;
        age: number;
    };
};

const User = (props: userProps) => {
    return (
        <div>
            {props.userInfo.name} - {props.userInfo.age}
        </div>
    );
};

export default User;
