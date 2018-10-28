/**
 *
 * ProductSummary
 *
 */

import React from 'react'
import { compose, lifecycle, withHandlers, withState } from 'recompose'
import { log } from 'ruucm-util'
import { map } from 'lodash'
import styled, { css } from 'styled-components'
import Select from 'react-select'

import { EmptySpace } from 'ruucm-blocks/layouts'
import { DesktopOnly, MobileOnly } from 'ruucm-blocks/css-patterns/hide'
import { wem, center, wem2 } from 'ruucm-blocks/tools/mixins'
import media, { isMobile } from 'ruucm-blocks/tools/media'

const View = styled.div`
  position: relative;
  min-height: 72px;
`

const Wrapper = styled.div`
position:absolute;
right: 0;
display:inline-block;
  /* padding: 15px;
  ${media.tablet`
    box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.3);
  `}; */
`
const MainImg = styled.img`
  /* 아래값은 지우고 작업 */
  /* width: 100px; */
`

const Right = styled.div`
  margin-right: ${wem2(240)};
  margin-left: ${wem2(48)};
  max-width: ${wem2(384)};
  padding-top: 80px;
  /* padding: 15px;
  ${media.tablet`
    box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.3);
  `}; */
`
const Label = styled.div`
  color: #918f8f;
  padding-bottom: 24px;
  font-size:14px;
  line-height:14px;
  /* font-family: NanumBarunGothicWeb;
  font-size: ${wem(14)};
  line-height: 2.29;
  color: #786969;
  ${media.tablet`
    display: block;
    font-size: 11px;
  `}; */
`
const Title = styled.h1`
  font-size: 28px;
  padding-bottom: 32px;
`

const Price = styled.div`
  font-size: 28px;
  font-weight: 500;
  .ins {
    background-color: burlywood;
  }
`

const MinusBox = styled.div`
  width: ${wem2(48)};
  height: ${wem2(48)};
  border-radius: 2px;
  border: solid 1px #533c97;
  background-color: #ffffff;
  display: inline-block;
  position: relative;
  cursor: pointer;
  :hover {
    background-color: #533c97;
    color: #ffffff;
  }
`
const Minus = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Number = styled.div`
  width: ${wem2(48)};
  height: ${wem2(48)};
  display: inline-block;
  margin-left: ${wem2(-1)};
`
const PlusBox = styled.div`
  width: ${wem2(48)};
  height: ${wem2(48)};
  border-radius: 2px;
  border: solid 1px #533c97;
  background-color: #ffffff;
  display: inline-block;
  margin-left: ${wem2(-2)};
  color: #533c97;
  position: relative;
  cursor: pointer;
  :hover {
    background-color: #533c97;
    color: #ffffff;
  }
`
const Plus = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const Quantity = styled.input`
  width: ${wem2(48)};
  height: ${wem2(48)};
  background-color: #805de9;
  color: white;
  border: 0;
  padding: 0;
  position: absolute;
  text-align: center;
  font-size: ${wem2(16)};
  z-index: 100;
`

const OrderButton = styled.a`
  margin-left: ${wem2(16)};
  width: ${wem2(226)};
  height: ${wem2(48)};
  border-radius: 2px;
  background-color: #805de9;
  display: inline-block;
  position: relative;
`
const OrderCenter = styled.div`
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;
  position: absolute;
`
const Cart = styled.div`
  font-size: ${wem2(20)};
  color: #ffffff;
  display: inline-block;
  vertical-align: middle;
`
const Order = styled.div`
  font-size: ${wem2(14)};
  color: white;
  margin-left: ${wem2(10)};
  display: inline-block;
`

const ArtistBox = styled.div`
  margin-top: 96px;
  position: relative;
  width: ${wem2(384)};
  height: ${wem2(72)};
  border-radius: 2px;
  border: solid 1px #533c97;
`
const Mask = styled.img`
  width: ${wem2(72)};
  height: ${wem2(70)};
  border-radius: 2px;
  /* background-color: beige; */
  display: inline-block;
`

const Artist = styled.div`
  position: absolute;
  display: inline-block;
  margin-top: ${wem2(11)};
  margin-left: ${wem2(12)};
  font-size: ${wem2(13)};
  color: #533c97;
  font-weight: 500;
`
const More = styled.div`
  position: absolute;
  right: 0;
  margin-top: ${wem2(12)};
  margin-right: ${wem2(12)};
  display: inline-block;
  height: 11px;
  font-size: ${wem2(11)};
  color: #805de9;
  cursor: pointer;
`

const Text = styled.span`
  display: inline-block;
  position: absolute;
  margin-top: ${wem2(30)};
  margin-left: ${wem2(12)};
  margin-right: ${wem2(12)};
  font-size: ${wem2(11)};
  line-height: 1.55;
  color: #231f20;
`

const LoadingText = styled.h1`
  /* font-family: NanumBarunGothicWeb;
  font-size: ${wem(14)};
  line-height: 1;
  color: #6a6a6a;
  text-align: center;
  margin-top: ${wem(30)}; */
`

// Mobile
const OrderButtonCloser = styled.div`
  /* background: white;
  width: 100px;
  text-align: center;
  top: -20px;
  height: 20px;
  ${center('x')};
  box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px 4px 0 0;
  span {
    font-size: 20px;
    transform: rotate(90deg);
    display: inline-block;
    color: #ec943f;
    ${props =>
      props.optionOpened &&
      css`
        transform: rotate(270deg);
      `};
  } */
`
const OptionBox = styled.div``

const dot = (color = '#ccc') => ({
  alignItems: 'center',
  display: 'flex',
  ':before': {
    backgroundColor: color,
    borderRadius: 10,
    content: ' ',
    display: 'block',
    marginRight: 8,
    height: 10,
    width: 10,
  },
})

const colourStyles = {
  container: styles => ({
    ...styles,
    width: isMobile() ? '100%' : wem(150),
    marginBottom: isMobile() ? '30px' : '',
    display: 'inline-block',
    float: 'right',
  }),
  control: styles => ({
    ...styles,
    backgroundColor: 'white',
    minHeight: isMobile() ? '45px' : wem(42),
    height: isMobile() ? '45px' : wem(42),
  }),

  input: styles => ({ ...styles, ...dot(), fontSize: wem(14), color: 'red' }),
  placeholder: styles => ({ ...styles, ...dot(), color: 'green' }),
  singleValue: (styles, { data }) => ({
    ...styles,
    fontSize: isMobile() ? '14px' : wem(12),
    lineHeight: isMobile() ? '45px' : wem(42),
  }),
}

const ProductSummary = ({
  selectedOption,
  optionOpened,
  setOptionOpened,
  quantity,
  setQuantity,
  //handlers
  orderButtonClicked,
  optionSelected,
  optionHasValue,
  getCheckoutHref,
  openOption,
  ...props
}) => {
  let contents = props[props.dataType + '_' + props.category]
  let productOptions

  if (contents) {
    productOptions = map(contents.variations, (item, id) => ({
      label: contents.attributes[0].options[id],
      value: item,
    }))
  }

  return contents ? (
    <View>
      <Wrapper>
        {/* <MainImg src={contents.images[0].src} /> */}

        {/* Desktop */}
        <Right>
          <DesktopOnly>
            <Label>
              모양도 색깔도 제각각인 세상의 모든 나뭇잎을 만나보아요!
            </Label>
            <Title
              dangerouslySetInnerHTML={{
                __html: contents.name,
              }}
            />
            <Price
              dangerouslySetInnerHTML={{
                __html: contents.price_html,
              }}
            />
            {productOptions.length > 1 ? (
              <div>
                <EmptySpace height={wem(30)} />
                <Select
                  value={selectedOption}
                  onChange={optionSelected}
                  options={productOptions}
                  styles={colourStyles}
                />
              </div>
            ) : (
              ''
            )}
            <EmptySpace height="32" />
            <MinusBox
              onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1)
                else alert('상품의 최소 수량은 한개 입니다.')
              }}
            >
              <Minus>-</Minus>
            </MinusBox>
            <Number>
              <Quantity
                value={quantity}
                // onChange={e => setQuantity(e.target.value)}
              />
            </Number>
            <PlusBox onClick={() => setQuantity(quantity + 1)}>
              <Plus>+</Plus>
            </PlusBox>

            <OrderButton
              href={getCheckoutHref()}
              onClick={() => orderButtonClicked(selectedOption)}
            >
              <OrderCenter>
                <Cart className="hellogorilla hellogorilla-cart" />
                <Order>카트에 담기</Order>
              </OrderCenter>
            </OrderButton>

            <ArtistBox>
              <Mask src={contents.images[0].src} />

              <Artist>김나무</Artist>
              <More>More ></More>
              <Text>
                우리 주변 사물을 재해석하여 나무로 위트있게 표현합니다. 포근한
                색감이 특징이며, 국내외에서 활발하게 활동중입니다.
              </Text>
            </ArtistBox>
          </DesktopOnly>
        </Right>

        {/* Mobile */}
        {/* <MobileOnly>
        <OrderButtonCloser onClick={openOption} optionOpened={optionOpened}>
          <span className="beerspick beerspick-keyboard_arrow_left" />
        </OrderButtonCloser>
        {optionOpened ? (
          <OptionBox>
            <Title
              dangerouslySetInnerHTML={{
                __html: contents.name,
              }}
            />
            <Label>판매 가격</Label>
            <Price
              dangerouslySetInnerHTML={{
                __html: contents.price_html,
              }}
            />
            <EmptySpace height={wem(30)} />
            {productOptions.length > 1 ? (
              <div>
                <Label>옵션</Label>
                <Select
                  value={selectedOption}
                  onChange={optionSelected}
                  options={productOptions}
                  styles={colourStyles}
                />
              </div>
            ) : (
              ''
            )}
            <EmptySpace height={wem(30)} />
            <Label>수량</Label>
            <Quantity
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />

            <EmptySpace height="200" />
            <OrderButton
              href={getCheckoutHref()}
              onClick={() => orderButtonClicked(selectedOption)}
            >
              바로주문
            </OrderButton>
          </OptionBox>
        ) : (
          ''
        )}
        {optionOpened ? (
          ''
        ) : (
          <OrderButton onClick={openOption}>주문하기</OrderButton>
        )}
      </MobileOnly> */}
      </Wrapper>
    </View>
  ) : (
    <LoadingText>로딩중..</LoadingText>
  )
}

// Component enhancer
const enhance = compose(
  withState('selectedOption', 'setSelectedOption', {
    value: 0,
    label: '옵션을 선택해주세요',
  }),
  withState('quantity', 'setQuantity', 1),
  withState('optionOpened', 'setOptionOpened', false),
  withHandlers({
    isVariableProduct: props => () => {
      let contents = props[props.dataType + '_' + props.category]
      log('contents.variations', contents.variations)
      return contents.variations ? contents.variations.length != 0 : false
    },
  }),
  withHandlers({
    optionHasValue: props => () => {
      return props.selectedOption.value && props.isVariableProduct()
    },
  }),
  withHandlers({
    orderButtonClicked: props => selectedOption => {
      if (props.isVariableProduct() && !props.optionHasValue())
        alert('옵션 선택은 필수 입니다')
    },
    getCheckoutHref: props => () => {
      let contents = props[props.dataType + '_' + props.category]
      if (props.isVariableProduct()) {
        return props.optionHasValue()
          ? '/cart/?add-to-cart=' +
              props.selectedOption.value +
              '&quantity=' +
              props.quantity
          : '#'
      } else
        return (
          '/cart/?add-to-cart=' + contents.id + '&quantity=' + props.quantity
        ) // Simple Product
    },
    openOption: props => () => {
      props.setOptionOpened(!props.optionOpened)
    },
    optionSelected: props => selectedOption => {
      props.setSelectedOption(selectedOption)
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getProducts
        ? this.props.getProducts({ productId: this.props.productId })
        : void 0 // don't run in builder
    },
  })
)
export default enhance(ProductSummary)
