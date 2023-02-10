import React, { useState } from "react";
import Products from "../JsonData/Products";
import styled from "styled-components";
import Cart from "../Cart/Cart";
import SizeFilter from "../SizeFilter/SizeFilter";

const ProductList = () => {
  const [countItem, setCountItem] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const [sizeFilter, setSizeFilter] = useState([]);

  // Add product into the cart.
  const AddItemHandler = (itmes) => {
    const existingProduct = cartItem.find((product) => product.id === itmes.id);
    existingProduct
      ? setCartItem(
          cartItem.map((product) =>
            product.id === itmes.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          )
        )
      : setCartItem([...cartItem, { ...itmes, quantity: 1 }]);
    setCountItem(countItem + 1);
    setIsOpen(true);
  };

  //Remove product from the cart and set the count.
  const removeFromCart = (data) => {
    setCartItem(cartItem.filter((product) => product.id !== data.id));
    setCountItem(countItem - data.quantity);
  };

  // Increment the product qty.
  const incQtyHandler = (itemsData) => {
    setCartItem(
      cartItem.map((product) =>
        product.id === itemsData.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
    setCountItem(countItem + 1);
  };

  // Decrement the product qty.
  const decQtyHandler = (itemsData) => {
    setCartItem(
      cartItem.map((product) =>
        product.id === itemsData.id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
    setCountItem(countItem - 1);
  };

  return (
    <>
      <ProductCount>{Products.length} Product(s) found</ProductCount>
      <Section>
        {Products.filter(
          (product) => !sizeFilter.length || sizeFilter.includes(product.size)
        ).map((items) => {
          return (
            <Wrapper key={items.id}>
              <ImageTag src={items.img} alt="prodcut_img" />
              {items.shippingTag === "Free shipping" && (
                <Tag>{items.shippingTag}</Tag>
              )}
              <Title>{items.title}</Title>
              <Underlined />
              <PriceTag> ${items.price}</PriceTag>
              <Button onClick={() => AddItemHandler(items)}>Add to cart</Button>
            </Wrapper>
          );
        })}
      </Section>
      <SizeFilter sizeFilter={sizeFilter} setSizeFilter={setSizeFilter} />
      <Cart
        countItem={countItem}
        setCountItem={setCountItem}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cartItem={cartItem}
        removeFromCart={removeFromCart}
        incQtyHandler={incQtyHandler}
        decQtyHandler={decQtyHandler}
      />
    </>
  );
};

const Button = styled.button`
  background-color: rgb(27, 26, 32);
  color: rgb(255, 255, 255);
  font-size: 16px;
  padding: 15px 0px;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  border: 0px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #eabf00;
  }
`;

const ProductCount = styled.div`
  position: absolute;
  top: 32px;
  left: 297px;
`;
const Tag = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  color: rgb(236, 236, 236);
  padding: 5px;
  font-size: 10px;
  background-color: rgb(27, 26, 32);
`;
const Wrapper = styled.div`
  position: relative;
  margin: 20px 7px;
  width: auto;
`;
const ImageTag = styled.img`
  width: 100%;
`;
const Title = styled.div`
  text-align: center;
  padding: 0px 17px;
  margin-top: 10px;
  height: 45px;
`;
const PriceTag = styled.div`
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
`;
const Underlined = styled.div`
  content: "";
  width: 20px;
  height: 2px;
  background-color: rgb(234, 191, 0);
  position: absolute;
  top: 78%;
  left: 50%;
  margin-left: -10px;
`;
const Section = styled.section`
  width: 60%;
  display: grid;
  margin: 50px auto;
  grid-template-columns: repeat(4, 1fr);
`;
export default ProductList;
