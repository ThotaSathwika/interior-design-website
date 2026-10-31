import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Img from './Img'

export default function ProjectCard({ p, tall = false }) {
  return (
    <Link to={`/projects/${p.slug}`} className="group block">
      <div className={`relative overflow-hidden rounded-sm bg-linen ${tall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
        <Img src={p.cover} alt={p.title} className="h-full w-full object-cover transition duration-1000 group-hover:scale-105" />
        <span className="absolute right-4 top-4 grid h-11 w-11 scale-75 place-items-center rounded-full bg-ivory opacity-0 transition duration-500 group-hover:scale-100 group-hover:opacity-100"><ArrowUpRight className="h-5 w-5" /></span>
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h3 className="text-2xl transition group-hover:text-terra-500 md:text-3xl">{p.title}</h3>
        <span className="text-xs uppercase tracking-[0.2em] text-char/50">{p.cat}</span>
      </div>
      <p className="text-sm text-char/55">{p.location} · {p.area}</p>
    </Link>
  )
}
