import Card from '../UI/Card'

export default function UserCard(props) {
    return (
        <Card>
            <ul>
                {props.users.length>0 ? props.users.map((user) => <li key={user.id}> {user.name} is {user.age} years old.</li>) :'No records to show'}
            </ul>
        </Card>
    )
}
