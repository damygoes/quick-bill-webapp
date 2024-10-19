import { cn } from '@lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const iconButtonVariants = cva(
  'h-9 w-9 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-solid border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      radius: {
        none: 'rounded-none',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      radius: 'md',
    },
  }
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {
  /** Button contents */
  icon: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** If true, the button will be rendered as a child of a Slot */
  asChild?: boolean;
  /** The radius of the button */
  radius?: 'none' | 'md' | 'lg' | 'full';
  /** The variant of the button */
  variant?: 'primary' | 'destructive' | 'outline' | 'secondary' | 'ghost';
  isLoading?: boolean;
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      icon,
      className,
      variant = 'primary',
      radius = 'md',
      asChild = false,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(iconButtonVariants({ variant, radius, className }), {
          'cursor-not-allowed opacity-50': isLoading,
        })}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {icon}
      </Comp>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton };
