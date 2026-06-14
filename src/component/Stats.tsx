import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'

type Stat = {
  value: number
  suffix?: string
  prefix?: string
  label: string
}

const stats: Stat[] = [
  { value: 500, suffix: '+', label: 'Clientes satisfechos' },
  { value: 3200, suffix: '+', label: 'Pasteles entregados' },
  { value: 8, suffix: ' años', label: 'De experiencia artesanal' },
  { value: 100, suffix: '%', label: 'Hecho con dedicación' },
]

function Counter({ value, prefix = '', suffix = '' }: Omit<Stat, 'label'>) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, value])

  return (
    <span ref={ref} className="font-serif text-5xl text-cream sm:text-6xl">
      {prefix}
      {display.toLocaleString('es-MX')}
      {suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 sm:px-6 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="text-center"
          >
            <Counter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.14em] text-cream/65">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
