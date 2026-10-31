import { Link } from 'react-router-dom'
import { ArrowRight, ArrowDown } from 'lucide-react'
import Img from '../components/Img'
import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import Testimonials from '../components/Testimonials'
import { heroImg, projects, services } from '../data'

export default function Home() {
  return (
    <>
      <section className="relative h-screen min-h-[640px]">
        <Img src={heroImg} alt="Living room by Atelier Lume" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
        <div className="container-x relative flex h-full flex-col justify-center text-white">
          <p className="eyebrow animate-fadeUp !text-terra-400">Interior design studio · Hyderabad</p>
          <h1 className="max-w-3xl animate-fadeUp text-6xl leading-[0.95] md:text-8xl" style={{ animationDelay: '.15s' }}>Spaces that feel<br /><em>quietly</em> extraordinary.</h1>
          <p className="mt-8 max-w-md animate-fadeUp text-lg text-white/80" style={{ animationDelay: '.3s' }}>We design warm, timeless homes and workplaces — rooted in natural materials, light and the way you live.</p>
          <div className="mt-10 flex animate-fadeUp flex-wrap gap-4" style={{ animationDelay: '.45s' }}>
            <Link to="/contact?tab=consult" className="btn-terra">Book a Free Consultation</Link>
            <Link to="/projects" className="btn border border-white/60 text-white hover:bg-white hover:text-char">View Our Work</Link>
          </div>
        </div>
        <ArrowDown className="absolute bottom-8 left-1/2 h-6 w-6 -translate-x-1/2 animate-bounce text-white/70" />
      </section>

      <section className="container-x grid gap-10 py-24 md:grid-cols-4">
        {[['14', 'Years of practice'], ['320+', 'Spaces designed'], ['18', 'Design awards'], ['96%', 'Repeat & referral clients']].map(([n, l], i) => (
          <Reveal key={l} delay={i * 100} className="border-t border-char/15 pt-6"><p className="font-serif text-6xl text-terra-500">{n}</p><p className="mt-1 text-sm text-char/60">{l}</p></Reveal>
        ))}
      </section>

      <section className="container-x pb-24">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div><p className="eyebrow">What we do</p><h2 className="text-5xl md:text-6xl">Our Services</h2></div>
          <Link to="/services" className="flex items-center gap-2 text-sm hover:text-terra-500">All services <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <div className="grid gap-px overflow-hidden bg-char/10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} className="group bg-ivory p-8 transition hover:bg-char hover:text-ivory">
              <p className="font-serif text-5xl text-terra-400">0{i + 1}</p>
              <h3 className="mt-6 text-3xl">{s.title}</h3>
              <p className="mt-3 text-sm text-char/60 group-hover:text-ivory/70">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x pb-24">
        <Reveal className="mb-14 text-center"><p className="eyebrow">Selected work</p><h2 className="text-5xl md:text-6xl">Featured Projects</h2></Reveal>
        <div className="grid gap-12 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => <Reveal key={p.slug} delay={(i % 2) * 150} className={i % 2 ? 'md:mt-24' : ''}><ProjectCard p={p} tall /></Reveal>)}
        </div>
        <div className="mt-16 text-center"><Link to="/projects" className="btn-outline">Explore all projects</Link></div>
      </section>

      <Testimonials />

      <section className="container-x grid items-center gap-14 py-24 md:grid-cols-2">
        <Img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80" alt="Consultation" className="aspect-[4/3] w-full rounded-sm object-cover" />
        <Reveal>
          <p className="eyebrow">Begin here</p>
          <h2 className="text-5xl">A conversation is where every great room begins.</h2>
          <p className="mt-5 text-char/65">Book a free 30-minute discovery call. Tell us about your space, your style and your budget — we’ll share ideas and next steps, no obligation.</p>
          <Link to="/contact?tab=consult" className="btn-terra mt-8">Book a Consultation</Link>
        </Reveal>
      </section>
    </>
  )
}
