export default function PageHeader({ eyebrow, title, sub }) {
  return (
    <section className="container-x pb-16 pt-40">
      <div className="max-w-3xl animate-fadeUp">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-5xl leading-[1.05] md:text-7xl">{title}</h1>
        {sub && <p className="mt-6 max-w-xl text-lg text-char/65">{sub}</p>}
      </div>
    </section>
  )
}
