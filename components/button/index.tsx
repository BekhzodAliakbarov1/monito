import React from 'react';
import { Button, ButtonProps } from '@mantine/core';

const styles = {
  primary: {
    backgroundColor: '#003459',
    color: '#FDFDFD',
    border: '1px solid transparent',
    svg: {
      transition: 'all .3s ease',
      fill: '#FDFDFD',
    },

    '&:hover': {
      backgroundColor: 'transparent',
      color: '#003459',
      border: '1px solid #003459',
      svg: {
        fill: '#003459',
      },
    },
  },
  transparent: {
    backgroundColor: 'transparent',
    color: '#003459',
    border: '1px solid #003459',
    svg: {
      transition: 'all .3s ease',
      fill: '#003459',
    },
    '&:hover': {
      backgroundColor: '#003459',
      border: '1px solid transparent',
      color: '#FDFDFD',
      svg: {
        fill: '#FDFDFD',
      },
    },
  },
};

const StyledButton: React.FC<
  ButtonProps & { buttonType?: 'primary' | 'transparent'; children: React.ReactNode }
> = ({ buttonType = 'primary', children, ...props }) => {
  return (
    <Button
      sx={{
        padding: '6px 24px',
        height: 'auto',
        borderRadius: '57px',
        fontSize: '16px',
        lineHeight: '24px',
        transition: 'all .3s ease',
        '@media screen and (max-width: 900px)': {
          padding: '6px 16px',
          fontSize: '12px',
          lineHeight: '16px',
        },
        ...styles[buttonType],
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default StyledButton;
