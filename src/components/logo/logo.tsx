import { Link } from 'react-router-dom'

import { ROUTE_PATHS } from '~/app.constants'

import './logo.css'

export function Logo() {
  return (
    <Link to={ROUTE_PATHS.HOME} className="logo">
      Logo
    </Link>
  )
}
