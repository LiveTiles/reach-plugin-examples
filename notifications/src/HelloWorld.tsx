import React, { FC } from "react";
import styled from "styled-components";
import { Page } from "@reach/chrome";

export const HelloWorld: FC = () => {
  return (
    <Page title="Hello World">
      <Host>
        <Container>
          <Title>Welcome!</Title>
        </Container>
      </Host>
    </Page>
  );
};

const Host = styled.div``;

const Container = styled.div`
  display: flex;
  max-width: 800px;
  margin: 0 auto;
  flex-direction: column;
`;

const Title = styled.h1`
  flex: 1;
  margin-bottom: 10px;
`;
