import React from 'react';
import { cn } from '@/utils/utils';

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 px-4 py-2 text-sm text-slate-900 dark:text-slate-100 shadow-inner dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-300",
        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
        "placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium",
        "focus-visible:outline-none focus-visible:border-brand-500 dark:focus-visible:border-brand-400 focus-visible:ring-4 focus-visible:ring-brand-500/20 dark:focus-visible:ring-brand-400/20 focus-visible:bg-white dark:focus-visible:bg-slate-800 focus-visible:shadow-md",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = "Input"

export const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 shadow-inner dark:shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] transition-all duration-300",
        "placeholder:text-slate-400 dark:placeholder:text-slate-500 font-medium",
        "focus-visible:outline-none focus-visible:border-brand-500 dark:focus-visible:border-brand-400 focus-visible:ring-4 focus-visible:ring-brand-500/20 dark:focus-visible:ring-brand-400/20 focus-visible:bg-white dark:focus-visible:bg-slate-800 focus-visible:shadow-md",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export const Label = React.forwardRef(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700 dark:text-slate-200",
      className
    )}
    {...props}
  />
))
Label.displayName = "Label"

import { motion } from 'framer-motion';

export const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-2xl text-sm font-bold ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950"
    
    const variants = {
        default: "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-xl shadow-slate-900/20 dark:shadow-white/10 hover:bg-slate-800 dark:hover:bg-slate-200 hover:shadow-slate-900/30",
        brand: "bg-brand-600 dark:bg-brand-500 text-white shadow-xl shadow-brand-500/30 hover:bg-brand-700 dark:hover:bg-brand-400 hover:shadow-brand-500/40",
        outline: "border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200",
        ghost: "hover:bg-slate-100 hover:text-slate-900",
    }
    
    const sizes = {
        default: "h-12 px-6 py-2",
        sm: "h-9 rounded-xl px-4",
        lg: "h-14 rounded-3xl px-8 text-base",
        icon: "h-10 w-10",
    }

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ y: -2 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            ref={ref}
            {...props}
        />
    )
})
Button.displayName = "Button"
