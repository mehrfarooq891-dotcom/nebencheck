import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-blue-500/20 rounded-2xl',
      secondary: 'bg-primary-light text-primary hover:bg-primary/10 rounded-2xl',
      outline: 'border-2 border-gray-100 text-text hover:border-primary/20 hover:bg-primary/5 rounded-2xl',
      ghost: 'text-muted hover:text-primary hover:bg-primary/5 rounded-2xl',
      danger: 'bg-danger text-white hover:bg-danger/90 rounded-2xl'
    };
    
    const sizes = {
      sm: 'px-4 py-2 text-sm font-semibold',
      md: 'px-5 py-2.5 text-base font-semibold',
      lg: 'px-6 py-3 text-lg font-bold',
      xl: 'px-8 py-4 text-xl font-bold'
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center transition-all active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
