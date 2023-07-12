import User from './User';

export default function UserTable({ users }) {
    const rows = [];

    users.forEach((user) => {
        // each user and push them inside the array with the User component (have not made)
        rows.push(
            <User
                user={user}
                key={user._id} />
        );
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Full Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Pronouns</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}