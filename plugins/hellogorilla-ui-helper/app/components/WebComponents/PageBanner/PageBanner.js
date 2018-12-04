import React, { Component } from 'react'

import {
  PageBanner,
  Text,
  Deco,
} from '../../../../builder/app/modules/PageBanner'
import { wem } from 'ruucm-blocks/tools/mixins'

export default class PageBannerComponent extends Component {
  render() {
    return <PageBanner bannerText={this.props.wpObject.banner_text} />
  }
}
