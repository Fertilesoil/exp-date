import { useNavigate } from "react-router-dom";
import { Divisor, Header, HeaderTitle, MainBox, ProductButton } from "../src/components/Home"
import { categoryNames } from "./types/Types";

function App() {

  const navigate = useNavigate();

  return (
    <MainBox>
      <Header>
        <HeaderTitle>Agenda de Validade Açougue Loja 16</HeaderTitle>
      </Header>
      <Divisor>
        {Object.entries(categoryNames).map((option, index) => {
          const nameRoute = option.slice()[0];
          const buttonTitle = option.slice(1);
          return <ProductButton key={index} $image={nameRoute} onClick={() => navigate(`/${nameRoute}`)}>{buttonTitle}</ProductButton>
        })}
      </Divisor>
    </MainBox>
  )
}

export default App
