import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

const inputVariants = cva(
  'flex h-9 w-full rounded-md border border-solid bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'border-input',
        destructive: 'border-destructive',
        outline: 'border-primary',
        secondary: 'border-secondary',
      },
      size: {
        sm: 'p-3 text-xs',
        md: 'p-4 text-sm',
        lg: 'p-5 text-lg',
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

export interface InputProps extends VariantProps<typeof inputVariants> {
  /** The variant of the input */
  variant?: 'primary' | 'destructive' | 'outline' | 'secondary';
  /** Size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** How round the input should be */
  radius?: 'none' | 'md' | 'lg' | 'full';
  /** Optional input type */
  type?: string;
  /** Optional input placeholder */
  placeholder?: string;
  /** Optional styles */
  className?: string;
  /** If Input should be disabled */
  disabled?: boolean;
  /** Optional prefix icon */
  iconBefore?: React.ReactNode;
  /** Optional suffix icon */
  iconAfter?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      radius = 'md',
      className,
      type,
      placeholder,
      disabled,
      iconBefore,
      iconAfter,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn('relative flex items-center', className)}>
        {/* Render iconBefore if provided */}
        {iconBefore && (
          <span className="absolute flex items-center pointer-events-none left-3">
            {iconBefore}
          </span>
        )}

        {/* Input element */}
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          aria-disabled={disabled}
          className={cn(inputVariants({ variant, size, radius }), {
            'pl-10': iconBefore, // Add padding when iconBefore exists
            'pr-10': iconAfter, // Add padding when iconAfter exists
          })}
          ref={ref}
          {...props}
        />

        {/* Render iconAfter if provided */}
        {iconAfter && (
          <span className="absolute flex items-center pointer-events-none right-3">
            {iconAfter}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
