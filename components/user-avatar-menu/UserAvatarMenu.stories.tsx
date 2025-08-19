import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UserAvatarMenu from './UserAvatarMenu';

export default {
  title: 'Components/UserAvatarMenu',
  component: UserAvatarMenu,
} as Meta;

const Template: StoryFn<typeof UserAvatarMenu> = (args) => (
  <UserAvatarMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  user: {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'member',
    image: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  handleSignOut: () => alert('Signed out'),
};
