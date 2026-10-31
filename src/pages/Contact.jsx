import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Phone, Mail, CheckCircle2, Video, Home as HomeIcon } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { studio, projectCategories } from '../data'

const slots = ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '4:30 PM', '6:00 PM']

function Enquiry({ onDone }) {
  const [f, setF] = useState({ name: '', email: '', phone: '', type: 'Residential', budget: '', message: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  return (
    <form onSubmit={(e) => { e.preventDefault(); onDone(`Thanks ${f.name.split(' ')[0]} — we’ve received your enquiry and will reply within one working day.`) }} className="grid gap-6 sm:grid-cols-2">
      <input required placeholder="Full name *" className="input" value={f.name} onChange={set('name')} />
      <input required type="email" placeholder="Email *" className="input" value={f.email} onChange={set('email')} />
      <input required pattern="\d{10}" title="10 digit number" placeholder="Phone *" className="input" value={f.phone} onChange={set('phone')} />
      <select className="input" value={f.type} onChange={set('type')}>{projectCategories.map((c) => <option key={c}>{c}</option>)}</select>
      <select className="input sm:col-span-2" value={f.budget} onChange={set('budget')}><option value="">Estimated budget</option>{['Under ₹10 L', '₹10 – 25 L', '₹25 – 50 L', '₹50 L – 1 Cr', '₹1 Cr+'].map((b) => <option key={b}>{b}</option>)}</select>
      <textarea required rows={4} placeholder="Tell us about your space *" className="input sm:col-span-2" value={f.message} onChange={set('message')} />
      <button className="btn-dark w-fit">Send Enquiry</button>
    </form>
  )
}

function Consultation({ onDone }) {
  const today = new Date().toISOString().split('T')[0]
  const [mode, setMode] = useState('Virtual')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [f, setF] = useState({ name: '', email: '', phone: '' })
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    if (!time) return alert('Please pick a time slot')
    const d = new Date(date).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })
    onDone(`Your ${mode.toLowerCase()} consultation is booked for ${d} at ${time}. A calendar invite has been sent to ${f.email} (demo).`)
  }
  return (
    <form onSubmit={submit} className="space-y-8">
      <div className="grid grid-cols-2 gap-3">
        {[['Virtual', Video, 'Google Meet · 30 min · Free'], ['Site visit', HomeIcon, 'At your space · 90 min · ₹7,500']].map(([m, Icon, d]) => (
          <button type="button" key={m} onClick={() => setMode(m)} className={`rounded-sm border p-4 text-left transition ${mode === m ? 'border-terra-500 bg-terra-500/5' : 'border-char/15'}`}>
            <Icon className="h-5 w-5 text-terra-500" /><p className="mt-2 font-medium">{m}</p><p className="text-xs text-char/55">{d}</p>
          </button>
        ))}
      </div>
      <div><p className="mb-2 text-xs uppercase tracking-[0.25em] text-char/50">Preferred date</p><input required type="date" min={today} value={date} onChange={(e) => setDate(e.target.value)} className="input" /></div>
      <div><p className="mb-3 text-xs uppercase tracking-[0.25em] text-char/50">Time slot</p>
        <div className="grid grid-cols-3 gap-2">{slots.map((s) => <button type="button" key={s} onClick={() => setTime(s)} className={`rounded-full border py-2 text-sm ${time === s ? 'border-char bg-char text-ivory' : 'border-char/20 hover:border-char'}`}>{s}</button>)}</div></div>
      <div className="grid gap-6 sm:grid-cols-3">
        <input required placeholder="Name *" className="input" value={f.name} onChange={set('name')} />
        <input required type="email" placeholder="Email *" className="input" value={f.email} onChange={set('email')} />
        <input required pattern="\d{10}" title="10 digit number" placeholder="Phone *" className="input" value={f.phone} onChange={set('phone')} />
      </div>
      <button className="btn-terra">Confirm Booking</button>
    </form>
  )
}

export default function Contact() {
  const [params, setParams] = useSearchParams()
  const tab = params.get('tab') === 'consult' ? 'consult' : 'enquiry'
  const [msg, setMsg] = useState('')

  return (
    <>
      <PageHeader eyebrow="Contact" title="Let’s talk about your space." sub="Send us an enquiry or book a consultation directly with one of our designers." />
      <section className="container-x grid gap-16 pb-24 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-8">
          {[[MapPin, studio.address], [Phone, studio.phone], [Mail, studio.email]].map(([Icon, v], i) => <p key={i} className="flex gap-4"><Icon className="h-5 w-5 shrink-0 text-terra-500" />{v}</p>)}
          <p className="text-sm text-char/55">Studio hours: Mon – Sat, 10 AM – 7 PM. Visits by appointment.</p>
          <iframe title="Studio location" loading="lazy" className="h-80 w-full grayscale-[40%]" src={`https://www.google.com/maps?q=${encodeURIComponent(studio.mapQuery)}&output=embed`} />
        </div>
        <div className="bg-white p-8 shadow-sm md:p-12">
          {msg ? (
            <div className="py-16 text-center"><CheckCircle2 className="mx-auto h-14 w-14 text-sage" strokeWidth={1.3} /><p className="mx-auto mt-6 max-w-md font-serif text-3xl">{msg}</p>
              <button onClick={() => setMsg('')} className="btn-outline mt-8">Back</button></div>
          ) : (
            <>
              <div className="mb-10 flex gap-8 border-b border-char/10">
                {[['enquiry', 'Project Enquiry'], ['consult', 'Book Consultation']].map(([k, l]) => (
                  <button key={k} onClick={() => setParams(k === 'consult' ? { tab: 'consult' } : {})} className={`-mb-px border-b-2 pb-4 font-serif text-2xl transition ${tab === k ? 'border-terra-500 text-char' : 'border-transparent text-char/40'}`}>{l}</button>
                ))}
              </div>
              {tab === 'enquiry' ? <Enquiry onDone={setMsg} /> : <Consultation onDone={setMsg} />}
            </>
          )}
        </div>
      </section>
    </>
  )
}
