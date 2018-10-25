import React, { Component } from 'react'

import { WP } from '../../../../builder/app/modules/DataContainer'

import { NewArtist } from '../../../../builder/app/modules/NewArtist'

export default class NewArtistComponent extends Component {
  render() {
    return (
      <WP nonce={this.props.wpObject.nonce}>
        <NewArtist />
      </WP>
    )
  }
}
