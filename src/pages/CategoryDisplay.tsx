import React from "react";
import { categoryNames, Product } from "../types/Types";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ContextApi";
import styled from "styled-components";
import { Pen } from "lucide-react";
import ProductCard from "../components/ProductCard";

const Main = styled.main`
  position: relative;
  min-height: 100dvh;
  min-width: 100dvw;
  display: flex;
  justify-content: center;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: url('images/top-meat.svg');
    background-size: 16.7%;
    background-repeat: repeat;
    z-index: -2;
    /* z-index: 2; */
  }

  &::after {
    content: "";
    position: absolute;
    /* border-radius: .7rem; */
    inset: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`;

const MainInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: #f8f8ffe4;
  min-height: 100dvh;
  width: 70%;
  border-radius: .7rem;
  font-family: var(--font-quick);
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px); 
`;

const Title = styled.h1`
  text-transform: uppercase;
  padding: 1rem;
`;

const SubtitleSection = styled.section`
  display: flex;
  width: 80%;
  justify-content: space-around;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  /* border: 1px solid red; */
`;

export const Cell = styled.div`
  display: flex;
  justify-content: space-between;
  border: .1px solid black;
  padding: .5rem;
  width: 80%;
  border-radius: .3rem;
  margin-bottom: .2rem;
  transition: all 1s;

  &:hover {
    cursor: pointer;
    height: 13%;
    transition: all 1s;
  }

  & > :nth-child(1) {
    font-size: 1rem;
    font-weight: 700;
  }

  & > :nth-child(2) {
    font-size: 1rem;
    font-weight: 500;
  }
`;

const CategoryDisplay = () => {

  const [filteredProducts, setFilteredProducts] = React.useState<Product[]>([]);
  const [preparedName, setPreparedName] = React.useState<string | undefined>('');
  const category = useParams();
  const { products } = useProductContext();

  React.useEffect(() => {
    const prepareName = category.category && categoryNames[category.category];
    setPreparedName(prepareName);
  }, [category]);

  React.useEffect(() => {
    const prepareProductList = async () => {
      const produtosFiltrados = products.filter(
        (produto) => produto.category === category.category
      );
      setFilteredProducts(produtosFiltrados);
    };

    prepareProductList();
  }, []);

  return (
    <Main>
      <MainInfo>
        <Title>
          {preparedName}
        </Title>
        <SubtitleSection>
          <Subtitle>Nome</Subtitle>
          <Subtitle>Validade</Subtitle>
        </SubtitleSection>

        {filteredProducts.map(product => (
            <Cell key={product.id}>
              <span>{product.name}</span>
              <span>{product.expDate.join(" | ")}</span>
            </Cell>
          ))}
      </MainInfo>
    </Main>
  )
}

export default CategoryDisplay