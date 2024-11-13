import { InfoIcon, SendHorizonalIcon } from '@components/Icons';
import { Input } from '@components/input/Input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@components/Tooltip';
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
    label: {
      description: 'Optional label',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
    contextualHelp: {
      description: 'Optional contextual help',
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'text' },
        type: { summary: 'string' },
      },
    },
    isInvalid: {
      description: 'Optional validation error',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
        type: { summary: 'boolean' },
      },
    },
    errorMessage: {
      description: 'Optional error message',
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

export const WithLabel: Story = {
  render: Template,
  args: {
    label: 'Email Address',
  },
};

export const WithContextualHelp: Story = {
  render: Template,
  args: {
    label: 'Email Address',
    contextualHelp: (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <InfoIcon size={12} />
          </TooltipTrigger>
          <TooltipContent>
            We will never share your email with anyone else.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ),
  },
};

export const WithError: Story = {
  render: Template,
  args: {
    label: 'Email Address',
    isInvalid: true,
    errorMessage: 'This email already exists, please try another one.',
  },
};
