import React, { FC } from "react";
import styled from "styled-components";
import { useCurrentUser } from "@reach/core";
import { Page } from "@reach/chrome";
import { NewsList } from "@livetiles/reach-components-react";
import { usePluginSettings } from "@reach/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { NavLinkSidebarItem } from "@reach/chrome";

export const Routes: FC = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.url + "/knights"} component={KnightsPage} />
      <Route path={match.url + "/wizards"} component={WizardsPage} />
      <Route path={match.url} exact={true} component={DefaultPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const DefaultPage: FC = () => {
  const { greetingLabel } = usePluginSettings<{ greetingLabel: string }>();
  const user = useCurrentUser();
  return (
    <Page title="Hello World" submenuContents={<Menu />}>
      <Host>
        <Container>
          <Title>
            {greetingLabel || "Welcome,"} {user.displayName}!
          </Title>
          <SubTitle>Kindom News</SubTitle>
          <NewsList />
        </Container>
      </Host>
    </Page>
  );
};

const KnightsPage: FC = () => {
  return (
    <Page title="Knights" submenuContents={<Menu />}>
      <Host>
        <Container>
          <Title>Knights</Title>
          <SubTitle>Stuff about the nights and other thugs</SubTitle>
        </Container>
      </Host>
    </Page>
  );
};

const WizardsPage: FC = () => {
  return (
    <Page title="Wizards" submenuContents={<Menu />}>
      <Host>
        <Container>
          <Title>Wizards</Title>
          <SubTitle>All you need to know about the mighty wizards</SubTitle>
        </Container>
      </Host>
    </Page>
  );
};

const Menu: FC = ({}) => {
  // This will be improved in the future.
  // There will be a helper function exported from @reach/core that
  // helps to build the correct base path.
  const match = useRouteMatch();
  const handle = match.path.split("/")[1];
  const pluginRoute = match.path.split("/")[2];

  return (
    <div>
      <NavLinkSidebarItem
        route={`/${handle}/${pluginRoute}/knights`}
        title="Knights"
        iconName="DefenderApp"
      />
      <NavLinkSidebarItem
        route={`/${handle}/${pluginRoute}/wizards`}
        title="Wizards"
        iconName="AutoEnhanceOn"
      />
    </div>
  );
};

const NotFoundPage: FC = () => {
  return (
    <Page title="Not found">
      <Title>404 Page Not Found</Title>
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
