import React from 'react'

import { WP } from '../../../../builder/app/modules/DataContainer'
import { UserProfile } from '../../../../builder/app/modules/UserProfile'

const UserProfileComponent = props => {
  return (
    <WP wpType="singleUser" nonce={props.wpObject.nonce}>
      <UserProfile />
    </WP>
  )
}
export default UserProfileComponent
