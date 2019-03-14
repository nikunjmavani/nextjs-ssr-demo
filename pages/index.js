import Link from 'next/link'
import users from '../data/users'

const Index = () => (
    <div>
      <p>Users</p>
      <ul>
      {
          users.map((user,i) => (
          <li>
            <Link key={i} href={`/user/${user.name}`}>
                <a>{`${user.name}`}</a>
            </Link>
            </li>
          ))
      }
      </ul>
    </div>
  )
  export default Index