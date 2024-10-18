import { cva } from 'class-variance-authority';
import React from 'react';

const typographyVariants = cva('text-balance text-muted-foreground', {
  variants: {
    size: {
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    size: 'sm',
    weight: 'normal',
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Typography contents */
  children: React.ReactNode;
  /** How large should the typography be? */
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  /** The weight of the typography */
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /** The variant of the typography */
  variant?: 'p' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /** Optional class name */
}

const Typography = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  (
    { children, size = 'sm', weight = 'normal', variant = 'p', ...props },
    ref
  ) => {
    let Tag: keyof JSX.IntrinsicElements;

    // Use switch statement to map the variant to an HTML or SVG element
    switch (variant) {
      case 'h2':
        Tag = 'h2';
        break;
      case 'h3':
        Tag = 'h3';
        break;
      case 'h4':
        Tag = 'h4';
        break;
      case 'h5':
        Tag = 'h5';
        break;
      case 'h6':
        Tag = 'h6';
        break;
      default:
        Tag = 'p';
    }

    return (
      <Tag
        ref={ref}
        className={typographyVariants({ size, weight })}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
