import styled from "styled-components";

import { ActionButton } from "../../../components/buttons/action-button/action-button";
import { UiProps } from "../@types/ui.props";

export const LoginViewDesktop = ({ loginWithGmail, loginWithFacebook }: UiProps) => {
  return (
    <Container>
      <Wrapper>
        <ActionButton
          label='Login with Gmail'
          buttonType='warning'
          clickHandler={loginWithGmail}
        />
        <ActionButton
          label='Login with Facebook'
          buttonType='warning'
          clickHandler={loginWithFacebook}
        />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: lime;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
