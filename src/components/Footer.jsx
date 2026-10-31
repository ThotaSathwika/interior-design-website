import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'
import { studio } from '../data'

export default function Footer() {
  return (
    <footer className="bg-char text-ivory/70">
      <div className="container-x py-20">
        <div className="flex flex-col justify-between gap-8 border-b border-ivory/10 pb-14 md:flex-row md:items-end">
          <h2 className="max-w-xl font-serif text-5xl text-ivory md:text-6xl">Let’s create a space that feels like <em className="text-terra-400">you.</em></h2>
          <Link to="/contact?tab=consult" className="btn-terra w-fit">Start your project</Link>
        </div>
        <div className="grid gap-10 pt-12 md:grid-cols-4">
          <div><p className="font-serif text-3xl text-ivory">Atelier <em className="text-terra-400">Lume</em></p><p className="mt-3 text-sm">Award-winning interior design studio, Hyderabad.</p></div>
          <div><p className="eyebrow !text-ivory/50">Studio</p><p className="text-sm">{studio.address}</p></div>
          <div><p className="eyebrow !text-ivory/50">Contact</p><p className="text-sm">{studio.phone}<br />{studio.email}</p></div>
          <div><p className="eyebrow !text-ivory/50">Follow</p><div className="flex gap-3">{[Instagram, Linkedin].map((I, i) => <a key={i} href="#" className="rounded-full border border-ivory/20 p-2.5 hover:border-terra-400 hover:text-terra-400"><I className="h-4 w-4" /></a>)}</div></div>
        </div>
      </div>
      <p className="border-t border-ivory/10 py-5 text-center text-xs">© {new Date().getFullYear()} Atelier Lume Interiors Pvt. Ltd.</p>
    </footer>
  )
}
