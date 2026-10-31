import { Leaf, Sun, Hand, Heart } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import Testimonials from '../components/Testimonials'
import { team } from '../data'

const values = [
  [Leaf, 'Natural materials', 'Wood, stone, lime and linen — materials that age beautifully.'],
  [Sun, 'Light first', 'We plan every room around how daylight moves through it.'],
  [Hand, 'Crafted by hand', 'We work with artisans across India for one-of-a-kind pieces.'],
  [Heart, 'Designed for living', 'Beautiful is not enough — it has to work for your everyday.'],
]

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About the studio" title="We believe a home should feel like a deep breath." />
      <section className="container-x grid items-center gap-14 pb-24 md:grid-cols-2">
        <Img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" alt="Studio" className="aspect-[4/5] w-full rounded-sm object-cover" />
        <Reveal className="space-y-5 text-char/70">
          <p className="eyebrow">Our story</p>
          <p className="font-serif text-3xl leading-snug text-char">Atelier Lume was founded in 2012 by architect Ira Malhotra with a simple belief: good design should make people feel calmer, warmer and more themselves.</p>
          <p>What started as a two-person studio in a Banjara Hills garage is now a team of 22 designers, architects and project managers. We have completed over 320 projects — from compact city apartments to boutique hotels — and been recognised by Elle Decor India and the IIID Design Excellence Awards.</p>
          <p>We still keep the studio small on purpose. Every project is led personally by a principal designer, from first sketch to final styling.</p>
        </Reveal>
      </section>

      <section className="bg-linen py-24">
        <div className="container-x">
          <p className="eyebrow text-center">Our values</p>
          <h2 className="mb-14 text-center text-5xl">What guides every project</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {values.map(([Icon, t, d], i) => (
              <Reveal key={t} delay={i * 100} className="text-center"><Icon className="mx-auto h-9 w-9 text-terra-500" strokeWidth={1.3} /><h3 className="mt-4 text-2xl">{t}</h3><p className="mt-2 text-sm text-char/60">{d}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-24">
        <p className="eyebrow">The team</p>
        <h2 className="mb-14 text-5xl">The people behind the spaces</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100} className="group">
              <div className="overflow-hidden"><Img src={m.img} alt={m.name} className="aspect-[3/4] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0" /></div>
              <h3 className="mt-4 text-2xl">{m.name}</h3><p className="text-sm text-char/55">{m.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Testimonials />
    </>
  )
}
