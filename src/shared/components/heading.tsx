import { cn } from '@lib/utils';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const headingVariants = cva('font-bold', {
  variants: {
    variant: {
      primary: 'text-primary',
      secondary: 'text-secondary',
    },
    size: {
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
  },
  defaultVariants: {
    size: 'xl',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /** Heading contents */
  children: React.ReactNode;
  /** Optional variant */
  variant?: 'primary' | 'secondary';
  /** How large should the heading be? */
  size?: 'lg' | 'xl' | '2xl' | '3xl';
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { children, className, variant = 'primary', size = 'xl', ...props },
    ref
  ) => {
    return (
      <h1
        ref={ref}
        className={cn(headingVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </h1>
    );
  }
);

Heading.displayName = 'Heading';

export default Heading;
