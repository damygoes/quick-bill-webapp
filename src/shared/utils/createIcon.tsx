import { ComponentPropsWithoutRef, ElementType } from 'react';

// Helper function to create icons with customizable size
export const createIcon = (IconComponent: ElementType) => {
  return ({
    size = 15,
    ...props
  }: { size?: number } & ComponentPropsWithoutRef<'svg'>) => (
    <IconComponent size={size} {...props} />
  );
};
