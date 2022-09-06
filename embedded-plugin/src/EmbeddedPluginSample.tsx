import {
  EmbeddedPluginProps, useCurrentUser, usePluginSettings
} from '@reach/core';
import { FC } from 'react';
import styled from 'styled-components';

export const EmbeddedPluginSample: FC<EmbeddedPluginProps> = ({
  isEditMode,
  pluginId,
  componentName,
  componentInstanceId,
}) => {
  const { greetingLabel } = usePluginSettings<{ greetingLabel: string }>();
  const user = useCurrentUser();

  return (
    <Host>
      <Container>
        {isEditMode && (
         <div>Hey, I'm in edit mode!</div>
        )}
        <Title>
          {greetingLabel || 'Welcome,'} {user.displayName}!
        </Title>
      </Container>
    </Host>
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