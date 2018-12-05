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
import LoadingSpinner from '../../../shared/LoadingSpinner'

const Wrap = styled.div`
  position: relative;
  min-height: 72px;
`

const Wrapper = styled.div`
position:absolute;
right: 0;
display:inline-block;
  /* ${media.tablet`
    box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.3);
  `}; */
`
const MainImg = styled.img``

const Right = styled.div`
  margin-right: ${wem2(240)};
  margin-left: ${wem2(48)};
  max-width: ${wem2(384)};
  padding-top: 80px;
`
const Label = styled.div`
  color: #918f8f;
  padding-bottom: 24px;
  font-size: 14px;
  line-height: 14px;

  ${media.tablet`
    margin-top: 30px;
    padding-bottom: 0;
  `};
`
const Title = styled.h1`
  font-size: 28px;
`

const Price = styled.div`
  margin-top: ${wem2(32)};
  font-size: ${wem2(28)};
  color: #231f20;
  display: block;
  font-weight: 400;
  del {
    margin-top: ${wem2(32)};
    font-family: 'Lato', sans-serif;
    font-size: ${wem2(20)};
    color: #b7b5b6;
    display: block;
    font-weight: 300;
  }
  ins {
    margin-top: ${wem2(12)};
    font-size: ${wem2(28)};
    color: #533c97;
    display: block;
    text-decoration: none;
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
  cursor: pointer;
  ${media.tablet`
    height: 50px;
    line-height: 50px;
    font-size: 16px;

    margin: 0;
    width: 100%;
    text-align: center;
    color: white;
  `};
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
  height: 100%;
  display: inline-block;
  object-fit: cover;
`

const Artist = styled.div`
  position: absolute;
  display: inline-block;
  margin-top: ${wem2(11)};
  margin-left: ${wem2(12)};
  font-size: ${wem2(13)};
  color: #533c97;
  font-weight: 700;
`
const More = styled.a`
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
const FixedModal = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;
  background: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px -2px 2px 0px;
  padding: 15px;
`
const OrderButtonCloser = styled.div`
  background: white;
  width: 100px;
  text-align: center;
  top: -20px;
  height: 20px;
  ${center('x')};
  box-shadow: 0 -2px 2px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px 4px 0 0;
  span {
    font-size: 10px;
    display: inline-block;
    &:before {
      color: #533c97;
    }
    ${props =>
      props.optionOpened &&
      css`
        transform: rotate(180deg);
      `};
  }
`
const OptionBox = styled.div``

const SoldOut = styled.div`
  display: none;
  position: absolute;
  width: ${wem2(240)};
  height: ${wem2(240)};
  background-color: rgba(83, 60, 151, 0.8);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  ${props =>
    props.show &&
    css`
      display: block;
    `};
`
const SoldOutLabel = styled.div`
  line-height: 1.14;
  font-size: 28px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

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
    <Wrap>
      <Wrapper>
        {/* <MainImg src={contents.images[0].src} /> */}

        {/* Desktop */}
        <Right>
          <DesktopOnly>
            <Label
              dangerouslySetInnerHTML={{
                __html: contents.short_description,
              }}
            />

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
              // href={getCheckoutHref()}
              onClick={() => orderButtonClicked(selectedOption)}
            >
              <OrderCenter>
                <Cart className="hellogorilla hellogorilla-icon-cart-61" />
                <Order>카트에 담기</Order>
              </OrderCenter>
            </OrderButton>

            <ArtistBox>
              <Mask
                src={
                  contents.vendor_img_profile
                    ? contents.vendor_img_profile
                    : require('../../assets/default-user-img.jpg')
                }
              />
              <Artist>{contents.vendor_nickname}</Artist>
              <More href={'/user-profile/?id=' + contents.vendor_id}>
                More >
              </More>
              <Text>{contents.vendor_short_desc}</Text>
            </ArtistBox>
          </DesktopOnly>
        </Right>

        {/* Mobile */}
        <MobileOnly>
          <FixedModal>
            <OrderButtonCloser onClick={openOption} optionOpened={optionOpened}>
              <span className="hellogorilla hellogorilla-arrow-dropdown-selected" />
            </OrderButtonCloser>
            <OptionBox>
              {optionOpened ? (
                <div>
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
                  <EmptySpace height="100" />
                  <OrderButton
                    // href={getCheckoutHref()}
                    onClick={() => orderButtonClicked(selectedOption)}
                  >
                    카트에 담기
                  </OrderButton>
                </div>
              ) : (
                <OrderButton onClick={openOption}>카트에 담기</OrderButton>
              )}
            </OptionBox>
          </FixedModal>
        </MobileOnly>
      </Wrapper>
    </Wrap>
  ) : (
    <LoadingSpinner />
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
    orderButtonClicked: ({
      addToCart,
      quantity,
      ...props
    }) => selectedOption => {
      let contents = props[props.dataType + '_' + props.category]
      if (props.isVariableProduct() && !props.optionHasValue())
        alert('옵션 선택은 필수 입니다')
      else addToCart(contents.id, quantity)
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
