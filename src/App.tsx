import React, { useState } from 'react';
import './App.scss';
import {
  AppLayout,
  Box,
  BreadcrumbGroup,
  Button,
  Cards,
  Container,
  Header,
  Link,
  SideNavigation,
  SplitPanel,
  StatusIndicator,
  Tabs,
} from '@cloudscape-design/components';

import './App.scss';

export const navItems = [
  {
    type: 'section',
    text: 'Reports and analytics',
    items: [
      { type: 'link', text: 'Distributions', href: '#/distributions' },
      { type: 'link', text: 'Cache statistics', href: '#/cache' },
      { type: 'link', text: 'Monitoring and alarms', href: '#/monitoring' },
      { type: 'link', text: 'Popular objects', href: '#/popular' },
      { type: 'link', text: 'Top referrers', href: '#/referrers' },
      { type: 'link', text: 'Usage', href: '#/usage' },
      { type: 'link', text: 'Viewers', href: '#/viewers' },
    ],
  },
  {
    type: 'section',
    text: 'Private content',
    items: [
      { type: 'link', text: 'How-to guide', href: '#/howto' },
      { type: 'link', text: 'Origin access identity', href: '#/origin' },
    ],
  },
] as any;

const Navigation = () => {
  return <SideNavigation items={navItems} />;
};

const CustomHeader = () => {
  return <Header>Borrowing Base</Header>;
};

export const CARD_DEFINITIONS = {
  header: (item: any) => (
    <div>
      <Link fontSize="heading-m" href="#">
        {item.id}
      </Link>
    </div>
  ),
  sections: [
    {
      id: 'domainName',
      header: 'Draw Availability',
      content: (item: any) => item.drawAvailability,
    },
    {
      id: 'deliveryMethod',
      header: 'Delivery method',
      content: (item: any) => item.deliveryMethod,
    },
  ],
};

const OverviewContent = () => {
  return (
    <Cards
      items={[{ drawAvailability: '$23123', id: 'Loan#123' }]}
      cardDefinition={CARD_DEFINITIONS}
      variant={'full-page'}
    />
  );
};

const MyContent = () => {
  return (
    <Box margin={{ top: 'm' }}>
      <Tabs
        tabs={[
          {
            label: 'Overview',
            id: 'first',
            content: (
              <Box>
                <Header variant="h2" description="Container description">
                  Overview title
                </Header>
                <OverviewContent />
              </Box>
            ),
          },
          {
            label: 'Collateral',
            id: 'second',
            content: (
              <Container
                header={
                  <Header variant="h2" description="Container description">
                    Collateral title
                  </Header>
                }>
                Container content
              </Container>
            ),
          },
          {
            label: 'Draws',
            id: 'third',
            content: (
              <Container
                header={
                  <Header variant="h2" description="Container description">
                    Draws title
                  </Header>
                }>
                Container content
              </Container>
            ),
          },
        ]}
      />
    </Box>
  );
};

function App() {
  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <>
      <AppLayout
        navigation={<Navigation />}
        disableContentHeaderOverlap={true}
        contentHeader={<CustomHeader />}
        content={<MyContent />}
        breadcrumbs={
          <BreadcrumbGroup
            expandAriaLabel="Show path"
            ariaLabel="Breadcrumbs"
            items={[
              { text: 'Financial Relationships', href: '#/ec2' },
              { text: 'Loan#1234', href: '#/ec2/instance' },
            ]}
          />
        }
        contentType="table"
        headerSelector={'#header'}
      />
    </>
  );
}

export default App;
