import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/ProjectCard'
import { projects, projectCategories } from '../data'

export default function Projects() {
  const [cat, setCat] = useState('All')
  const list = cat === 'All' ? projects : projects.filter((p) => p.cat === cat)
  return (
    <>
      <PageHeader eyebrow="Portfolio" title="Our Projects" sub="Homes, kitchens, offices and cafés — each designed around the people who use them." />
      <section className="container-x pb-24">
        <div className="mb-12 flex flex-wrap gap-3">
          {['All', ...projectCategories].map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`rounded-full border px-5 py-2 text-sm transition ${cat === c ? 'border-char bg-char text-ivory' : 'border-char/20 hover:border-char'}`}>
              {c} <span className="opacity-50">({c === 'All' ? projects.length : projects.filter((p) => p.cat === c).length})</span>
            </button>
          ))}
        </div>
        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <div key={p.slug} className="animate-fadeUp"><ProjectCard p={p} /></div>)}
        </div>
      </section>
    </>
  )
}
