import React from "react";
import CartIcon from "../Image/CartIcon.png";
import styled from "styled-components";
import CustomScrollbar from "../CustomScrollBar/CustomScrollbar";

const Cart = ({
  countItem,
  isOpen,
  setIsOpen,
  cartItem,
  removeFromCart,
  decQtyHandler,
  incQtyHandler,
}) => {
  // to get the total price of the prodcuts.
  const totaPrice = cartItem.reduce(
    (sum, product) => sum + parseInt(product.price * product.quantity),
    0
  );
  // checkout function.
  const checkoutHandler = () => {
    countItem < 1
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
        <CustomScrollbar>
          {isOpen && (
            <CloseButton onClick={() => setIsOpen(!isOpen)}> X </CloseButton>
          )}

          <InnerContainer>
            <ImgTag isOpen src={CartIcon} alt="cart_img" />
            <CartCount isOpen>{countItem}</CartCount>
            <CartLabel>Cart</CartLabel>
            {countItem < 1 && (
              <>
                <TextMsg>Add some products in the cart</TextMsg>
                <TextMsg msg>:)</TextMsg>
              </>
            )}
          </InnerContainer>
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
                    <QtyTag>Quantity: {data.quantity}</QtyTag>
                  </InfoWrapper>
                </CardWrapper>

                <Wrapper>
                  <DeleteItem onClick={() => removeFromCart(data)}>
                    x
                  </DeleteItem>
                  <PriceTag>${data.price.toFixed(2)}</PriceTag>
                  {/* <PriceTag>${data.price * data.quantity}</PriceTag> */}
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

          <CheckoutCard>
            <TotalWrapper>
              <SubTotalText>subtotal</SubTotalText>
              <TotalPrice>${totaPrice}</TotalPrice>
            </TotalWrapper>
            <CheckoutButton onClick={checkoutHandler}>checkout</CheckoutButton>
          </CheckoutCard>
        </CustomScrollbar>
      </CartContainer>
    </>
  );
};

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
const ImgTag = styled.img`
  width: 25px;
  height: 26px;
  position: absolute;
  left: ${({ isOpen }) => (isOpen ? "215px" : "")};

  @media screen and (max-width: 765px) {
    left: ${({ isOpen }) => (isOpen ? "225px" : "11px")};
  }
`;
const CartLabel = styled.div`
  position: relative;
  top: 3px;
  left: 280px;
  font-size: 18px;
  font-weight: bold;
  @media screen and (max-width: 765px) {
   width: fit-content;
  }
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
const TextMsg = styled.div`
  text-align: center;
  margin-top: 40px;
  /* line-height: ${({ msg }) => (msg ? "5px" : "0")}; */
`;
const ProductImgTag = styled.img`
  position: relative;
  width: ${({ isOpen }) => (isOpen ? "60px" : "")};
`;

const SubTotalText = styled.span`
  text-transform: uppercase;
  color: #afafaf;
`;
const TotalPrice = styled.span`
  font-size: 20px;
  color: #eabf00;
`;

const CartCount = styled.div`
  position: relative;
  right: ${({ isOpen }) => (isOpen ? "-229px" : "-14px")};
  top: ${({ isOpen }) => (isOpen ? "24px" : "25px")};
  width: 18px;
  height: 18px;
  color: rgb(12, 11, 16);
  font-weight: bold;
  font-size: 11px;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: #eabf00;
  @media screen and (max-width: 765px) {
    right: ${({ isOpen }) => (isOpen ? "-239px" : "-14px")};
  }
`;
const CartContainer = styled.div`
  background-color: #1b1a20;
  color: white;
  width: 450px;
  height: 100vh;
  z-index: 2;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? "2px" : "-457px")};
  transition: all 0.2s ease-out;

  @media screen and (max-width: 765px) {
    width: 100%;
    right: ${({ isOpen }) => (isOpen ? "0" : "-770px")};
    display: flex;
    justify-content: center;
  }
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
  @media screen and (max-width: 765px) {
    left: 0;
    z-index: 2;
  }
`;
const InnerContainer = styled.div`
  position: relative;
  margin: 56px auto;
  @media screen and (max-width: 765px) {
    margin: 57px 50px;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid black;

  @media screen and (max-width: 765px) {
    justify-content: space-between;
    padding: 0 12px;
  }
`;
const CardWrapper = styled.div`
  display: flex;
  max-width: 338px;
  width: 100%;
  padding: 12px;
`;
const Wrapper = styled.div`
  display: inline-block;
  line-height: 33px;
  text-align: center;
`;
const DeleteItem = styled.div`
  color: black;
  font-size: 25px;
  cursor: pointer;

  &:hover {
    color: white;
  }
`;
const QtyButtonWrapper = styled.div`
  margin-right: 22px;
`;
const Button = styled.button`
  background-color: black;
  opacity: ${(props) => (props.disabled ? "0.2" : "")};

  color: white;
  padding: 4px 9px;
  border: none;
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  &:focus {
    outline: none;
  }
`;
const CheckoutCard = styled.div`
  box-sizing: border-box;
  padding: 21px;
  position: fixed;
  bottom: 0px;
  max-width: 453px;
  width: 100%;
  height: 200px;
  z-index: 2;
  background-color: #1b1a20;
  box-shadow: 0 -3px 8px rgb(0 0 0 / 26%);

  @media screen and (max-width: 765px) {
    max-width: 766px;
    width: 100%;
  }
`;
const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 6px;
  @media screen and (min-width: 500px) and (max-width:765px) {
    padding: 0 20px;
  }
`;

const InfoWrapper = styled.div`
  margin: 13px;
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
  margin-top: 55px;
  cursor: pointer;
`;

export default Cart;
