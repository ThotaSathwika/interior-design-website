import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import Img from './Img'
import { testimonials } from '../data'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const t = testimonials[i]
  const go = (d) => setI((i + d + testimonials.length) % testimonials.length)
  return (
    <section className="bg-linen py-24">
      <div className="container-x grid items-center gap-12 md:grid-cols-[1fr_2fr]">
        <div>
          <p className="eyebrow">Client stories</p>
          <h2 className="text-5xl">Kind words from our clients</h2>
          <div className="mt-8 flex gap-3">
            <button onClick={() => go(-1)} className="rounded-full border border-char/30 p-3 hover:bg-char hover:text-ivory" aria-label="Previous"><ChevronLeft className="h-5 w-5" /></button>
            <button onClick={() => go(1)} className="rounded-full border border-char/30 p-3 hover:bg-char hover:text-ivory" aria-label="Next"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
        <figure key={i} className="animate-fadeUp">
          <div className="mb-5 flex gap-1 text-terra-500">{Array.from({ length: t.rating }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
          <blockquote className="font-serif text-3xl italic leading-snug md:text-4xl">“{t.text}”</blockquote>
          <figcaption className="mt-8 flex items-center gap-4">
            <Img src={t.img} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
            <div><p className="font-medium">{t.name}</p><p className="text-sm text-char/55">{t.project}</p></div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
