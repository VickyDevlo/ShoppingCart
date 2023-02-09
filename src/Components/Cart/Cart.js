import React from "react";
import CartIcon from "../Image/CartIcon.png";
import styled from "styled-components";

const Cart = ({
  countItem,
  isOpen,
  setIsOpen,
  cartItem,
  removeFromCart,
  decQtyHandler,
  incQtyHandler,
}) => {
  const totaPrice = cartItem.reduce(
    (sum, product) => sum + parseInt(product.price * product.quantity),
    0
  );

  const checkoutHandler = () => {
    countItem === 0
      ? alert("Add some products in the cart")
      : alert("Checkout - Subtotal:  $" + totaPrice);
  };
  return (
    <>
      <CartWrapper onClick={() => setIsOpen(!isOpen)}>
        <ImgTag src={CartIcon} alt="cart_img" />
        <CartCount>{countItem}</CartCount>
      </CartWrapper>
      <CartContainer isOpen={isOpen}>
        {isOpen && (
          <CloseButton onClick={() => setIsOpen(!isOpen)}> X </CloseButton>
        )}
        <InnerContainer>
          <ImgTag src={CartIcon} alt="cart_img" />
          <CartCount isOpen>{countItem}</CartCount>
          <CartLabel>Cart</CartLabel>
        </InnerContainer>
        {countItem === 0 && (
          <>
            <TextMsg>Add some products in the cart</TextMsg>
            <TextMsg msg>:)</TextMsg>
          </>
        )}
        <div
          style={{
            position: "relative",
            minHeight: "280px",
            paddingBottom: "200px",
          }}
        >
          {cartItem.map((data, index) => {
            return (
              <Container key={index}>
                <CardWrapper>
                  <ProductImgTag isOpen src={data.img} alt="product_img" />
                  <InfoWrapper>
                    <TitleTag>{data.title}</TitleTag>
                    <SizeTag>
                      {data.size} {data.label}
                    </SizeTag>
                    <QtyTag>Quantity:{data.quantity}</QtyTag>
                  </InfoWrapper>
                </CardWrapper>

                <Wrapper>
                  <DeleteItem onClick={() => removeFromCart(data)}>
                    x
                  </DeleteItem>
                  <PriceTag>${data.price * data.quantity}</PriceTag>
                  <QtyButtonWrapper>
                    <Button
                      disabled={data.quantity === 1}
                      onClick={() => decQtyHandler(data)}
                    >
                      -
                    </Button>
                    <Button onClick={() => incQtyHandler(data)}> +</Button>
                  </QtyButtonWrapper>
                </Wrapper>
              </Container>
            );
          })}

          <Card>
            <TotalWrapper>
              <SubTotalText>subtotal</SubTotalText>
              <TotalPrice>${totaPrice}</TotalPrice>
            </TotalWrapper>
            <CheckoutButton onClick={checkoutHandler}>checkout</CheckoutButton>
          </Card>
        </div>
      </CartContainer>
    </>
  );
};
const Card = styled.div`
  box-sizing: border-box;
  padding: 21px;
  position: fixed;
  bottom: 0px;
  max-width: 450px;
  width: 100%;
  height: 200px;
  z-index: 2;
  background-color: #1b1a20;
  box-shadow: 0 -3px 8px rgb(0 0 0 / 26%);
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;
`;
const CartWrapper = styled.div`
  background-color: #1b1a20;
  padding: 11px;
  width: 30px;
  height: 25px;
  position: fixed;
  right: 0;
  top: 0;
  cursor: pointer;
`;
const CardWrapper = styled.div`
  display: flex;
  max-width: 338px;
  width: 100%;
  padding: 12px;
`;
const CartCount = styled.div`
  position: absolute;
  right: ${({ isOpen }) => (isOpen ? "201px" : "8px")};
  top: ${({ isOpen }) => (isOpen ? "82px" : "33px")};
  width: 18px;
  height: 18px;
  color: rgb(12, 11, 16);
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: #eabf00;
`;
const CartContainer = styled.div`
  background-color: #1b1a20;
  color: white;
  width: 450px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "0" : "-450px")};
  transition: all 0.2s ease-out;
  z-index: 2;
`;
const InnerContainer = styled.div`
  width: fit-content;
  margin: 60px auto;
`;
const InfoWrapper = styled.div`
  margin: 13px;
`;

const ImgTag = styled.img`
  position: relative;
  width: 25px;
  height: 26px;
`;
const ProductImgTag = styled.img`
  position: relative;
  width: ${({ isOpen }) => (isOpen ? "60px" : "")};
`;
const TitleTag = styled.div`
  color: white;
`;
const SizeTag = styled.div`
  color: #5b5a5e;
`;
const QtyTag = styled.div`
  color: #5b5a5e;
`;
const PriceTag = styled.div`
  margin-right: 20px;
  color: #eabf00;
`;

const DeleteItem = styled.div`
  color: black;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
const Wrapper = styled.div`
  display: inline-block;
  line-height: 33px;
  text-align: center;
`;
const QtyButtonWrapper = styled.div`
  margin-right: 22px;
`;
const Button = styled.button`
  background-color: black;
  opacity: ${(props) => (props.disabled ? "0.2" : "")};
  color: white;
  color: white;
  padding: 4px 9px;
  border: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  &:focus {
    outline: none;
  }
`;
const CartLabel = styled.div`
  position: absolute;
  top: 62px;
  right: 146px;
  font-size: 18px;
  font-weight: bold;
`;
const TextMsg = styled.div`
  text-align: center;
  line-height: ${({ msg }) => (msg ? "80px" : "0")};
`;
const SubTotalText = styled.span`
  text-transform: uppercase;
  color: #afafaf;
`;

const CloseButton = styled.button`
  position: absolute;
  left: -49px;
  background-color: #1b1a20;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  font-size: medium;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;
const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CheckoutButton = styled.div`
  width: 100%;
  border: 0px;
  color: rgb(236, 236, 236);
  background-color: rgb(12, 11, 16);
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
  padding: 15px 0px;
  margin-top: 92px;
  cursor: pointer;
`;
const TotalPrice = styled.span`
  font-size: 20px;
  color: #eabf00;
`;
export default Cart;
