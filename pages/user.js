import {withRouter} from 'next/router'

const User = (props) => (
    <div>
      <p>Hello <strong> { props.router.query.name } </strong> </p>
    </div>
  )
  
  export default withRouter(User)