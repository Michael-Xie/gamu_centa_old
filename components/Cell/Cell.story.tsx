import type { Meta, StoryObj } from '@storybook/react';

import { Cell } from './Cell';

const meta: Meta<typeof Cell> = {
  component: Cell,
};

export default meta;
type Story = StoryObj<typeof Cell>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  name: 'I am the primary',
  render: () => <Cell isSelected={true} onClick={() => console.log('click')} />,
};
