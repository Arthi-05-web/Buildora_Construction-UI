// All page content lives here. To use real photos, drop files into /public/images
// and set the `img` fields, e.g. img: '/images/project-1.jpg'

export const nav = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'FAQ', href: '#' },
  { label: 'Blog', href: '#' },
  {
    label: 'Pages',
    children: [
      { label: 'Shop', href: '#' },
      { label: 'Cart', href: '#' },
      { label: 'Wishlist', href: '#' },
      { label: 'My account', href: '#' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export const slides = [
  {
    id: 1,
    title: ['Start new', 'projects'],
    text: 'Don\u2019t get framed by the competition, trust our solid reputation.',
    img: '/images/image1.png',
  },
  {
    id: 2,
    title: ['We build it', 'right'],
    text: 'Committed to superior quality and results on every site.',
    img: '/images/image2.png',
  },
]

export const features = [
  { icon: 'engineer', title: 'Building Engineering', text: 'Design, assessment and construction management for the built environment, handled by one accountable team.' },
  { icon: 'safety', title: 'Safety First', text: 'Daily briefings, audited equipment and strict procedures keep every worker and visitor safe on site.' },
  { icon: 'road', title: 'Road Construction', text: 'New roads begin with a stable base, then asphalt or concrete is laid to form a durable, bonded surface.' },
]

export const ticks = ['Excellent engineering', 'Modern & up to date', 'Grade #1 materials', 'Structures with long life']

export const services = [
  { title: 'Building', text: 'A building is a structure with a roof and walls, designed to stand for generations.', img: '/images/service1.png' },
  { title: 'Road Construction', text: 'Asphalt, concrete, soil stabilisation and paving for roads, car parks and access routes.', img: '/images/service2.png' },
  { title: 'Maintenance', text: 'Scheduled inspections and repairs that keep your property safe and working.', img: '/images/service3.png' },
]

export const steps = [
  { title: 'Agency / Bidding', text: 'We review designs, confirm permits and agree scope and cost.' },
  { title: 'Construction', text: 'Crews mobilise, materials arrive on time and progress is reported weekly.' },
  { title: 'Project Execution', text: 'Final inspection, handover and move-in support for your team.' },
]

export const projects = [
  { title: 'Riverview Green Building', tags: 'Building, Road Construction' },
  { title: 'The Harbour Hotel', tags: 'Building, Construction' },
  { title: 'Villa Rustica Renovation', tags: 'Construction, Road Construction' },
  { title: 'Hillside Plot Works', tags: 'Building, Maintenance' },
  { title: 'Kitchen And Living Room', tags: 'Architecture, Building' },
  { title: 'House Under The Palms', tags: 'Construction, Road Construction' },
  { title: 'Green House', tags: 'Construction, Road Construction' },
  { title: 'Inside Renovation', tags: 'Construction, Road Construction' },
].map((p, i) => ({ ...p, img: `/images/project${i + 1}.png`, id: i }))

export const testimonials = [
  { name: 'Richard Dowson', text: 'Great experience from the planning stage to the final result. The crew listened, gave me ideas and helped me turn my backyard into a place to relax.', img: '/images/customer1.png' },
  { name: 'Lisa Jordan', text: 'Thank you for being so fun to work with, and for bringing smiles and solutions to our 16th floor build every single week.', img: '/images/customer3.png' },
  { name: 'Michael Anderson', text: 'A critical partner on our office park redevelopment. The project managers and supervisors are unmatched by any contractor I have used in 15 years.', img: '/images/customer2.png' },
]

export const logos = ['NORTHGATE', 'BRICKLANE', 'STEELCO', 'URBANHAUS', 'CIVICWORKS', 'GRANITE & CO']
