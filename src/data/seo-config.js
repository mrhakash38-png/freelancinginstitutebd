// Advanced SEO Configuration with Focus Keywords & Meta Data
export const seoPages = {
  home: {
    canonical: '/',
    title: 'Freelancing Course in Bangladesh | FIBD',
    description: 'Learn freelancing online at Freelancing Institute BD. 5,000+ students trained in Graphic Design, WordPress, Digital Marketing. Bangla mentorship, real projects, job support. Enroll today & start earning.',
    keywords: 'freelancing course bangladesh, learn freelancing online, wordpress training, graphic design course, digital marketing training, upwork fiverr training',
    focusKeyword: 'freelancing course bangladesh',
  },
  courses: {
    canonical: '/courses/',
    title: 'Freelancing Courses in Bangladesh | FIBD',
    description: 'Structured freelancing courses: Graphic Design, WordPress, Digital Marketing, Content Writing, eCommerce, Virtual Assistant. ৳4,000–৳10,000. Live Bangla classes, job-ready skills.',
    keywords: 'freelancing courses, graphic design course, wordpress training, digital marketing course, content writing course, ecommerce course, virtual assistant training',
    focusKeyword: 'freelancing courses bangladesh',
  },
  services: {
    canonical: '/services/',
    title: 'Freelancing Training Services in Bangladesh | FIBD',
    description: 'Freelancing services: courses, mentorship, Upwork/Fiverr profile setup, portfolio building, client acquisition, corporate training. Transform your skills into income.',
    keywords: 'freelancing services, freelancing training, upwork training, fiverr training, portfolio building, profile optimization, freelancing mentorship',
    focusKeyword: 'freelancing training services bangladesh',
  },
  admission: {
    canonical: '/admission/',
    title: 'Apply for Freelancing Course | FIBD Admission 2026',
    description: 'Apply for Freelancing Institute BD admission 2026. Free counseling, flexible payment plans, Bangla medium courses. Limited seats per batch. Enroll now & start your freelancing journey.',
    keywords: 'freelancing course admission, apply online course, free counseling, flexible payment, course enrollment, batch admission, limited seats',
    focusKeyword: 'freelancing course admission bangladesh',
  },
  about: {
    canonical: '/about/',
    title: 'About Freelancing Institute BD | Founded 2019',
    description: 'Learn about FIBD: Founded 2019 by top-rated freelancer Hamidur Rahman. 5,000+ students trained, led by active freelancers, mission to empower Bangladesh through freelancing skills.',
    keywords: 'freelancing institute bd, hamidur rahman, freelancing institute founder, about fibd, freelancing training institute, bangladeshi freelancer',
    focusKeyword: 'freelancing institute bd hamidur rahman',
  },
  success: {
    canonical: '/success-stories/',
    title: 'Student Success Stories | FIBD Graduates Earning Online',
    description: 'Real success stories from 1,500+ FIBD graduates. Students earning ৳38,000–৳1,20,000/month on Upwork, Fiverr, direct clients. See transformation from zero to freelancer.',
    keywords: 'success stories, student testimonials, freelancer income proof, upwork earnings, fiverr success, student achievement, income proof',
    focusKeyword: 'freelancing success stories bangladesh',
  },
  blog: {
    canonical: '/blog/',
    title: 'Freelancing Blog | Tips, Guides & Career Advice | FIBD',
    description: 'Practical freelancing guides for Bangladesh: Upwork tips, Fiverr strategies, writing winning proposals, getting paid via Bkash, skill development. Updated regularly by active freelancers.',
    keywords: 'freelancing blog, upwork tips, fiverr tips, freelancing guides, freelancing advice, freelancing strategies, getting started freelancing',
    focusKeyword: 'freelancing tips and tricks',
  },
  gallery: {
    canonical: '/gallery/',
    title: 'Photo Gallery | FIBD Classes & Student Life',
    description: 'Gallery of Freelancing Institute BD: live classes, graduation ceremonies, student life, events. See our vibrant learning community in Tangail, Dhaka, Bangladesh.',
    keywords: 'fibd gallery, freelancing institute photos, class photos, student life, graduation, freelancing community, student events',
    focusKeyword: 'freelancing institute students',
  },
  videos: {
    canonical: '/videos/',
    title: 'Free Freelancing Video Lessons | Hamidur Rahman | FIBD',
    description: 'Watch 30+ free freelancing lessons by Hamidur Rahman: Digital Marketing, YouTube Marketing, Upwork/Fiverr tips, success stories. All in Bangla, free to watch & learn.',
    keywords: 'free video lessons, freelancing videos, digital marketing videos, youtube marketing, hamidur rahman, free courses, bangla tutorials',
    focusKeyword: 'free freelancing video lessons',
  },
}

export function getPageSEO(pageName) {
  return seoPages[pageName] || {}
}
