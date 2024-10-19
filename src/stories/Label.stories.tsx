import { Label } from '@components/Label';
import type { Meta, StoryObj } from '@storybook/react';

// Meta configuration
const meta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      description: 'The variant of the label',
      options: ['primary', 'destructive', 'disabled'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: 'string' },
      },
    },
    size: {
      description: 'How large should the label be?',
      options: ['sm', 'md', 'lg'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'md' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    variant: 'primary',
    size: 'md',
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

// Button template that takes in args dynamically
const Template = (args: Record<string, unknown>) => (
  <Label {...args}>Username</Label>
);

export const Primary: Story = {
  render: Template,
};

export const Destructive: Story = {
  render: Template,
  args: {
    variant: 'destructive',
  },
};

export const Disabled: Story = {
  render: Template,
  args: {
    variant: 'disabled',
  },
};

export const Small: Story = {
  render: Template,
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  render: Template,
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  render: Template,
  args: {
    size: 'lg',
  },
};
