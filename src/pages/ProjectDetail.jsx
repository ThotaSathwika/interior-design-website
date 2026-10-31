import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import { projects } from '../data'

export default function ProjectDetail() {
  const { slug } = useParams()
  const idx = projects.findIndex((p) => p.slug === slug)
  const p = projects[idx]
  const [zoom, setZoom] = useState(null)
  if (!p) return <div className="py-40 text-center"><p>Project not found.</p><Link to="/projects" className="btn-dark mt-6">All projects</Link></div>
  const next = projects[(idx + 1) % projects.length]
  const prev = projects[(idx - 1 + projects.length) % projects.length]

  return (
    <>
      <section className="container-x pb-12 pt-32">
        <Link to="/projects" className="mb-8 inline-flex items-center gap-2 text-sm text-char/60 hover:text-terra-500"><ArrowLeft className="h-4 w-4" /> All projects</Link>
        <p className="eyebrow">{p.cat}</p>
        <h1 className="text-5xl md:text-8xl">{p.title}</h1>
      </section>
      <Img src={p.cover} alt={p.title} className="h-[70vh] w-full object-cover" />

      <section className="container-x grid gap-14 py-20 lg:grid-cols-[1fr_2fr]">
        <dl className="grid h-fit grid-cols-2 gap-6 border-t border-char/15 pt-6 text-sm lg:grid-cols-1">
          {[['Client', p.client], ['Location', p.location], ['Area', p.area], ['Duration', p.duration], ['Completed', p.year]].map(([k, v]) => (
            <div key={k}><dt className="text-xs uppercase tracking-[0.25em] text-char/45">{k}</dt><dd className="mt-1 font-serif text-2xl">{v}</dd></div>
          ))}
        </dl>
        <div>
          <Reveal><p className="font-serif text-3xl leading-snug md:text-4xl">{p.desc}</p></Reveal>
          <h2 className="mt-14 text-3xl">Scope of work</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">{p.scope.map((s) => <li key={s} className="flex items-center gap-3"><Check className="h-4 w-4 text-terra-500" />{s}</li>)}</ul>
        </div>
      </section>

      <section className="container-x grid gap-5 pb-24 md:grid-cols-2">
        {p.images.slice(1).map((img, i) => (
          <button key={i} onClick={() => setZoom(img)} className={`overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}>
            <Img src={img} alt={`${p.title} ${i + 2}`} className={`w-full object-cover transition duration-1000 hover:scale-105 ${i === 0 ? 'h-[60vh]' : 'h-[50vh]'}`} />
          </button>
        ))}
      </section>

      <section className="border-t border-char/10">
        <div className="container-x grid md:grid-cols-2">
          <Link to={`/projects/${prev.slug}`} className="group py-12 md:pr-10"><p className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-char/50"><ArrowLeft className="h-4 w-4" /> Previous</p><p className="mt-2 font-serif text-3xl group-hover:text-terra-500 md:text-4xl">{prev.title}</p></Link>
          <Link to={`/projects/${next.slug}`} className="group border-char/10 py-12 text-right md:border-l md:pl-10"><p className="flex items-center justify-end gap-2 text-xs uppercase tracking-[0.25em] text-char/50">Next <ArrowRight className="h-4 w-4" /></p><p className="mt-2 font-serif text-3xl group-hover:text-terra-500 md:text-4xl">{next.title}</p></Link>
        </div>
      </section>

      {zoom && (
        <div onClick={() => setZoom(null)} className="fixed inset-0 z-50 grid place-items-center bg-black/90 p-4">
          <button className="absolute right-5 top-5 text-white" aria-label="Close"><X className="h-8 w-8" /></button>
          <img src={zoom} alt="" className="max-h-[88vh] object-contain" />
        </div>
      )}
    </>
  )
}
