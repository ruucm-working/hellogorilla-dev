import React, { Component } from 'react'

import { Center } from '../../../../builder/app/modules/Centering'
import { Hover } from '../../../../builder/app/modules/Animation'

import { log } from 'ruucm-util'
import { wem } from 'ruucm-blocks/tools/mixins'

import { MainNav, Menus } from '../../../../builder/app/modules/MainNav'
import { WP, WooCommerce } from '../../../../builder/app/modules/DataContainer'

const MainNavComp = props => {
  return (
    <MainNav
      shortcodeChild={props.wpObject.shortcodeChild}
      nonce={props.wpObject.nonce}
    >
      <WooCommerce wcType="cart">
        <WP wpType="menu">
          <Menus />
        </WP>
      </WooCommerce>
    </MainNav>
  )
}

export default MainNavComp
