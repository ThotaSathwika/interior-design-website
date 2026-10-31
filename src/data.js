const u = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`

export const studio = {
  name: 'Atelier Lume',
  phone: '+91 99890 11223',
  email: 'studio@atelierlume.in',
  address: 'Plot 22, Road No. 10, Banjara Hills, Hyderabad 500034',
  mapQuery: 'Road No 10 Banjara Hills Hyderabad',
}

export const heroImg = u('1618221195710-dd6b41faaea6', 2000)

export const projectCategories = ['Residential', 'Kitchen', 'Bedroom', 'Commercial', 'Hospitality']

export const projects = [
  { slug: 'the-terracotta-house', title: 'The Terracotta House', cat: 'Residential', location: 'Jubilee Hills, Hyderabad', area: '4,800 sq ft', year: 2025, duration: '7 months', client: 'The Reddy Family',
    cover: u('1618221195710-dd6b41faaea6'), images: [u('1618221195710-dd6b41faaea6'), u('1616486338812-3dadae4b4ace'), u('1600210492486-724fe5c67fb0'), u('1586023492125-27b2c045efd7')],
    desc: 'A warm, earthy family home built around a central courtyard. We layered lime-plaster walls, handmade terracotta tiles and reclaimed teak to create spaces that feel calm yet deeply personal.',
    scope: ['Space planning', 'Custom furniture', 'Lighting design', 'Material curation', 'Art sourcing', 'Turnkey execution'] },
  { slug: 'sage-kitchen', title: 'Sage & Stone Kitchen', cat: 'Kitchen', location: 'Gachibowli, Hyderabad', area: '320 sq ft', year: 2025, duration: '10 weeks', client: 'Private client',
    cover: u('1556911220-bff31c812dba'), images: [u('1556911220-bff31c812dba'), u('1556909114-f6e7ad7d3136'), u('1600566753190-17f0baa2a6c3'), u('1600607687939-ce8a6c25118c')],
    desc: 'An open kitchen in muted sage with honed quartzite counters, a fluted island and a hidden walk-in pantry for a family that loves to cook together.',
    scope: ['Kitchen layout', 'Modular cabinetry', 'Appliance planning', 'Lighting'] },
  { slug: 'linen-suite', title: 'The Linen Suite', cat: 'Bedroom', location: 'Kokapet, Hyderabad', area: '540 sq ft', year: 2024, duration: '8 weeks', client: 'Ananya & Karthik',
    cover: u('1617806118233-18e1de247200'), images: [u('1617806118233-18e1de247200'), u('1631049307264-da0ec9d70304'), u('1552321554-5fefe8c9ef14'), u('1616486338812-3dadae4b4ace')],
    desc: 'A serene primary suite with a padded linen headboard wall, walk-in wardrobe and a spa-like bath in travertine.',
    scope: ['Bedroom & wardrobe', 'Bathroom design', 'Soft furnishings', 'Custom joinery'] },
  { slug: 'northlight-office', title: 'Northlight Studio Office', cat: 'Commercial', location: 'Hitech City, Hyderabad', area: '9,500 sq ft', year: 2024, duration: '5 months', client: 'Northlight Labs',
    cover: u('1497366216548-37526070297c'), images: [u('1497366216548-37526070297c'), u('1497366811353-6870744d04b2'), u('1600607687939-ce8a6c25118c'), u('1586023492125-27b2c045efd7')],
    desc: 'A biophilic workplace for a 120-person tech team with focus pods, a café-style breakout area and acoustically treated meeting rooms.',
    scope: ['Workplace strategy', 'Acoustics', 'Furniture procurement', 'Branding integration'] },
  { slug: 'casa-olive-cafe', title: 'Casa Olive Café', cat: 'Hospitality', location: 'Banjara Hills, Hyderabad', area: '2,200 sq ft', year: 2023, duration: '3 months', client: 'Casa Olive',
    cover: u('1554118811-1e0d58224f24'), images: [u('1554118811-1e0d58224f24'), u('1559339352-11d035aa65de'), u('1517248135467-4c7edcad34c4'), u('1600210492486-724fe5c67fb0')],
    desc: 'A Mediterranean-inspired café with arched niches, olive-wood counters and soft limewash walls that glow at golden hour.',
    scope: ['Concept design', 'Bar & counter design', 'Lighting', 'Signage'] },
  { slug: 'courtyard-villa', title: 'Courtyard Villa', cat: 'Residential', location: 'Financial District, Hyderabad', area: '6,100 sq ft', year: 2023, duration: '9 months', client: 'The Mehta Family',
    cover: u('1600210492486-724fe5c67fb0'), images: [u('1600210492486-724fe5c67fb0'), u('1586023492125-27b2c045efd7'), u('1555041469-a586c61ea9bc'), u('1556909114-f6e7ad7d3136')],
    desc: 'Indoor and outdoor blur in this villa with full-height glazing, a reflecting pool and a palette of oak, linen and stone.',
    scope: ['Full home interiors', 'Landscape coordination', 'Custom furniture', 'Art curation'] },
]

export const services = [
  { title: 'Residential Interiors', desc: 'Complete design for apartments, villas and independent homes — from concept to the last cushion.', points: ['Space planning & 3D visualisation', 'Custom furniture & joinery', 'Material & finish selection', 'Turnkey execution'], img: u('1616486338812-3dadae4b4ace', 1000), price: 'From ₹1,800 / sq ft' },
  { title: 'Kitchen & Wardrobes', desc: 'Beautiful, hard-working modular kitchens and storage designed around how you live.', points: ['Ergonomic layouts', 'Premium hardware', 'Appliance integration', '10-year warranty'], img: u('1556911220-bff31c812dba', 1000), price: 'From ₹4.5 L' },
  { title: 'Commercial & Workspace', desc: 'Offices, studios and retail spaces that express your brand and help people do their best work.', points: ['Workplace strategy', 'Acoustic & lighting design', 'Brand integration', 'Phased execution'], img: u('1497366216548-37526070297c', 1000), price: 'On request' },
  { title: 'Design Consultation', desc: 'Not ready for a full project? Book a 90-minute session for expert advice on layout, colour and styling.', points: ['On-site or virtual', 'Mood board', 'Shopping list', 'Follow-up call'], img: u('1555041469-a586c61ea9bc', 1000), price: '₹7,500 per session' },
]

export const process = [
  ['Discover', 'We visit your space, understand your lifestyle, budget and wish-list.'],
  ['Concept', 'Mood boards, layouts and a clear estimate so you know exactly what to expect.'],
  ['Design', 'Detailed 3D renders, drawings and material samples for every room.'],
  ['Build', 'Our in-house team executes with weekly updates and strict quality checks.'],
  ['Style & Handover', 'We style, clean and hand over a home ready to live in.'],
]

export const team = [
  { name: 'Ira Malhotra', role: 'Founder & Principal Designer', img: u('1494790108377-be9c29b29330', 600) },
  { name: 'Kabir Sen', role: 'Head of Architecture', img: u('1507003211169-0a1dd7228f2d', 600) },
  { name: 'Tara Joshi', role: 'Senior Interior Designer', img: u('1534528741775-53994a69daeb', 600) },
  { name: 'Dev Prakash', role: 'Project Manager', img: u('1500648767791-00dcc994a43e', 600) },
]

export const testimonials = [
  { name: 'Ananya Rao', project: 'The Linen Suite', img: u('1544005313-94ddf0286df2', 300), rating: 5, text: 'Ira and her team understood exactly what “calm” meant to us. Every morning in this room feels like a holiday.' },
  { name: 'Vikram Mehta', project: 'Courtyard Villa', img: u('1472099645785-5658abf4ff4e', 300), rating: 5, text: 'Finished on time and on budget — which I didn’t think was possible. The weekly updates kept us completely at ease.' },
  { name: 'Shruti Kulkarni', project: 'Casa Olive Café', img: u('1438761681033-6461ffad8d80', 300), rating: 5, text: 'Our café has become the most photographed spot in Banjara Hills. Footfall went up 40% in the first month.' },
]
