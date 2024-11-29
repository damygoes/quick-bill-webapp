import { Label } from '@components/Label';
import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import * as React from 'react';

const inputVariants = cva(
  'flex h-9 w-full rounded-md border border-solid bg-transparent px-3 py-1 text-primary text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-xs focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:text-input',
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
  /** Optional id (e.g for testing) */
  id?: string;
  /** If the field is required */
  required?: boolean;
  /** Optional onChange handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Optional value */
  value?: string;
  /** Optional label */
  label?: string;
  /** Optional contextual help */
  contextualHelp?: React.ReactNode;
  /** Optional validation error */
  isInvalid?: boolean;
  /** Optional error message */
  errorMessage?: string;
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
      id,
      required,
      onChange,
      value,
      label,
      contextualHelp,
      isInvalid,
      errorMessage,
      ...props
    },
    ref
  ) => {
    if (contextualHelp && !label) {
      throw new Error('Input with contextual help must have a label');
    }

    if (typeof contextualHelp === 'string') {
      throw new Error('contextualHelp must be a ReactNode');
    }

    if (isInvalid && !errorMessage) {
      throw new Error('Input with isInvalid must have an errorMessage');
    }

    const helpId = contextualHelp ? `${id}-help` : undefined;

    return (
      <div className={cn('relative flex items-center', className)}>
        {/* Render iconBefore if provided */}
        {iconBefore && (
          <span
            data-testid="icon-before"
            className="absolute flex items-center pointer-events-none left-3"
          >
            {iconBefore}
          </span>
        )}

        <div className="space-y-1">
          {label && (
            <div className="flex items-center justify-start gap-2">
              <Label
                htmlFor={id}
                data-testid="input-label"
                size="xs"
                variant={isInvalid ? 'destructive' : 'primary'}
              >
                {label}
              </Label>
              {contextualHelp && (
                <span
                  data-testid="contextual-help"
                  id={helpId}
                  className="flex items-center justify-center text-muted-foreground"
                >
                  {contextualHelp}
                </span>
              )}
            </div>
          )}

          <input
            data-testid="input-field"
            id={id}
            required={required}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            aria-disabled={disabled}
            aria-describedby={helpId}
            onChange={onChange}
            value={value}
            className={cn(inputVariants({ variant, size, radius }), {
              'pl-10': iconBefore,
              'pr-10': iconAfter,
              'border-destructive focus-visible:ring-destructive':
                isInvalid && !disabled,
            })}
            ref={ref}
            {...props}
          />
          <span
            data-testid="error-message"
            className="text-2xs text-destructive"
            role="alert"
            aria-live="assertive"
          >
            {isInvalid && errorMessage}
          </span>
        </div>

        {/* Render iconAfter if provided */}
        {iconAfter && (
          <span
            data-testid="icon-after"
            className="absolute flex items-center pointer-events-none right-3"
          >
            {iconAfter}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input };
