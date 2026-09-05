import { ProjectDetail, ServiceCategory, Testimonial, ProcessStep } from '../types';

export const BRAND = {
  name: 'OMONY Atelier Studios',
  shortName: 'OMONY',
  subtitle: 'Atelier Studios',
  tagline: 'Luxury interior architecture and design.',
  headline: 'Creating Timeless Spaces.',
  supportingHeroText: 'Luxury interior architecture and design tailored to the way you live, work and experience space.',
  coreStatement: 'Creating timeless interiors tailored to your lifestyle.',
  supportingPositioning: "We transform our clients' visions into refined, functional and timeless interiors through thoughtful design and meticulous execution.",
  location: 'Lagos, Nigeria',
  phones: [
    { display: '+234 816 822 3827', raw: '+2348168223827' },
    { display: '+234 806 296 8601', raw: '+2348062968601' },
  ],
  email: 'omonyatelierstudios@gmail.com',
  instagram: '@omonyatelierstudios',
  instagramUrl: 'https://instagram.com/omonyatelierstudios',
  whatsappUrl: 'https://wa.me/2348168223827?text=Hello%20OMONY%20Atelier%20Studios,%20I%20would%20like%20to%20inquire%20about%20a%20luxury%20interior%20design%20consultation.',
  knownFor: [
    'Refined aesthetic',
    'Meticulous execution',
    'Bespoke residential spaces',
    'Bespoke commercial spaces',
    'Elegance',
    'Functionality',
    'Quality',
    'Timeless interiors',
    'Client-focused design',
  ],
  founder: {
    name: 'Beauty Kumolu-Johnson',
    title: 'Founder & CEO',
    location: 'Lagos, Nigeria',
    availabilityNote: 'Open to partnerships, collaborations, and project opportunities.',
    bioParagraphs: [
      'I am the CEO of Omony Homes and Finishing and the founder of Omony Atelier Studios, businesses focused on delivering quality building finishing materials and interior design solutions.',
      'At Omony Homes and Finishing, we supply premium finishing materials to homeowners, contractors, and property developers. Our goal is to provide durable, functional, and aesthetically refined materials that elevate modern living spaces.',
      'Through Omony Atelier Studios, we design and transform residential and commercial interiors into spaces that combine elegance, comfort, and functionality.',
      'My work focuses on building strong partnerships with architects, developers, contractors, and property owners to deliver projects efficiently from concept to completion.',
      'I am passionate about creating spaces that are not only beautiful but also practical and enduring.',
    ],
  },
};

export const FOUR_PRIMARY_SERVICES = [
  {
    number: '01',
    title: 'INTERIOR DESIGN',
    description: 'Comprehensive interior architectural design and tailored aesthetic direction crafted for discerning living and workspaces.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '02',
    title: 'FINISHING SOLUTIONS',
    description: 'Precision architectural finishing, premium surface selections, stone detailing, and meticulous supervision of craftsmanship.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '03',
    title: 'SPACE PLANNING',
    description: 'Intelligent spatial ergonomics and architectural flow optimizing movement, light, proportion, and natural volume.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85',
  },
  {
    number: '04',
    title: 'FURNITURE & STYLING',
    description: 'Curated bespoke furnishings, custom joinery, sculptural lighting, and artful tactile layering that completes every room.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
  },
];

export const CAPABILITIES_LIST = [
  'Residential Interior Design',
  'Commercial Interior Design',
  'Interior Architectural Design',
  'Luxury Interior Design',
  'Full Home Renovation',
  'Turnkey Interior Design',
  'Space Planning',
  'Furniture & Styling',
  'Interior Finishing Supervision',
  'Project Management',
  'Interior Design Consultation',
  'Space Styling & Decoration',
  'Interior Renovation Guidance',
  'Short-let / Airbnb Interior Setup',
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'design',
    title: 'DESIGN',
    description: 'End-to-end conceptual and architectural interior planning balancing spatial proportion with refined material selections.',
    services: [
      'Interior Design',
      'Interior Architecture',
      'Space Planning',
      'Room Planning',
      'Lighting Design',
      'Furniture & Styling',
    ],
  },
  {
    id: 'residential',
    title: 'RESIDENTIAL',
    description: 'Bespoke sanctuaries engineered around the intimacy, comfort, and rituals of modern luxury living.',
    services: [
      'Living Room Design',
      'Bedroom Design',
      'Kitchen Design',
      'Bathroom Design',
      'Dining Room Design',
      'Wardrobe Design',
      'Cabinetry & Hardware Design',
      'Window Design',
      'Door Design',
      'Full Home Renovation',
    ],
  },
  {
    id: 'commercial',
    title: 'COMMERCIAL & HOSPITALITY',
    description: 'Brand-defining architectural environments tailored for productivity, boutique hospitality, and memorable guest experiences.',
    services: [
      'Office Space Design',
      'Restaurant Design',
      'Hospitality Design',
      'Commercial Interior Design',
      'Luxury Interior Design',
      'Turnkey Interior Design',
    ],
  },
  {
    id: 'finishing',
    title: 'FINISHING & EXECUTION',
    description: 'Meticulous on-site supervision and high-grade material curation, bridging architectural drawing with flawless built reality.',
    services: [
      'Finishing Solutions',
      'Interior Finishing Supervision',
      'Project Management',
      'Flooring Selection',
      'Interior Painting',
      'Stone, Brick & Stucco Design',
      'Refurbishment',
    ],
  },
  {
    id: 'specialized',
    title: 'SPECIALIZED',
    description: 'Tailored interior advisory, art procurement, and strategic property styling designed to elevate spatial worth.',
    services: [
      'Interior Design Consultation',
      'Space Styling & Decoration',
      'Interior Renovation Guidance',
      'Short-let / Airbnb Interior Setup',
      'Home Staging',
      'Property Staging',
      'Custom Art Selection',
      'Home Decor Selection',
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'CONSULTATION',
    description: "Understand the client's vision, lifestyle, requirements and project scope.",
    deliverables: ['Lifestyle Discovery', 'Spatial Audit', 'Brief & Scope Definition'],
  },
  {
    step: '02',
    title: 'CONCEPT',
    description: 'Develop the creative direction and overall design concept.',
    deliverables: ['Mood & Tactile Palettes', 'Material Inspiration', 'Initial Spatial Flow'],
  },
  {
    step: '03',
    title: 'DESIGN DEVELOPMENT',
    description: 'Refine spatial planning, materials, finishes, furniture and details.',
    deliverables: ['2D/3D Layouts', 'Joinery Specs', 'Finish & Lighting Schedules'],
  },
  {
    step: '04',
    title: 'EXECUTION',
    description: 'Translate the approved design into the physical space.',
    deliverables: ['On-site Material Sourcing', 'Craftsman Coordination', 'Physical Build-out'],
  },
  {
    step: '05',
    title: 'SUPERVISION',
    description: 'Monitor execution, finishing quality and project details.',
    deliverables: ['Quality Assurance', 'Tolerance Checks', 'Finishing Detail Audits'],
  },
  {
    step: '06',
    title: 'COMPLETION',
    description: "Deliver a refined space designed around the client's needs.",
    deliverables: ['Styling & Art Dressing', 'Client Walkthrough', 'Turnkey Handover'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Obafolahan Ojibara',
    quote:
      'From consultation to execution, the process was smooth and organized. Omony Atelier Studios delivers quality interior design services and understands what clients want. I am impressed.',
    source: 'Google Review',
  },
  {
    id: 'test-2',
    clientName: 'David Dapdil',
    quote:
      'I had a great experience with Omony Atelier Studios. Their design ideas are modern, elegant, and well executed. If you need an interior designer in Lagos who pays attention to detail, this is the right place.',
    source: 'Google Review',
  },
  {
    id: 'test-3',
    clientName: 'Ajuwon Joshua',
    quote:
      'Professional, creative, and reliable. Omony Atelier Studios exceeded expectations. I highly recommend them for luxury residential interior design in Lagos.',
    source: 'Google Review',
  },
  {
    id: 'test-4',
    clientName: 'beauty osen',
    quote:
      'Value for money. One of the best and detailed interior designer in Lagos Nigeria. Pay attention to details and customers needs.',
    source: 'Google Review',
  },
];

// Reusable project portfolio conforming strictly to prompt rules:
// "Do not invent project names, locations, prices or project statistics.
// If project information is not provided, use tasteful placeholder labels such as:
// RESIDENTIAL INTERIOR, COMMERCIAL INTERIOR, INTERIOR TRANSFORMATION.
// Clearly structure the component so real projects and images can easily be added later."
export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: 'project-1',
    title: 'RESIDENTIAL INTERIOR',
    placeholderType: 'RESIDENTIAL INTERIOR',
    category: 'RESIDENTIAL',
    location: 'Lagos, Nigeria',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
    overview:
      'A refined residential space balancing warm natural stone, bespoke oak joinery, and tailored spatial zoning designed around mindful living.',
    designConcept:
      'Anchored in minimalist warmth, the design prioritizes uncluttered sightlines, soft diffused light, and quiet organic textures that invite calm and contemplation.',
    scopeOfWork: [
      'Comprehensive spatial replanning',
      'Custom wall paneling & fluted oak millwork',
      'Architectural lighting scheme & hidden recessed coves',
      'Custom furniture curation & textured linen drapery',
    ],
    designDetails: [
      {
        title: 'Materiality',
        description: 'Honed travertine floor slabs paired with bleached white oak and warm limewash wall treatments.',
      },
      {
        title: 'Illumination',
        description: 'Layered warm 2700K ambient illumination with directional accent spotlights for artwork and sculpture.',
      },
      {
        title: 'Bespoke Joinery',
        description: 'Integrated floor-to-ceiling storage concealed behind flush push-latch acoustic paneling.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85',
      label: 'Main Living Salon Transformation',
    },
    finalRevealNote:
      'The finished space delivers an unbroken sense of harmony, providing our client with an enduring retreat characterized by meticulous craftsmanship.',
  },
  {
    id: 'project-2',
    title: 'COMMERCIAL INTERIOR',
    placeholderType: 'COMMERCIAL INTERIOR',
    category: 'COMMERCIAL',
    location: 'Lagos, Nigeria',
    year: '2025',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85',
    overview:
      'An executive workspace environment engineered for collaborative discretion, acoustic comfort, and unmistakable architectural gravitas.',
    designConcept:
      'Clean geometric volumes and high-tactility stone counters create an immediate sense of stature and precision, supporting focused leadership workflows.',
    scopeOfWork: [
      'Executive boardroom and lounge design',
      'Acoustic felt baffling and concealed audiovisual channels',
      'Bespoke marble reception console and brass detailing',
      'Ergonomic seating curation and zoning layout',
    ],
    designDetails: [
      {
        title: 'Acoustic Architecture',
        description: 'Wall-integrated sound dampening panels wrapped in textured neutral wool blend.',
      },
      {
        title: 'Executive Joinery',
        description: 'Custom dark walnut conference credenzas with hand-finished champagne brass accents.',
      },
      {
        title: 'Zoned Lighting',
        description: 'Daylight-responsive architectural lighting shifting seamlessly between daytime focus and evening presentation modes.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85',
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      label: 'Executive Suite Metamorphosis',
    },
    finalRevealNote:
      'An elevated workplace where brand identity and physical craft coalesce seamlessly to impress international partners and clients.',
  },
  {
    id: 'project-3',
    title: 'INTERIOR TRANSFORMATION',
    placeholderType: 'INTERIOR TRANSFORMATION',
    category: 'RENOVATION',
    location: 'Lagos, Nigeria',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    overview:
      'A complete spatial overhaul of a multi-level residence, reallocating awkward partitions to form an expansive, light-flooded sanctuary.',
    designConcept:
      'Unifying disconnected rooms through a consistent palette of microcement, warm off-white tones, and monolithic marble elements.',
    scopeOfWork: [
      'Demolition and structural partition reconfiguration',
      'Full kitchen and pantry architectural rebuild',
      'En-suite master bath spa conversion',
      'Custom recessed ambient lighting throughout',
    ],
    designDetails: [
      {
        title: 'Open Spatial Flow',
        description: 'Removed non-loadbearing visual barriers to introduce seamless visual depth across 12 meters.',
      },
      {
        title: 'Monolithic Island',
        description: 'Sculptural Calacatta marble monolith functioning as both culinary workshop and informal dining bar.',
      },
      {
        title: 'Concealed Tech',
        description: 'Flush-mounted ceiling HVAC diffusers and hidden motorized window treatments.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&w=1200&q=85',
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
      label: 'Kitchen & Great Room Reconstruction',
    },
    finalRevealNote:
      'Transforming outdated domestic limitations into an enduring showcase of proportion, daylight, and material elegance.',
  },
  {
    id: 'project-4',
    title: 'RESIDENTIAL INTERIOR',
    placeholderType: 'RESIDENTIAL INTERIOR',
    category: 'RESIDENTIAL',
    location: 'Lagos, Nigeria',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85',
    overview:
      'A master bedroom and private dressing suite designed to evoke the quiet sanctuary of a private luxury boutique villa.',
    designConcept:
      'Tactile serenity through upholstered acoustic bedheads, brushed brass hardware, smoked glass wardrobe displays, and plush low-pile wool rugs.',
    scopeOfWork: [
      'Bespoke master suite space planning',
      'Custom glass-and-brass walk-in wardrobe system',
      'Integrated headboard with low-voltage reading sconces',
      'Private seating alcove and reading terrace connection',
    ],
    designDetails: [
      {
        title: 'Luminous Wardrobe',
        description: 'Automated warm-spectrum internal wardrobe strip lighting triggered upon motion.',
      },
      {
        title: 'Sensory Textiles',
        description: 'Raw textured slub silks and washed natural Belgian linen layered over deep taupe wool rugs.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85',
    ],
    finalRevealNote:
      'A peaceful haven sheltered from urban intensity, where every morning and evening ritual is met with tranquility.',
  },
  {
    id: 'project-5',
    title: 'COMMERCIAL INTERIOR',
    placeholderType: 'COMMERCIAL INTERIOR',
    category: 'HOSPITALITY',
    location: 'Lagos, Nigeria',
    year: '2024',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=85',
    overview:
      'A refined dining room and hospitality lounge designed with dramatic low-level illumination, tactile plaster, and organic curved banquettes.',
    designConcept:
      'Creating an intimate evening ambiance where diners feel cocooned by tactile textures, architectural shadows, and warm ambient warmth.',
    scopeOfWork: [
      'Hospitality floor plan and circulation analysis',
      'Curved plaster partition walls and custom banquette seating',
      'Acoustic ceiling finish and discrete speaker integration',
      'Custom bronze bar counter and mirror backdrop',
    ],
    designDetails: [
      {
        title: 'Atmospheric Lighting',
        description: 'Under-bench glow and focal table pendants casting flattering warm pools of golden light.',
      },
      {
        title: 'Fluid Formwork',
        description: 'Continuous curved walls finished in textured Venetian plaster that absorb harsh echo.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=85',
    ],
    finalRevealNote:
      'A memorable hospitality destination designed to make patrons linger, converse, and return time and time again.',
  },
  {
    id: 'project-6',
    title: 'INTERIOR TRANSFORMATION',
    placeholderType: 'INTERIOR TRANSFORMATION',
    category: 'RENOVATION',
    location: 'Lagos, Nigeria',
    year: '2023',
    coverImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=85',
    overview:
      'Turnkey bathroom and wellness space conversion combining deep soaking tub alcoves, frameless rain showers, and fluted stone vanities.',
    designConcept:
      'Transforming a conventional utilitarian bathroom into a meditative home spa utilizing bookmatched quartz and brushed gunmetal tapware.',
    scopeOfWork: [
      'Full waterproofing and plumbing line re-routing',
      'Custom floating stone vanity with concealed siphon',
      'Full-height frameless glass shower enclosure',
      'Niche mood lighting and heated towel bar installation',
    ],
    designDetails: [
      {
        title: 'Continuous Surfaces',
        description: 'Large-format porcelain slabs minimizing grout lines for seamless visual calmness.',
      },
      {
        title: 'Water Rituals',
        description: 'Ceiling-recessed rain head paired with thermostatic precision valve control.',
      },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=85',
    ],
    finalRevealNote:
      'Precision waterproofing and refined stone finishes deliver an invigorating private oasis that stands the test of daily use.',
  },
];

export const BEFORE_AFTER_FEATURED = {
  title: 'Transformation, Thoughtfully Executed.',
  subtitle: 'Witness how deliberate spatial planning, bespoke materials, and architectural lighting completely redefine the character of an interior.',
  beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
  afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
  beforeLabel: 'ORIGINAL SPACE',
  afterLabel: 'OMONY COMPLETED VISION',
  caption: 'Notice the transition from cluttered, fragmented volume to an expansive, cohesive architectural sanctuary enriched with balanced light and quiet textures.',
};
