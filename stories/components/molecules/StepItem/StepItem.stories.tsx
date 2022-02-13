import { ComponentMeta, Story } from '@storybook/react';

import StepItem, {
  StepItemProps,
} from '../../../../components/molecules/StepItem';

export default {
  title: 'Components/Molecules/StepItem',
  component: StepItem,
} as ComponentMeta<typeof StepItem>;

const Template: Story<StepItemProps> = (args) => <StepItem {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: 'step1',
  title: 'Step 1',
  description1: 'Pilih salah satu game',
  description2: 'Yang ingin kamu mainkan',
};
