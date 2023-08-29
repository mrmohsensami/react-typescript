import { ProfileProps } from './Profile';
type PrivateProps = {
    isLoggedIn: boolean;
    Component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, Component }: PrivateProps) => {
    return <div>{isLoggedIn ? <Component name="John" /> : <p>Please Login to continue</p>}</div>;
};

export default Private;
