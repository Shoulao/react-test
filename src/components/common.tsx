import styled from "@emotion/styled";

const ContainerFluid = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageTitle = styled.h1`
  font-weight: bold;
`;

export { Container, ContainerFluid, PageTitle };
