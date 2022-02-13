import { Meta, Story } from '@storybook/react';

import GameItem, {
  GameItemProps,
} from '../../../../components/molecules/GameItem';

export default {
  title: 'Components/Molecules/GameItem',
  component: GameItem,
} as Meta;

const Template: Story<GameItemProps> = (args) => <GameItem {...args} />;

export const Default = Template.bind({});

const args: GameItemProps = {
  title: 'Super Mecha Fighter',
  category: 'Action',
  thumbnail: '/img/Thumbnail-1.png',
};

Default.args = args;
