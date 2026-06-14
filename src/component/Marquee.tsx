const items = [
  'Recetas artesanales',
  'Ingredientes frescos',
  'Diseños personalizados',
  'Hecho con dedicación',
  'Pedidos para eventos',
  'Entrega local',
]

export default function Marquee() {
  const loop = [...items, ...items]
  return (
    <div className="border-y border-border bg-primary py-4">
      <div className="relative flex overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {loop.map((item, i) => (
            <span
              key={i}
              className="mx-8 inline-flex items-center gap-3 font-serif text-xl italic text-cream/85"
            >
              {item}
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
