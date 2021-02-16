import Link from 'next/link'
import WithApollo from '../lib/with-apollo'
import USERS from '../components/Users'

const Page = () => (
  <div>
    Welcome, <USERS />
    <br/><br/>
    <Link href="/about"><a>About</a></Link>

  </div>
)

export default WithApollo(Page)
