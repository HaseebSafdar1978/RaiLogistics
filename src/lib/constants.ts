export const BUSINESS = {
  name: 'Rai Logistics',
  parentCompany: 'Rai Technologies LLC',
  phone: '(307) 303-9797',
  phoneHref: 'tel:+13073039797',
  email: 'support@railogistics.com',
  emailHref: 'mailto:support@railogistics.com',
  address: {
    street: '312 W 2ND ST STE 5083',
    city: 'Casper',
    state: 'WY',
    zip: '82601',
    full: '312 W 2ND ST STE 5083, Casper, WY 82601',
  },
  serviceArea: 'All over the United States',
  tagline: 'Premium Truck Dispatching Services',
  description: 'Professional truck dispatch services for Box Trucks, Dry Vans, Flatbeds, and Reefers. Nationwide coverage with dedicated dispatchers.',
} as const;

export const NAVIGATION = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Equipment', href: '/equipment' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'About', href: '/about' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Contact', href: '/contact' },
] as const;

export const EQUIPMENT_TYPES = [
  {
    id: 'box-truck',
    name: 'Box Trucks',
    percentage: '6%',
    description: 'Specialized dispatch for box truck operations, from local deliveries to long-haul routes.',
    benefits: ['Local & regional loads', 'High-volume opportunities', 'Flexible scheduling'],
  },
  {
    id: 'dry-van',
    name: 'Dry Vans',
    percentage: '5%',
    description: 'Expert dispatch services for dry van carriers with access to premium freight.',
    benefits: ['Coast-to-coast lanes', 'Consistent freight', 'Rate negotiation expertise'],
  },
  {
    id: 'flatbed',
    name: 'Flatbeds',
    percentage: '5%',
    description: 'Dedicated dispatching for flatbed operators with specialized load matching.',
    benefits: ['Specialized cargo support', 'Premium rates', 'Equipment-specific matching'],
  },
  {
    id: 'reefer',
    name: 'Reefers',
    percentage: '4%',
    description: 'Temperature-controlled freight dispatch with time-sensitive load expertise.',
    benefits: ['Temperature-controlled loads', 'Premium produce lanes', 'Time-critical shipments'],
  },
] as const;

export const SERVICES = [
  {
    id: 'rate-negotiation',
    title: 'Rate Negotiation',
    description: 'We fight for the best rates on every load, ensuring you get paid what your work is worth.',
    icon: 'DollarSign',
  },
  {
    id: 'load-booking',
    title: 'Load Booking',
    description: 'From load boards to direct broker relationships, we find and secure the best freight for your equipment.',
    icon: 'Package',
  },
  {
    id: 'broker-communication',
    title: 'Broker Communication',
    description: 'We handle all broker and shipper communications, rate confirmations, and negotiations.',
    icon: 'MessageSquare',
  },
  {
    id: 'route-strategy',
    title: 'Route & Lane Strategy',
    description: 'Strategic lane planning to maximize miles, minimize deadhead, and boost your weekly gross.',
    icon: 'Route',
  },
  {
    id: 'paperwork-support',
    title: 'Paperwork Support',
    description: 'From rate confirmations to BOLs, we ensure your documentation is always in order.',
    icon: 'FileText',
  },
  {
    id: 'scheduling',
    title: 'Scheduling & Follow-ups',
    description: 'Appointment scheduling, check calls, and proactive communication to keep loads moving.',
    icon: 'Calendar',
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Marcus Johnson',
    location: 'Atlanta, GA',
    equipment: 'Dry Van',
    quote: 'Switched to Rai Logistics three months ago and my weekly gross went up by almost $2,000. Their rate negotiation is top-notch.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Chen',
    location: 'Los Angeles, CA',
    equipment: 'Flatbed',
    quote: 'Finally found a dispatch service that understands flatbed operations. They consistently find loads that match my equipment perfectly.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Robert Williams',
    location: 'Houston, TX',
    equipment: 'Reefer',
    quote: 'The team at Rai keeps me moving with quality reefer loads. No more sitting at truck stops waiting for loads.',
    rating: 5,
  },
  {
    id: 4,
    name: 'James Anderson',
    location: 'Chicago, IL',
    equipment: 'Box Truck',
    quote: 'Best decision I made for my box truck business. Professional service and they always answer when I call.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Michael Thompson',
    location: 'Phoenix, AZ',
    equipment: 'Dry Van',
    quote: 'Their lane strategy helped me reduce my deadhead miles by 30%. I am making more while driving less empty.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Anthony Davis',
    location: 'Dallas, TX',
    equipment: 'Flatbed',
    quote: 'Transparent pricing and no hidden fees. What you see is what you get. Great communication too.',
    rating: 5,
  },
  {
    id: 7,
    name: 'Christopher Brown',
    location: 'Denver, CO',
    equipment: 'Reefer',
    quote: 'The setup was quick and easy. Within 48 hours I had my first load booked at a rate better than I expected.',
    rating: 5,
  },
  {
    id: 8,
    name: 'Daniel Garcia',
    location: 'Miami, FL',
    equipment: 'Box Truck',
    quote: 'As a new owner-operator, having Rai in my corner gave me the confidence to grow my business the right way.',
    rating: 5,
  },
  {
    id: 9,
    name: 'William Martinez',
    location: 'Seattle, WA',
    equipment: 'Dry Van',
    quote: 'Consistent loads, fair rates, and a dispatcher who actually cares about my success. Cannot ask for more.',
    rating: 5,
  },
  {
    id: 10,
    name: 'Joseph Taylor',
    location: 'Nashville, TN',
    equipment: 'Flatbed',
    quote: 'They handle all the paperwork and broker calls so I can focus on driving. Worth every penny.',
    rating: 5,
  },
  {
    id: 11,
    name: 'Kevin Robinson',
    location: 'Detroit, MI',
    equipment: 'Reefer',
    quote: 'Professional team that treats drivers with respect. They fight for better rates and it shows in my paycheck.',
    rating: 5,
  },
  {
    id: 12,
    name: 'Brian Wilson',
    location: 'Minneapolis, MN',
    equipment: 'Box Truck',
    quote: 'I have tried three other dispatch services before. Rai is hands down the most reliable and professional.',
    rating: 5,
  },
] as const;

export const FAQS = [
  {
    id: 1,
    question: 'How quickly can I get started with Rai Logistics?',
    answer: 'Most carriers are fully set up and dispatched within 24-48 hours. We just need your MC authority info, insurance details, and preferred lanes. Give us a call and we can often have you on a load the same week.',
  },
  {
    id: 2,
    question: 'What documents do I need to get started?',
    answer: 'You will need your MC Authority number, Certificate of Insurance (COI), W-9 form, and a signed dispatch agreement. Our team will guide you through the entire process during your setup call.',
  },
  {
    id: 3,
    question: 'Do you work with owner-operators nationwide?',
    answer: 'Yes! We dispatch trucks all over the United States. Whether you run dedicated lanes or want flexibility to go where the best freight is, we have got you covered coast to coast.',
  },
  {
    id: 4,
    question: 'What is the difference between contract and percentage plans?',
    answer: 'Our contract plan is a fixed monthly fee with dedicated support and all services included. The percentage plan charges a small percentage of your gross (4-6% depending on equipment type). Many drivers prefer percentage because you only pay when you are making money.',
  },
  {
    id: 5,
    question: 'Can I cancel my service at any time?',
    answer: 'Yes. We believe in earning your business, not trapping you in contracts. Our monthly agreements can be cancelled with proper notice. We are confident our results will speak for themselves.',
  },
  {
    id: 6,
    question: 'Do you provide factoring support?',
    answer: 'While we are not a factoring company, we work seamlessly with most factoring companies. We ensure all paperwork is completed correctly and submitted promptly so your payments process smoothly.',
  },
  {
    id: 7,
    question: 'How do you find loads for my truck?',
    answer: 'We use a combination of load boards (DAT, Truckstop, etc.), direct broker relationships, and our network of shippers. Our dispatchers are skilled at finding the best paying loads for your specific equipment and preferred lanes.',
  },
  {
    id: 8,
    question: 'What equipment types do you dispatch?',
    answer: 'We specialize in Box Trucks, Dry Vans, Flatbeds, and Reefers. Each equipment type has dedicated dispatchers who understand the unique needs and best freight opportunities for that trailer type.',
  },
  {
    id: 9,
    question: 'Will I have a dedicated dispatcher?',
    answer: 'Absolutely. You will be assigned a dedicated dispatcher who learns your preferences, equipment, and goals. You will have direct phone access to your dispatcher during business hours.',
  },
  {
    id: 10,
    question: 'How do detention requests work?',
    answer: 'We track all appointments and will file detention requests on your behalf when loads take longer than the contracted free time. We negotiate for every dollar you are owed.',
  },
  {
    id: 11,
    question: 'What are your business hours?',
    answer: 'Our dispatch team is available Monday through Saturday. We understand trucking does not stop, so we make sure you have support when you need it most.',
  },
  {
    id: 12,
    question: 'Do you handle the rate confirmation paperwork?',
    answer: 'Yes. We handle rate confirmations, carrier packets, and coordinate all broker communications. You focus on driving safely while we handle the back-office work.',
  },
  {
    id: 13,
    question: 'What makes Rai Logistics different from other dispatch services?',
    answer: 'We combine affordable pricing with premium service. Our dispatchers are experienced professionals, not call center agents. We treat every driver like a partner, not a number.',
  },
  {
    id: 14,
    question: 'How are your percentages so competitive?',
    answer: 'We have built an efficient operation that keeps overhead low. Those savings go directly to our drivers. We believe in providing value, not charging the highest prices in the market.',
  },
] as const;

export const STATS = [
  { label: 'Loads Booked Monthly', value: '500+', prefix: '' },
  { label: 'States Covered', value: '48', prefix: '' },
  { label: 'Avg Weekly Gross Increase', value: '15', prefix: '', suffix: '%' },
  { label: 'Driver Satisfaction', value: '98', prefix: '', suffix: '%' },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Quick Setup Call',
    description: 'Call us and we will gather your MC info, insurance, and preferences. Setup typically takes 24-48 hours.',
  },
  {
    step: 2,
    title: 'Dispatch & Negotiation',
    description: 'Your dedicated dispatcher finds loads, negotiates rates, and books freight that fits your goals.',
  },
  {
    step: 3,
    title: 'Confirmations & Paperwork',
    description: 'We handle rate confirmations, broker communication, and ensure all documentation is complete.',
  },
  {
    step: 4,
    title: 'Weekly Optimization',
    description: 'We continuously analyze your routes and rates to find opportunities to increase your earnings.',
  },
] as const;

export const PRICING_PLANS = {
  weekly: {
    name: 'Weekly Flat Rate',
    subtitle: 'Simple Weekly Billing',
    description: 'Predictable weekly dispatch fee per truck. No percentage cuts from your loads.',
    rates: [
      { equipment: 'Box Truck', rate: '$250', period: '/week' },
      { equipment: 'Dry Van', rate: '$300', period: '/week' },
      { equipment: 'Flatbed', rate: '$300', period: '/week' },
      { equipment: 'Reefer', rate: '$350', period: '/week' },
    ],
    features: [
      'Load sourcing & booking',
      'Rate negotiation',
      'Broker communication',
      'Dispatch coordination',
      'Paperwork support (rate confirmations, email follow-ups)',
      'Lane strategy suggestions',
      'Dedicated dispatcher support',
    ],
    note: 'Weekly rate is billed per truck. Cancel anytime with notice (details in Terms).',
    cta: 'Call Now',
    ctaSecondary: 'Get Started',
  },
  contract: {
    name: 'Contract Plan',
    subtitle: '1-Month Dispatch Contract',
    description: 'Fixed monthly fee with full-service dispatch support. Renewable monthly or yearly.',
    features: [
      'Dedicated dispatcher assignment',
      'Lane planning & strategy',
      'Rate negotiation on every load',
      'Broker & shipper communication',
      'Rate confirmation handling',
      'Paperwork & compliance support',
      'Appointment scheduling',
      'Detention request assistance',
      'Weekly performance reviews',
    ],
    cta: 'Call for Pricing',
  },
  percentage: {
    name: 'Percentage Plan',
    subtitle: 'Pay Per Gross',
    description: 'Percentage of your gross load pay. You only pay when you are making money.',
    rates: [
      { equipment: 'Box Truck', rate: '6%' },
      { equipment: 'Flatbed', rate: '5%' },
      { equipment: 'Dry Van', rate: '5%' },
      { equipment: 'Reefer', rate: '4%' },
    ],
    features: [
      'All services included',
      'No upfront costs',
      'Pay only when you earn',
      'Same dedicated support',
      'Transparent billing',
    ],
    note: 'Percentage depends on equipment type.',
    cta: 'Start Today',
  },
} as const;

export const WEEKLY_PLAN_FAQS = [
  {
    id: 101,
    question: 'When do you bill for the weekly plan?',
    answer: 'We bill weekly, typically at the beginning of each dispatch week. You can choose your preferred billing day during setup. Payment is due before dispatch services begin for that week.',
  },
  {
    id: 102,
    question: 'Is the weekly rate per truck?',
    answer: 'Yes, the weekly flat rate is billed per truck. If you have multiple trucks, each truck is billed separately at the rate for its equipment type.',
  },
  {
    id: 103,
    question: 'Can I switch plans later?',
    answer: 'Absolutely! You can switch between our Weekly Flat Rate, Contract, or Percentage plans at any time. Just give us notice and we will adjust your billing accordingly starting the next billing period.',
  },
  {
    id: 104,
    question: 'Do you handle all states?',
    answer: 'Yes, we provide dispatch services across all 48 contiguous states. Whether you run regional routes or coast-to-coast lanes, we have got you covered nationwide.',
  },
  {
    id: 105,
    question: 'How quickly can you start dispatching my truck?',
    answer: 'Most carriers are fully set up and dispatched within 24-48 hours. We just need your MC authority info, insurance details, and preferred lanes. Call us and we can often have you on a load the same week.',
  },
] as const;
