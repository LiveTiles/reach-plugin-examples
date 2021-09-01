import React, { FC } from 'react';
import styled from 'styled-components';
import { useCurrentUser } from '@reach/core';
import { Page } from '@reach/chrome';
import { NewsList } from '@livetiles/reach-components-react';
import { usePluginSettings } from '@reach/core';

export const HelloWorld: FC = () => {
  const { greetingLabel } = usePluginSettings<{ greetingLabel: string }>();
  const user = useCurrentUser();
  return (
    <Page title="Hello World">
      <Host>
        <Container>
          <Title>
            {greetingLabel || 'Welcome,'} {user.displayName}!
          </Title>
          <SubTitle>Party News</SubTitle>
          <NewsList />
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

const SubTitle = styled.h2`
  flex: 1;
  margin-bottom: 10px;
`;
