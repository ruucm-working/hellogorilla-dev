import React from 'react'
import { EmptySpace } from '../../../../builder/app/modules/Layout'

import { log } from 'ruucm-util'

const EmptySpaceComponent = props => {
  log('props(EmptySpace)', props)
  return <EmptySpace height={props.wpObject.height} />
}

export default EmptySpaceComponent
