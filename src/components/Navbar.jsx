import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [['/', 'Home'], ['/projects', 'Projects'], ['/services', 'Services'], ['/about', 'About'], ['/contact', 'Contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const overHero = pathname === '/' && !scrolled && !open

  useEffect(() => { const f = () => setScrolled(window.scrollY > 40); window.addEventListener('scroll', f); return () => window.removeEventListener('scroll', f) }, [])
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition duration-500 ${overHero ? 'text-white' : 'bg-ivory/95 text-char shadow-sm backdrop-blur'}`}>
      <nav className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="font-serif text-3xl">Atelier <em className="text-terra-400">Lume</em></Link>
        <div className="hidden items-center gap-9 md:flex">
          {links.map(([to, l]) => <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `text-sm tracking-wide transition hover:text-terra-400 ${isActive ? 'text-terra-400' : ''}`}>{l}</NavLink>)}
          <Link to="/contact?tab=consult" className={`btn !py-2.5 ${overHero ? 'border border-white/60 hover:bg-white hover:text-char' : 'btn-dark'}`}>Book Consultation</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <div className="container-x flex flex-col gap-5 pb-8 md:hidden">
          {links.map(([to, l]) => <Link key={to} to={to} className="font-serif text-3xl">{l}</Link>)}
          <Link to="/contact?tab=consult" className="btn-terra w-fit">Book Consultation</Link>
        </div>
      )}
    </header>
  )
}
