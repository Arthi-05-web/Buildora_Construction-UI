import { useEffect, useState } from 'react'
import {
  Alert, Button, Card, Carousel, Col, Container, Form, Modal, Nav, NavDropdown, Navbar, Row,
} from 'react-bootstrap'
import Icon from './Icon.jsx'
import { Reveal, Img } from './hooks.jsx'
import { nav, slides, features, ticks, services, steps, projects, testimonials, logos } from './data.js'

const PHONE = '+91 9876543201'
const socials = [
  { name: 'facebook', url: 'https://www.facebook.com/' },
  { name: 'twitter', url: 'https://twitter.com/' },
  { name: 'instagram', url: 'https://www.instagram.com/' },
  { name: 'linkedin', url: 'https://www.linkedin.com/' },
]

function TopBar() {
  return (
    <div className="topbar py-2 small">
      <Container className="d-flex justify-content-center justify-content-sm-between align-items-center gap-3">
        <span>
          Have any questions? Call us <a href="tel:+91 9876543201">{PHONE}</a>
        </span>
        <span className="d-none d-sm-flex gap-3">
          {socials.map((s) => (
            <a key={s.name} href={s.url} aria-label={s.name} target="_blank" rel="noreferrer">
              <Icon name={s.name} size={16} />
            </a>
          ))}
        </span>
      </Container>
    </div>
  )
}

function Header() {
  const [expanded, setExpanded] = useState(false)
  const [search, setSearch] = useState(false)
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = (e, href) => {
    if (href === '#') e.preventDefault()
    setExpanded(false)
  }

  return (
    <>
      <Navbar expand="lg" sticky="top" expanded={expanded} onToggle={setExpanded} className={`site-nav ${stuck ? 'is-stuck' : ''}`}>
        <Container>
          <Navbar.Brand href="#home" className="logo" onClick={(e) => close(e, '#home')}>
            <b>BC</b>Buildora <br></br>Constructions
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-nav" aria-label="Toggle menu" />
          <Navbar.Collapse id="main-nav">
            <Nav className="ms-auto align-items-lg-center">
              {nav.map((n) =>
                n.children ? (
                  <NavDropdown key={n.label} title={n.label} id="pages-dropdown" className="nav-hover">
                    {n.children.map((c) => (
                      <NavDropdown.Item key={c.label} href={c.href} onClick={(e) => close(e, c.href)}>
                        {c.label}
                      </NavDropdown.Item>
                    ))}
                  </NavDropdown>
                ) : (
                  <Nav.Link key={n.label} href={n.href} onClick={(e) => close(e, n.href)}>
                    {n.label}
                  </Nav.Link>
                )
              )}
            </Nav>
            <div className="d-flex align-items-center gap-3 ms-lg-4 mt-3 mt-lg-0">
              <Button variant="link" className="p-1 text-body" aria-label="Search" onClick={() => { setSearch(true); setExpanded(false) }}>
                <Icon name="search" />
              </Button>
              <Button variant="brand" size="sm" href="#contact" onClick={() => setExpanded(false)}>
                Free Consultation
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={search} onHide={() => setSearch(false)} fullscreen contentClassName="search-modal" aria-label="Search">
        <Modal.Body className="d-flex flex-column align-items-center justify-content-center">
          <Button variant="link" className="search-x" aria-label="Close search" onClick={() => setSearch(false)}>
            <Icon name="close" size={30} />
          </Button>
          <Form className="w-100 text-center" style={{ maxWidth: 760 }} onSubmit={(e) => { e.preventDefault(); setSearch(false) }}>
            <Form.Control autoFocus className="search-input" placeholder="Type keyword to search ..." aria-label="Search keyword" />
            <p className="mt-3 mb-0 text-secondary">
              Trending searches: <a href="#">place</a> <a href="#">silence</a> <a href="#">create</a> <a href="#">logo</a>
            </p>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <Carousel interval={6500} fade pause="hover" prevLabel="Previous slide" nextLabel="Next slide">
        {slides.map((s) => (
          <Carousel.Item key={s.id}>
            <Img src={s.img} alt="" className="hero-bg" />
            <div className="hero-shade" />
            <div className="hero-in">
              <Container>
                <h1>{s.title[0]}<br />{s.title[1]}</h1>
                <p className="lead">{s.text}</p>
                <div className="d-flex align-items-center flex-wrap gap-4 mt-3">
                  <Button variant="brand" size="lg" href="#contact">Free Consultation</Button>
                  <a className="play" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                    <span><Icon name="play" size={18} /></span>Why choose us?
                  </a>
                </div>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  )
}

function Features() {
  return (
    <section className="features">
      <Container>
        <Row className="g-0 features-box">
          {features.map((f, n) => (
            <Reveal key={f.title} className="col-md-4 fcard" delay={n * 120}>
              <span className="fcard-icon"><Icon name={f.icon} size={34} /></span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
              <a href="#services" className="fw-semibold">Learn More ...</a>
            </Reveal>
          ))}
        </Row>
      </Container>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="sec">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <Reveal className="about-img">
              <Img src="/images/about.png " alt="Our team on site" />
              <div className="badge-years"><b>20+</b>years of experience</div>
            </Reveal>
          </Col>
          <Col lg={6}>
            <Reveal delay={120}>
              <span className="kick">About our company</span>
              <h2>Always dedicated and devoted</h2>
              <p>We began as a small crew and grew by doing one thing well: finishing what we promise. Clients stay with us because we price honestly, communicate early and stand behind our work.</p>
              <Row as="ul" className="list-unstyled g-3 mt-2">
                {ticks.map((t) => (
                  <Col as="li" sm={6} key={t} className="tick">
                    <Icon name="check" size={16} stroke={3} />{t}
                  </Col>
                ))}
              </Row>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

function Services() {
  return (
    <>
      <section id="services" className="sec bg-alt">
        <Container>
          <Reveal className="head">
            <span className="kick">What we can do for you</span>
            <h2>Our construction services</h2>
          </Reveal>
          <Row className="g-4">
            {services.map((s, n) => (
              <Col md={6} lg={4} key={s.title}>
                <Reveal className="h-100" delay={n * 120}>
                  <Card className="svc-card h-100">
                    <div className="svc-img"><Img src={s.img} alt={s.title} /></div>
                    <Card.Body className="p-4">
                      <Card.Title as="h3">{s.title}</Card.Title>
                      <Card.Text>{s.text}</Card.Text>
                      <a href="#contact" className="fw-semibold">Read More</a>
                    </Card.Body>
                  </Card>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <div className="cta py-5">
        <Container className="d-flex justify-content-between align-items-center flex-wrap gap-3">
          <div>
            <h3 className="mb-1">Building a dream shouldn't be a nightmare!</h3>
            <p className="mb-0">We transform ideas and visions into winning projects.</p>
          </div>
          <Button variant="dark" size="lg" href="#contact">Free Consultation</Button>
        </Container>
      </div>
    </>
  )
}

function Process() {
  return (
    <section className="sec">
      <Container>
        <Reveal className="head">
          <span className="kick">How?</span>
          <h2>How it works in construction?</h2>
          <p>Three stages, one point of contact from first call to handover.</p>
        </Reveal>
        <Row className="g-4">
          {steps.map((s, n) => (
            <Reveal key={s.title} className="col-md-4" delay={n * 120}>
              <div className="step">
                <em>0{n + 1}</em>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </Row>
      </Container>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="sec bg-alt">
      <Container>
        <Reveal className="head">
          <span className="kick">We are professional</span>
          <h2>Our latest projects</h2>
        </Reveal>
        <Row className="g-2">
          {projects.map((p) => (
            <Col xs={6} lg={3} key={p.id}>
              <Reveal as="a" href="#projects" className="pitem" delay={(p.id % 4) * 80}>
                <Img src={p.img} alt={p.title} />
                <span className="pitem-cap"><b>{p.title}</b><small>{p.tags}</small></span>
              </Reveal>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

function Quote() {
  const empty = { name: '', email: '', subject: '', dept: 'Business', msg: '' }
  const [v, setV] = useState(empty)
  const [err, setErr] = useState({})
  const [sent, setSent] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const er = {}
    if (!v.name.trim()) er.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) er.email = 'Please enter a valid email.'
    setErr(er)
    setSent(false)
    if (Object.keys(er).length === 0) {
      setSent(true)
      setV(empty)
    }
  }

  return (
    <section id="contact" className="sec quote">
      <Container>
        <Row className="align-items-center g-5">
          <Col lg={6}>
            <Reveal>
              <span className="kick kick-light">Interested in construction?</span>
              <h2>Request a free and fair quote</h2>
              <p>Tell us what you&rsquo;re planning. We reply within one working day with clear next steps.</p>
            </Reveal>
          </Col>
          <Col lg={6}>
            <Reveal delay={120}>
              <Form noValidate onSubmit={submit}>
                <Row className="g-3">
                  <Col md={6}>
                    <Form.Group controlId="q-name">
                      <Form.Label>Your Name (required)</Form.Label>
                      <Form.Control value={v.name} onChange={set('name')} isInvalid={!!err.name} />
                      <Form.Control.Feedback type="invalid">{err.name}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="q-mail">
                      <Form.Label>Your Email (required)</Form.Label>
                      <Form.Control type="email" value={v.email} onChange={set('email')} isInvalid={!!err.email} />
                      <Form.Control.Feedback type="invalid">{err.email}</Form.Control.Feedback>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="q-sub">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control value={v.subject} onChange={set('subject')} />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="q-dept">
                      <Form.Label>Department</Form.Label>
                      <Form.Select value={v.dept} onChange={set('dept')}>
                        <option>Business</option><option>Personal</option><option>Support</option><option>Others</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="q-msg">
                      <Form.Label>Your Message</Form.Label>
                      <Form.Control as="textarea" rows={4} value={v.msg} onChange={set('msg')} />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Button type="submit" variant="brand" size="lg">Send Message</Button>
                    {sent && <Alert variant="success" className="mt-3 mb-0" role="status">Thank you! Your message has been sent.</Alert>}
                  </Col>
                </Row>
              </Form>
            </Reveal>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="sec">
      <Container>
        <Reveal className="head">
          <span className="kick">Testimonials</span>
          <h2>See what says our happy clients</h2>
        </Reveal>
        <Reveal>
          <Carousel variant="dark" interval={7000} className="tst-carousel" prevLabel="Previous testimonial" nextLabel="Next testimonial">
            {testimonials.map((t) => (
              <Carousel.Item key={t.name}>
                <figure className="tst-item">
                  <Img src={t.img} alt={t.name} className="tst-pic" />
                  <blockquote>&ldquo;{t.text}&rdquo;</blockquote>
                  <figcaption>- {t.name}</figcaption>
                </figure>
              </Carousel.Item>
            ))}
          </Carousel>
        </Reveal>
        <div className="logos" aria-label="Clients">
          <div className="logos-track">
            {[...logos, ...logos].map((l, n) => (<span key={n}>{l}</span>))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="text-center">
        <a className="logo logo-light" href="#home"><b>BC</b>Buildora Constructions</a>
        <p className="mx-auto mb-4" style={{ maxWidth: 560 }}>
          A company is any entity that engages in business. Companies can be structured as a sole proprietorship, a partnership, or a corporation.
        </p>
        <div className="d-flex justify-content-center gap-3 mb-4">
          {socials.map((s) => (
            <a key={s.name} href={s.url} className="soc" aria-label={s.name} target="_blank" rel="noreferrer">
              <Icon name={s.name} size={18} />
            </a>
          ))}
        </div>
        <div className="footer-bar d-flex justify-content-center justify-content-sm-between flex-wrap gap-2 py-3 small">
          <span>&copy; {new Date().getFullYear()} Buildora Constructions</span>
          <span className="d-flex gap-3">
            <a href="#contact">Contact Us</a><a href="#about">About</a><a href="#">Privacy Policy</a>
          </span>
        </div>
      </Container>
    </footer>
  )
}

function Extras() {
  const [top, setTop] = useState(false)
  const [cookie, setCookie] = useState(() => {
    try { return !localStorage.getItem('cookie-ok') } catch { return true }
  })
  useEffect(() => {
    const f = () => setTop(window.scrollY > 600)
    window.addEventListener('scroll', f, { passive: true })
    return () => window.removeEventListener('scroll', f)
  }, [])
  const accept = () => {
    try { localStorage.setItem('cookie-ok', '1') } catch { /* storage unavailable */ }
    setCookie(false)
  }
  return (
    <>
      {top && (
        <Button variant="brand" className="totop" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Icon name="up" size={22} />
        </Button>
      )}
      {cookie && (
        <div className="cookie" role="region" aria-label="Cookie notice">
          <span>This website uses cookies to improve user experience.</span>
          <Button variant="brand" size="sm" onClick={accept}>Accept and close</Button>
        </div>
      )}
    </>
  )
}

export default function App() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Process />
        <Projects />
        <Quote />
        <Testimonials />
      </main>
      <Footer />
      <Extras />
    </>
  )
}
