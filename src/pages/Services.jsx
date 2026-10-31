import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import { services, process } from '../data'

const faqs = [
  ['How much does an interior project cost?', 'Full-home projects typically range from ₹1,800 to ₹4,500 per sq ft depending on finishes and custom work. We share a detailed estimate after the concept stage.'],
  ['How long does a project take?', 'A 3BHK apartment usually takes 10–14 weeks from approved design to handover. Villas take 5–9 months.'],
  ['Do you work outside Hyderabad?', 'Yes — we take on projects in Bengaluru, Chennai and Goa, and offer virtual design services anywhere.'],
  ['Can I use my own contractor?', 'Absolutely. Our design-only package includes drawings, specifications and site visits for your team.'],
]

export default function Services() {
  return (
    <>
      <PageHeader eyebrow="Services" title="Design, delivered with care." sub="Whether it’s a single room or an entire building, we bring the same attention to detail." />
      <section className="container-x space-y-24 pb-24">
        {services.map((s, i) => (
          <Reveal key={s.title} className="grid items-center gap-12 md:grid-cols-2">
            <Img src={s.img} alt={s.title} className={`aspect-[4/3] w-full rounded-sm object-cover ${i % 2 ? 'md:order-2' : ''}`} />
            <div>
              <p className="font-serif text-6xl text-terra-400">0{i + 1}</p>
              <h2 className="mt-2 text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-4 text-char/65">{s.desc}</p>
              <ul className="mt-6 space-y-3">{s.points.map((pt) => <li key={pt} className="flex items-center gap-3"><Check className="h-4 w-4 text-terra-500" />{pt}</li>)}</ul>
              <p className="mt-6 text-sm uppercase tracking-[0.2em] text-char/50">{s.price}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="bg-char py-24 text-ivory">
        <div className="container-x">
          <p className="eyebrow">Our process</p>
          <h2 className="mb-16 text-5xl md:text-6xl">From first sketch to final cushion</h2>
          <ol className="grid gap-10 md:grid-cols-5">
            {process.map(([t, d], i) => (
              <Reveal key={t} delay={i * 120} className="border-t border-ivory/20 pt-6">
                <p className="font-serif text-4xl text-terra-400">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-3 text-2xl">{t}</h3><p className="mt-2 text-sm text-ivory/60">{d}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x max-w-4xl py-24">
        <h2 className="mb-10 text-center text-5xl">Frequently asked</h2>
        {faqs.map(([q, a]) => (
          <details key={q} className="group border-b border-char/15 py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between font-serif text-2xl">{q}<span className="text-terra-500 transition group-open:rotate-45">+</span></summary>
            <p className="mt-3 text-char/65">{a}</p>
          </details>
        ))}
        <div className="mt-14 text-center"><Link to="/contact?tab=consult" className="btn-terra">Book a Consultation</Link></div>
      </section>
    </>
  )
}
