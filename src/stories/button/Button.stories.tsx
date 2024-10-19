import { Button } from '@components/Button';
import { SendHorizonalIcon } from '@components/Icons';
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// Meta configuration
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant of the button',
      options: [
        'primary',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    size: {
      description: 'How large should the button be?',
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
      },
    },
    radius: {
      description: 'The radius of the button',
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
  },
  args: {
    variant: 'primary',
    size: 'md',
    onClick: fn(),
    children: 'Default Button Text',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Button template that takes in args dynamically
const Template = (args: Record<string, unknown>) => (
  <Button {...args}>Generate Invoice</Button>
);
const LoadingTemplate = (args: Record<string, unknown>) => (
  <Button {...args}>Processing...</Button>
);

export const Primary: Story = {
  render: Template,
  args: {
    variant: 'primary',
    size: 'md',
  },
};

export const WithPrefixIcon: Story = {
  render: Template,
  args: {
    variant: 'primary',
    size: 'md',
    iconBefore: <SendHorizonalIcon />,
  },
};

export const WithSuffixIcon: Story = {
  render: Template,
  args: {
    variant: 'primary',
    size: 'md',
    iconAfter: <SendHorizonalIcon />,
  },
};

export const WithLoader: Story = {
  render: LoadingTemplate,
  args: {
    variant: 'primary',
    size: 'md',
    isLoading: true,
  },
};
