import { Name } from './user.types';

type UsersProps = {
    UsersInfo: Name[];
};

const Users = ({ UsersInfo }: UsersProps) => {
    return (
        <div>
            {UsersInfo.map((user) => (
                <div key={user.firstName}>
                    {user.firstName} - {user.lastName}
                </div>
            ))}
        </div>
    );
};

export default Users;
