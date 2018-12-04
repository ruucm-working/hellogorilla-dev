import React, { Component } from 'react'

import { WP } from '../../../../builder/app/modules/DataContainer'

import { MyPage } from '../../../../builder/app/modules/MyPage'

export default class MyPageComponent extends Component {
  render() {
    return (
      <WP>
        <MyPage />
      </WP>
    )
  }
}
