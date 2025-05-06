import styled from "styled-components";

interface ProductButtonProps {
  image: string;
};

const Header = styled.header`
  display: flex;
  position: relative;
  align-items: center;
  background-color: #860b02d1;
  border-radius: .7rem;
  box-shadow:
  0 1.4px 1.1px rgba(0, 0, 0, 0.025),
  0 3.3px 2.6px rgba(0, 0, 0, 0.035),
  0 6.3px 5px rgba(0, 0, 0, 0.045),
  0 11.1px 8.9px rgba(0, 0, 0, 0.055),
  0 20.9px 16.7px rgba(0, 0, 0, 0.065),
  0 5px 40px rgba(0, 0, 0, 0.08);
  width: 81%;
  margin-top: -4rem;
  margin-bottom: 5rem;
  height: 20dvh;
  padding-inline-start: 2rem;
  padding-inline-end: 2rem;

  &::after {
    content: "";
    position: absolute;
    border-radius: .7rem;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: -1;
  }
`;

const HeaderTitle = styled.h1`
  text-align: center;
  font-weight: 700;
  font-size: 2.3rem;
  padding: 1.4rem;
  border-radius: .7rem;
  border: 6px solid #f5fffa;
  color: #f5fffa;
  flex: 1;
  font-family: var(--font-quick);
`;

const Divisor = styled.div`
  /* margin-top: 5rem; */
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: #f8f8ff;
`;

const MainBox = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100dvh;
  flex-direction: column;
  gap: 2rem;
`;

const ProductButton = styled.button<ProductButtonProps>`
  position: relative;
  font-size: 2.2rem;
  font-family: var(--font-inter);
  letter-spacing: .3rem;
  font-weight: 600;
  background: #a3c9a7;
  background-position: center 20%;
  color: #f5fffa;
  padding: .7rem;
  width: 20rem;
  height: 15rem;
  border-radius: .7rem;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .3);
  transition: all .24s ease-in-out;
  z-index: 0;

  &:hover {
    cursor: pointer;
    width: 23rem;
    transition: all .24s ease-in-out;
  }

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: .7rem;
    background-image: ${({ $image }) => {
    switch ($image) {
      case 'salgado':
        return `url('images/salgado.jpg')`;
      case 'vacuo':
        return `url('images/vacuo.jpg')`;
      case 'congelado':
        return `url('https://www.auroraalimentos.com.br/wp-content/uploads/2022/05/Banner-01-Mix.jpeg')`;
    }
  }};
    background-size: cover;
    /* background-position: center; */
    filter: blur(.02rem) brightness(0.9) saturate(1.1);
    object-fit: cover;
    z-index: -2;
    transition: all 0.3s ease-in-out;
  }

  &::after {
    content: "";
    position: absolute;
    border-radius: .7rem;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: -1;
  }
`;

export {
  MainBox, ProductButton, Header, HeaderTitle, Divisor
};