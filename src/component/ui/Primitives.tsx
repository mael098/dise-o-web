import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { fadeUp } from '../../lib/motion'

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline' | 'ghost' | 'dark'
  external?: boolean
  className?: string
}

const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-primary text-primary-foreground shadow-[0_14px_30px_-10px_rgba(92,68,51,0.55)] hover:shadow-[0_18px_40px_-10px_rgba(92,68,51,0.7)]',
  dark: 'bg-foreground text-cream hover:bg-primary',
  outline:
    'border border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5',
  ghost: 'text-primary hover:bg-primary/5',
}

export function Button({
  href,
  children,
  variant = 'primary',
  external,
  className = '',
}: ButtonProps) {
  return (
    <motion.a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.a>
  )
}

type SectionHeadingProps = {
  eyebrow: string
  title: ReactNode
  copy?: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'left',
  light = false,
}: SectionHeadingProps) {
  const isCenter = align === 'center'
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className={`max-w-2xl ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      <span
        className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] ${
          light ? 'text-accent' : 'text-accent'
        }`}
      >
        <span className="h-px w-6 bg-accent/70" aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-balance text-4xl leading-[1.05] sm:text-5xl ${
          light ? 'text-cream' : 'text-primary'
        }`}
      >
        {title}
      </h2>
      {copy ? (
        <p
          className={`mt-4 text-pretty text-base leading-relaxed sm:text-lg ${
            light ? 'text-cream/75' : 'text-muted'
          }`}
        >
          {copy}
        </p>
      ) : null}
    </motion.div>
  )
}
