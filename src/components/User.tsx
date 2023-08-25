import { UserProps } from './user.types';

const User = ({ UserInfo }: UserProps) => {
    return (
        <div>
            {UserInfo.firstName} - {UserInfo.lastName}
        </div>
    );
};

export default User;
