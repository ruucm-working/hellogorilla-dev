import React from 'react'
import styled, { css } from 'styled-components'
import { log } from 'ruucm-util'

import { Row, Column } from 'ruucm-blocks/layouts'
import { Hover, Animate, Frame } from 'ruucm-blocks/animation'
import { center } from 'ruucm-blocks/tools/mixins'

const CoverImage = styled.img`
  height: 100vh;
  width: 100%;
  object-fit: cover;
`
const ImageOverlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`
const Title = styled.h1`
  font-family: NanumSquareWeb;
  font-weight: 100;
  line-height: 89px;
  font-size: 60px;
  color: #ffffff;
  position: absolute;
  top: 76px;
  left: 45px;
  max-width: 24.5vw;
`
const Profile = styled.div`
  position: absolute;
  top: 76px;
  right: 45px;
`
const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  position: relative;
  margin: 0 auto;
  ${props =>
    props.src &&
    css`
      background: url(${props.src});
      background-size: cover;
      background-position: center;
    `};
  &:before {
    content: '';
    background: #fdd388;
    width: 100%;
    height: 100%;
    border-radius: 50px;
    position: absolute;
    top: 0;
    mix-blend-mode: multiply;
  }
`

const ProfileName = styled.p`
  font-family: NanumSquareWeb;
  font-weight: 100;
  line-height: 44px;
  font-size: 30px;
  color: #eae5e3;
  margin-top: 33px;
`

const ItemMeta = styled.div`
  position: absolute;
  bottom: 76px;
  right: 45px;
  text-align: right;
`
const Slug = styled.span`
  font-family: NanumMyeongjoWeb;
  line-height: 86px;
  font-size: 50px;
  color: #ffffff;
`
const Number = styled.span`
  font-family: NanumMyeongjoWeb;
  line-height: 86px;
  font-size: 100px;
  color: #ffffff;
`

const Views = styled.span`
  font-family: NanumSquareWeb;
  font-weight: 100;
  line-height: 59px;
  font-size: 34px;
  color: #eae5e3;
`
const ViewsSlug = styled.span`
  font-family: NanumSquareWeb;
  font-weight: 100;
  line-height: 59px;
  font-size: 40px;
  color: #eae5e3;
`

const Box = styled.div`
  width: 42vw;
  margin: 0 auto;
  background: #eae5e3;
  padding: 40px 56px;
  ${center('xy')};
`
const Excerpt = styled.p`
  p {
    font-family: NanumMyeongjoWeb;
    font-weight: 900;
    line-height: 25px;
    font-size: 20px;
    color: #2348a7;
  }
`

const commaPipe = number => {
  if (number != null)
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const Cover = props => {
  let data = props.data
  return (
    <div>
      {data ? (
        <Row>
          <Column col="6">
            <CoverImage
              src={data._embedded['wp:featuredmedia'][0].source_url}
            />
            <ImageOverlay />
            <Title dangerouslySetInnerHTML={{ __html: data.title.rendered }} />
            <Profile>
              <ProfileImage src={data.author_meta.author_pic} />
              <ProfileName />
              <ProfileName>by {data.author_meta.display_name}</ProfileName>
            </Profile>

            <ItemMeta>
              <Slug>Curation</Slug>
              <Number>{data['post-meta-fields'].item_number}</Number>
              <br />
              <Views>
                {commaPipe(data['post-meta-fields'].wpb_post_views_count)}
              </Views>
              <ViewsSlug> views</ViewsSlug>
            </ItemMeta>
          </Column>
          <Column col="6">
            <Box>
              <Excerpt
                dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }}
              />
            </Box>
          </Column>
        </Row>
      ) : (
        'loading'
      )}
    </div>
  )
}

export default Cover
