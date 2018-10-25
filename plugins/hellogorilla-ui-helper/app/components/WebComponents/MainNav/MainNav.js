import React, { Component } from 'react'

import { Center } from '../../../../builder/app/modules/Centering'
import { Hover } from '../../../../builder/app/modules/Animation'

import { log } from 'ruucm-util'
import { wem } from 'ruucm-blocks/tools/mixins'

import { MainNav, Menus } from '../../../../builder/app/modules/MainNav'
import { WP } from '../../../../builder/app/modules/DataContainer'

const MainNavComp = props => {
  return (
    <MainNav shortcodeChild={props.wpObject.shortcodeChild}>
      <WP wpType="menu">
        <Menus />
      </WP>
    </MainNav>
  )
}

export default MainNavComp
