import { IconButton } from '@components/icon-button';
import { LoaderIcon, SendHorizonalIcon } from '@components/icons';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// Meta configuration
const meta = {
  title: 'Components/Icon Button',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant of the icon button',
      options: ['primary', 'destructive', 'outline', 'secondary', 'ghost'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    radius: {
      description: 'The radius of the icon button',
      options: ['none', 'md', 'lg', 'full'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
      },
    },
    asChild: {
      description: 'If true, the button will be rendered as a child of a Slot',
      control: { type: 'boolean' },
    },
    onClick: {
      description: 'Optional click handler',
      action: 'clicked',
    },
    isLoading: {
      description:
        'If true, the icon button will be rendered as a child of a Slot',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    icon: {
      description: 'Icon to be rendered inside the button',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
  },
  args: {
    variant: 'primary',
    onClick: fn(),
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Button template that takes in args dynamically
const Template = (args: Record<string, unknown>) => (
  <IconButton {...args} icon={<SendHorizonalIcon />} />
);
const LoadingTemplate = (args: Record<string, unknown>) => (
  <IconButton {...args} icon={<LoaderIcon className="animate-spin" />} />
);

export const Primary: Story = {
  render: Template,
  args: {
    icon: <SendHorizonalIcon />,
  },
};

export const Loading: Story = {
  render: LoadingTemplate,
  args: {
    icon: <SendHorizonalIcon />,
    isLoading: true,
  },
};
