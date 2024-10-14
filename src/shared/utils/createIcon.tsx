import { ComponentPropsWithoutRef, ElementType } from 'react';

// Helper function to create icons with common properties
export const createIcon = (IconComponent: ElementType) => {
  return (props: ComponentPropsWithoutRef<'svg'>) => (
    <IconComponent size={15} {...props} />
  );
};
