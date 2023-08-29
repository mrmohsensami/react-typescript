export type ProfileProps = {
    name: string;
};

const Profile = ({ name }: ProfileProps) => {
    return <div>Welcome {name}</div>;
};

export default Profile;
