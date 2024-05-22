import clsx from 'clsx';

export const Section = ({ variant = '8/10', children }) => {
  const classes = clsx(
    {
      'max-w-8/10': variant === '8/10',
      'max-w-9/10': variant === '9/10',
    },
    'mx-auto my-[100px]'
  );
  return <section className={classes}>{children}</section>;
};
