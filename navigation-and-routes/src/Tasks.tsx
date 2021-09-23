import React, { FC } from "react";
import styled from "styled-components";
import { useCurrentUser } from "@reach/core";
import { Page } from "@reach/chrome";
import { NewsList } from "@livetiles/reach-components-react";
import { usePluginSettings } from "@reach/core";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { NavLinkSidebarItem } from "@reach/chrome";

export const TaskRoutes: FC = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.url + "/pending"} component={PendingTasksPage} />
      <Route path={match.url + "/completed"} component={CompletedTasksPage} />
      <Redirect path={match.url} exact={true} to={match.url + "/pending"} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

const PendingTasksPage: FC = () => {
  return (
    <Page title="Pending Tasks" submenuContents={<Menu />}>
      <Host>
        <Container>
          <Title>Open Tasks</Title>
          <SubTitle>All the work I still have to do</SubTitle>
        </Container>
      </Host>
    </Page>
  );
};

const CompletedTasksPage: FC = () => {
  return (
    <Page title="Completed Tasks" submenuContents={<Menu />}>
      <Host>
        <Container>
          <Title>Completed Tasks</Title>
          <SubTitle>
            All these tasks have already been completed. Yeah! 🎉
          </SubTitle>
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
        route={`/${handle}/${pluginRoute}/pending`}
        title="Pending Tasks"
        iconName="BulletedList2"
      />
      <NavLinkSidebarItem
        route={`/${handle}/${pluginRoute}/completed`}
        title="Completed Tasks"
        iconName="Accept"
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
