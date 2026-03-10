const imageFiles = [
  '1.jpeg',
  'amzing beauty.jpeg',
  'beautiful.jpeg',
  'black and white shot.jpeg',
  'creative modal.jpeg',
  'outdoor vibes.jpeg',
  'outing shot.jpeg',
  'photoshot.jpeg',
  'sunset  picture.jpeg',
  'vintage.jpeg',
];

const toPublicImageUrl = (fileName) => {
  const encodedFileName = fileName.split('/').map(encodeURIComponent).join('/');
  return `${import.meta.env.BASE_URL}img/${encodedFileName}`;
};

const images = imageFiles.map(toPublicImageUrl);

const profileHighlights = [
  {
    title: 'Strategic Business Mindset',
    text: 'Business management professional with experience in strategic planning, marketing, customer service, strategic management, and organizational behavior and culture.',
  },
  {
    title: 'Digital-First Communicator',
    text: 'Focused on social media marketing and customer support, with practical understanding of audience engagement, digital visibility, and relationship management.',
  },
  {
    title: 'Value-Driven Team Player',
    text: 'Committed to contributing measurable value through teamwork, patience, communication, innovation, and a disciplined work ethic.',
  },
];

const contactFacts = [
  { icon: 'Name', label: 'Full Name', value: 'Langelihle Natasha Kumbemba' },
  { icon: 'Role', label: 'Focus', value: 'Social Media Marketing & Customer Support' },
  { icon: 'Mail', label: 'Email', value: 'kumbembalangelihle@gmail.com' },
  { icon: 'Call', label: 'Phone', value: '+263 781 998 998' },
  { icon: 'Base', label: 'Location', value: 'Harare, Zimbabwe' },
];

const skillTags = [
  { icon: 'Care', label: 'Customer care' },
  { icon: 'Media', label: 'Social media marketing' },
  { icon: 'Assess', label: 'Psychological assessment' },
  { icon: 'Think', label: 'Innovative' },
  { icon: 'Calm', label: 'Patient' },
  { icon: 'Team', label: 'Team player' },
  { icon: 'Tech', label: 'Computer literate' },
  { icon: 'Time', label: 'Time conscious' },
  { icon: 'Speak', label: 'Communication' },
];

const languages = ['Shona', 'English', 'Chewa'];

const experienceCards = [
  {
    src: images[4],
    title: 'Certified Professional Model',
    text: 'Top Models Zimbabwe | May 2024 - Present | Harare, Zimbabwe. Strengthened confidence, innovation, patience, professionalism, and critical thinking while gaining practical exposure to digital marketing performance, social media engagement, and conversion-focused brand promotion.',
    tag: 'Modeling & brand presence',
    tilt: '-2deg',
  },
  {
    src: images[7],
    title: 'Business Administrator',
    text: 'Pace College | Aug 2023 - Sep 2024 | Harare, Zimbabwe. Developed and implemented strategic plans to support annual revenue targets through marketing activities, open surveys, questionnaires, and coordinated teamwork.',
    tag: 'Administration & strategy',
    tilt: '1.5deg',
  },
  {
    src: images[8],
    title: 'Customer-Oriented Strength',
    text: 'Experience across customer service and business environments has strengthened responsiveness, professionalism, and the ability to support clients while maintaining positive brand representation.',
    tag: 'Customer support',
    tilt: '-1deg',
  },
  {
    src: images[5],
    title: 'Marketing Perspective',
    text: 'Combines business administration and modeling exposure to understand both structured strategy and audience appeal, particularly in social-media-led campaigns.',
    tag: 'Digital marketing',
    tilt: '2deg',
  },
];

const projectCards = [
  {
    title: 'Featured Project',
    items: [
      '2023 Zimbabwe Agricultural Show | Pace College | Oct 2023',
      'Represented the company as part of the team at the Agric Show.',
      'Engaged with different industries, improved brand recognition, and contributed to customer growth opportunities for the company.',
    ],
    signature: 'Projects',
  },
  {
    title: 'Certificates & Education',
    items: [
      'Level 5 Advanced Business Management Diploma',
      'Level 5 qualification',
      'Ordinary Level subjects: English, Maths, Business Studies, Travel & Tourism, Geography',
    ],
    signature: 'Credentials',
  },
  {
    title: 'References',
    items: [
      'Karin Coric | Certified Professional Model, Top Models Zimbabwe | +263 773 421 649 / +263 780 835 351',
      'Tatenda Njanike | Certified Professional Model, Njanike Agency Blueprint | +263 71 919 4102',
      'Mr Kevin | Business Administrator, Pace College | +263 775 157701',
    ],
    signature: 'Contacts',
  },
];

const galleryBlocks = [
  {
    big: { src: images[9], label: 'Professional Presence', position: '50% 25%' },
    mediums: [
      { src: images[1], label: 'Confidence', position: '50% 40%' },
      { src: images[2], label: 'Poise', position: '50% 20%' },
      { src: images[3], label: 'Focus', position: '50% 30%' },
      { src: images[4], label: 'Creative Energy', position: '50% 25%' },
    ],
  },
  {
    big: { src: images[8], label: 'Brand Storytelling', position: '50% 55%' },
    mediums: [
      { src: images[5], label: 'Outdoor Campaigns', position: '50% 35%' },
      { src: images[6], label: 'Public Engagement', position: '50% 30%' },
      { src: images[7], label: 'Media Readiness', position: '50% 30%' },
      { src: images[0], label: 'Timeless Professionalism', position: '50% 35%' },
    ],
  },
];

export {
  contactFacts,
  experienceCards,
  galleryBlocks,
  images,
  languages,
  profileHighlights,
  projectCards,
  skillTags,
};
