import { cn } from '@lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { LoaderIcon } from './icons';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        // icon: 'h-9 w-9',
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
      size: 'md',
      radius: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Button contents */
  children: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
  /** If true, the button will be rendered as a child of a Slot */
  asChild?: boolean;
  /** How large should the button be? */
  size?: 'sm' | 'md' | 'lg';
  /** The radius of the button */
  radius?: 'none' | 'md' | 'lg' | 'full';
  /** The variant of the button */
  variant?:
    | 'primary'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
  /** Optional prefix icon */
  iconBefore?: React.ReactNode;
  /** Optional suffix icon */
  iconAfter?: React.ReactNode;
  /** If true, the button will be disabled and show a loading spinner */
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      radius = 'md',
      asChild = false,
      iconBefore,
      iconAfter,
      isLoading = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    // Prioritize loading icon if isLoading is true
    const iconBeforeToRender = isLoading ? (
      <LoaderIcon className="w-4 h-4 animate-spin" />
    ) : (
      iconBefore
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius, className }), {
          'cursor-not-allowed opacity-50': isLoading, // Optional: Add a loading state style
        })}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {/* Render iconBefore (or Loader if isLoading is true) */}
        {iconBeforeToRender && (
          <span className="mr-2">{iconBeforeToRender}</span>
        )}
        {/* Render button children (text or other content) */}
        {children}
        {/* Render iconAfter if it's provided and not loading */}
        {iconAfter && !isLoading && <span className="ml-2">{iconAfter}</span>}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants };
