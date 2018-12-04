import React from 'react'

import { UserList } from '../../../../builder/app/modules/UserList'
import { WP } from '../../../../builder/app/modules/DataContainer'

const UserListComp = props => {
  return (
    <WP wpType="user" nonce={props.wpObject.nonce}>
      <UserList />
    </WP>
  )
}

export default UserListComp
