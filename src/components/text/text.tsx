import { getFontFamily } from '@utils';
import type { VariantProps } from 'class-variance-authority';
import React from 'react';
import { Text as RNText } from 'react-native';
import { twMerge } from 'tailwind-merge';

import { textStyle } from './styles';

type TextVariants = VariantProps<typeof textStyle>;

type TextProps = Omit<React.ComponentProps<typeof RNText>, 'children'> &
  TextVariants & {
    children?: React.ReactNode;
    align?: 'left' | 'center' | 'right';
    weight?: 'normal' | 'bold' | 'semibold' | 'medium';
  };

const Text = React.forwardRef<React.ComponentRef<typeof RNText>, TextProps>(
  function Text(
    {
      className,
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size = 'md',
      sub,
      italic,
      highlight,
      align = 'left',
      weight = 'normal',
      ...props
    },
    ref
  ) {
    const fontFamily = getFontFamily(weight);

    const computedClassName = textStyle({
      isTruncated,
      bold,
      underline,
      strikeThrough,
      size,
      sub,
      italic,
      highlight,
    });

    return (
      <RNText
        style={{
          fontFamily,
          textAlign: align,
        }}
        className={twMerge(computedClassName, 'text-white', className)}
        {...props}
        ref={ref}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text };
