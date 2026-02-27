// Advanced SEO Configuration with Focus Keywords & Meta Data
export const seoPages = {
  home: {
    canonical: 'https://freelancinginstitutebd.com/',
    title: 'Freelancing Course in Bangladesh | FIBD',
    description: 'Freelancing courses in Bangladesh: Graphic Design, WordPress, Digital Marketing. 5,000+ students trained, Bangla mentorship, real projects. Start earning online today. Enroll now.',
    keywords: 'freelancing course bangladesh, learn freelancing online, wordpress training, graphic design course, digital marketing training, upwork fiverr training',
    focusKeyword: 'freelancing course bangladesh',
  },
  courses: {
    canonical: 'https://freelancinginstitutebd.com/courses/',
    title: 'Freelancing Courses in Bangladesh | FIBD',
    description: '6 structured freelancing courses: Graphic Design ৳8K, WordPress ৳10K, Digital Marketing ৳7.5K. Bangla mentorship, live classes, job support. Enroll today.',
    keywords: 'freelancing courses, graphic design course, wordpress training, digital marketing course, content writing course, ecommerce course, virtual assistant training, structured freelancing courses',
    focusKeyword: 'freelancing courses bangladesh',
  },
  services: {
    canonical: 'https://freelancinginstitutebd.com/services/',
    title: 'Freelancing Training Services in Bangladesh | FIBD',
    description: 'Professional training, mentorship, profile setup for Upwork/Fiverr. Portfolio building, client acquisition, corporate training. Transform skills into income.',
    keywords: 'freelancing services, freelancing training, upwork training, fiverr training, portfolio building, profile optimization, freelancing mentorship, training mentorship profile setup',
    focusKeyword: 'freelancing training services bangladesh',
  },
  admission: {
    canonical: 'https://freelancinginstitutebd.com/admission/',
    title: 'Apply for Freelancing Course | FIBD Admission 2026',
    description: 'Apply now for FIBD 2026 admission. Free counseling, flexible payment, Bangla medium freelancing courses. Limited seats per batch. Start your freelancing journey today.',
    keywords: 'freelancing course admission, apply online course, free counseling, flexible payment, course enrollment, batch admission, limited seats, apply now free counseling',
    focusKeyword: 'freelancing course admission bangladesh',
  },
  about: {
    canonical: 'https://freelancinginstitutebd.com/about/',
    title: 'About Freelancing Institute BD | Founded 2019',
    description: 'Founded 2019 by Hamidur Rahman. 5,000+ students trained by active freelancers. Mission: Empower Bangladesh through practical freelancing skills. Learn our story.',
    keywords: 'freelancing institute bd, hamidur rahman, freelancing institute founder, about fibd, freelancing training institute, bangladeshi freelancer, founded 2019 hamidur rahman',
    focusKeyword: 'freelancing institute bd hamidur rahman',
  },
  success: {
    canonical: 'https://freelancinginstitutebd.com/success-stories/',
    title: 'Student Success Stories | FIBD Graduates Earning Online',
    description: '1,500+ FIBD graduates earning ৳38,000–৳1,20,000/month. Real income proof from Upwork, Fiverr, direct clients. See the transformation from zero to freelancer.',
    keywords: 'success stories, student testimonials, freelancer income proof, upwork earnings, fiverr success, student achievement, income proof, real income proof ৳38000 ৳120000',
    focusKeyword: 'freelancing success stories bangladesh',
  },
  blog: {
    canonical: 'https://freelancinginstitutebd.com/blog/',
    title: 'Freelancing Blog | Tips, Guides & Career Advice | FIBD',
    description: 'Bangla guides on freelancing: Upwork tips, Fiverr strategies, winning proposals, Bkash payments, skill development. Updated by active freelancers. Learn & grow.',
    keywords: 'freelancing blog, upwork tips, fiverr tips, freelancing guides, freelancing advice, freelancing strategies, getting started freelancing, bangla guides upwork tips fiverr strategies',
    focusKeyword: 'freelancing tips and tricks',
  },
  gallery: {
    canonical: 'https://freelancinginstitutebd.com/gallery/',
    title: 'Photo Gallery | FIBD Classes & Student Life',
    description: 'Photos of FIBD: live classes, graduation ceremonies, student life, community events. See vibrant learning in Tangail, Dhaka, Bangladesh. Join the community.',
    keywords: 'fibd gallery, freelancing institute photos, class photos, student life, graduation, freelancing community, student events, student life classes graduation',
    focusKeyword: 'freelancing institute students',
  },
  videos: {
    canonical: 'https://freelancinginstitutebd.com/videos/',
    title: 'Free Freelancing Video Lessons | Hamidur Rahman | FIBD',
    description: '30+ free lessons by Hamidur Rahman: Digital Marketing, YouTube Marketing, Upwork/Fiverr tips, success stories. All in Bangla. Watch and learn freelancing free.',
    keywords: 'free video lessons, freelancing videos, digital marketing videos, youtube marketing, hamidur rahman, free courses, bangla tutorials, free lessons hamidur rahman bangla',
    focusKeyword: 'free freelancing video lessons',
  },
}

export function getPageSEO(pageName) {
  return seoPages[pageName] || {}
}
