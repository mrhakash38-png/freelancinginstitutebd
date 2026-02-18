const DOMAIN = 'https://freelancinginstitutebd.com'

export const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Freelancing Institute BD',
  alternateName: 'FIBD',
  url: DOMAIN,
  logo: `${DOMAIN}/branding/logo-fibd.svg`,
  description: "Bangladesh's most trusted freelancing training institute offering courses in Graphic Design, WordPress, Digital Marketing, Content Writing, eCommerce, and Virtual Assistant work.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+880-1700-000000',
    contactType: 'customer service',
    availableLanguage: ['Bangla', 'English'],
  },
  sameAs: [
    'https://www.facebook.com/freelancerhamidurrahman44',
    'https://www.youtube.com/@FreelancerHamidurRahman44',
  ],
  founder: {
    '@type': 'Person',
    name: 'Hamidur Rahman',
    jobTitle: 'Founder & Lead Instructor',
    sameAs: [
      'https://www.facebook.com/freelancerhamidurrahman44',
      'https://www.youtube.com/@FreelancerHamidurRahman44',
    ],
  },
}

export const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Freelancing Institute BD',
  url: DOMAIN,
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${DOMAIN}/courses?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
}

export const homeSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    orgSchema,
    webSiteSchema,
    {
      '@type': 'FAQPage',
      mainEntity: [
        { '@type': 'Question', name: 'What is Freelancing Institute BD?', acceptedAnswer: { '@type': 'Answer', text: 'Freelancing Institute BD is Bangladesh\'s leading online and offline freelancing training institute offering structured courses in Graphic Design, WordPress, Digital Marketing, Content Writing, eCommerce, and more.' } },
        { '@type': 'Question', name: 'Do I need experience to join?', acceptedAnswer: { '@type': 'Answer', text: 'No prior experience required. All courses start from absolute zero with beginner-friendly Bangla instruction.' } },
        { '@type': 'Question', name: 'How much can I earn after the course?', acceptedAnswer: { '@type': 'Answer', text: 'Students typically earn ৳30,000–৳1,20,000+ per month after completing their chosen track and building their marketplace profile.' } },
      ],
    },
  ],
}

export const coursesSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      name: 'Freelancing Courses — Freelancing Institute BD',
      url: `${DOMAIN}/courses`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@type': 'Course', name: 'Professional Graphic Design', description: 'Learn Adobe Photoshop, Illustrator, brand identity and freelancing workflow in 16 weeks.', provider: { '@type': 'Organization', name: 'Freelancing Institute BD' }, courseMode: 'online', educationalLevel: 'Beginner to Advanced', inLanguage: 'bn', offers: { '@type': 'Offer', price: '8000', priceCurrency: 'BDT', availability: 'https://schema.org/InStock' } } },
        { '@type': 'ListItem', position: 2, item: { '@type': 'Course', name: 'WordPress & Web Development', description: 'Master WordPress, Elementor, WooCommerce and deliver client projects in 20 weeks.', provider: { '@type': 'Organization', name: 'Freelancing Institute BD' }, courseMode: 'online', educationalLevel: 'Beginner to Intermediate', inLanguage: 'bn', offers: { '@type': 'Offer', price: '10000', priceCurrency: 'BDT', availability: 'https://schema.org/InStock' } } },
        { '@type': 'ListItem', position: 3, item: { '@type': 'Course', name: 'Digital Marketing for Freelancers', description: 'Learn SEO, Facebook Ads, Google Ads and content strategy in 12 weeks.', provider: { '@type': 'Organization', name: 'Freelancing Institute BD' }, courseMode: 'online', educationalLevel: 'Beginner', inLanguage: 'bn', offers: { '@type': 'Offer', price: '7500', priceCurrency: 'BDT', availability: 'https://schema.org/InStock' } } },
        { '@type': 'ListItem', position: 4, item: { '@type': 'Course', name: 'Content Writing & Copywriting', description: 'Learn SEO writing, copywriting, and build your writing portfolio in 8 weeks.', provider: { '@type': 'Organization', name: 'Freelancing Institute BD' }, courseMode: 'online', educationalLevel: 'Beginner', inLanguage: 'bn', offers: { '@type': 'Offer', price: '5500', priceCurrency: 'BDT', availability: 'https://schema.org/InStock' } } },
        { '@type': 'ListItem', position: 5, item: { '@type': 'Course', name: 'eCommerce & Dropshipping', description: 'Build and scale a Shopify store with supplier sourcing and paid ads in 12 weeks.', provider: { '@type': 'Organization', name: 'Freelancing Institute BD' }, courseMode: 'online', educationalLevel: 'Beginner to Intermediate', inLanguage: 'bn', offers: { '@type': 'Offer', price: '9000', priceCurrency: 'BDT', availability: 'https://schema.org/InStock' } } },
        { '@type': 'ListItem', position: 6, item: { '@type': 'Course', name: 'Data Entry, Excel & Virtual Assistant', description: 'Master Excel, VA tools and land remote work on Upwork in 6 weeks.', provider: { '@type': 'Organization', name: 'Freelancing Institute BD' }, courseMode: 'online', educationalLevel: 'Beginner', inLanguage: 'bn', offers: { '@type': 'Offer', price: '4000', priceCurrency: 'BDT', availability: 'https://schema.org/InStock' } } },
      ],
    },
  ],
}

export const aboutSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    orgSchema,
    {
      '@type': 'Person',
      name: 'Hamidur Rahman',
      jobTitle: 'Founder & Lead Instructor',
      worksFor: { '@type': 'Organization', name: 'Freelancing Institute BD' },
      description: 'Top-rated freelancer and founder of Freelancing Institute BD. Teaches digital marketing, freelancing strategy and marketplace optimization.',
      sameAs: [
        'https://www.facebook.com/freelancerhamidurrahman44',
        'https://www.youtube.com/@FreelancerHamidurRahman44',
      ],
    },
  ],
}

export const admissionSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Do I need prior experience to join?', acceptedAnswer: { '@type': 'Answer', text: 'No. All our courses start from absolute zero. We assume no prior knowledge.' } },
    { '@type': 'Question', name: 'Are classes online or in-person?', acceptedAnswer: { '@type': 'Answer', text: 'Both options available. Live online via Zoom plus optional in-person sessions at our Dhaka center.' } },
    { '@type': 'Question', name: 'When does the next batch start?', acceptedAnswer: { '@type': 'Answer', text: 'New batches start every month. Apply now to reserve your seat.' } },
    { '@type': 'Question', name: 'Will I get a certificate?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Upon successful completion you receive a verified certificate from Freelancing Institute BD.' } },
    { '@type': 'Question', name: 'What if I miss a class?', acceptedAnswer: { '@type': 'Answer', text: 'All live classes are recorded and available in your student portal for 1 year.' } },
    { '@type': 'Question', name: 'Is there an installment option?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer easy 2–3 installment plans for all courses.' } },
  ],
}

export const successSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Student Success Stories — Freelancing Institute BD',
  description: 'Real student testimonials and income proof from graduates of Freelancing Institute BD.',
  url: `${DOMAIN}/success-stories`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, item: { '@type': 'Review', author: { '@type': 'Person', name: 'Mehedi Hasan' }, reviewBody: 'I was a rickshaw driver\'s son with no computer background. After 4 months at FIBD, I\'m earning more than my entire family combined.', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, itemReviewed: { '@type': 'Organization', name: 'Freelancing Institute BD' } } },
    { '@type': 'ListItem', position: 2, item: { '@type': 'Review', author: { '@type': 'Person', name: 'Jahangir Alam' }, reviewBody: 'I quit my government job after 6 months of freelancing. My monthly income is now 4x what I earned before.', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, itemReviewed: { '@type': 'Organization', name: 'Freelancing Institute BD' } } },
  ],
}

export function blogPostSchema(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.img,
    author: { '@type': 'Person', name: post.author },
    publisher: { '@type': 'Organization', name: 'Freelancing Institute BD', logo: { '@type': 'ImageObject', url: `${DOMAIN}/branding/logo-fibd.svg` } },
    datePublished: post.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${DOMAIN}/blog/${post.slug}` },
    keywords: 'freelancing bangladesh, digital marketing course, upwork fiverr tips',
  }
}
