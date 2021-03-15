import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Click to copy',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Click to copy',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Click to copy',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Click to copy',
};
