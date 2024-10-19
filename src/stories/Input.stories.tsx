import { SendHorizonalIcon } from '@components/Icons';
import { Input } from '@components/Input';
import type { Meta, StoryObj } from '@storybook/react';

// Meta configuration
const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant of the Input',
      options: ['primary', 'destructive', 'outline', 'secondary'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    size: {
      description: 'How large should the Input be?',
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
      },
    },
    radius: {
      description: 'How round the Input should be',
      options: ['none', 'md', 'lg', 'full'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
      },
    },
    type: {
      description: 'Optional input type',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
    placeholder: {
      description: 'Optional input placeholder',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: 'If Input should be disabled',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    iconBefore: {
      description: 'Optional prefix icon',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
    iconAfter: {
      description: 'Optional suffix icon',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    size: 'md',
    radius: 'md',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Button template that takes in args dynamically
const Template = (args: Record<string, unknown>) => (
  <Input {...args} placeholder="Email Address" />
);
const DisabledTemplate = (args: Record<string, unknown>) => (
  <Input {...args} placeholder="Email Address" />
);

export const Primary: Story = {
  render: Template,
};

export const Disabled: Story = {
  render: DisabledTemplate,
  args: {
    disabled: true,
  },
};

export const WithPrefixIcon: Story = {
  render: Template,
  args: {
    iconBefore: <SendHorizonalIcon />,
  },
};

export const WithSuffixIcon: Story = {
  render: Template,
  args: {
    iconAfter: <SendHorizonalIcon />,
  },
};
