import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import React from 'react';

export const parameters = { layout: 'fullscreen' };

function ThemeWrapper(props: { children: React.ReactNode }) {
  return (
    <MantineProvider>
      {props.children}
      <Notifications />
    </MantineProvider>
  );
}

export const decorators = [(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>];
