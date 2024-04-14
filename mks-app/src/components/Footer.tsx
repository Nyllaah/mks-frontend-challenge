import styled from "styled-components";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterText>
        MKS Sistemas © Todos os direitos reservados
      </FooterText>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  height: 34px;
  width: 100vw;
  background-color: #EEEEEE;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.span`
text-align: center;`;