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

const storyBeats = [
  {
    title: 'Chapter One: The First Light',
    text: 'A story that begins with grace. The kind of smile that makes the room softer and the day feel brighter.',
  },
  {
    title: 'Chapter Two: Grace in Motion',
    text: 'Outings, laughter, and camera-ready moments. She moves with quiet confidence and a heart for beauty.',
  },
  {
    title: 'Chapter Three: The Horizon',
    text: 'Dreams unfolding with faith, curiosity, and a gentle courage that keeps reaching for more.',
  },
];

const aboutFacts = [
  { icon: '🎂', label: 'Born', value: 'August 26, 2005' },
  { icon: '📚', label: 'Education', value: 'Administration' },
  { icon: '💃', label: 'Profession', value: 'Model' },
  { icon: '😊', label: 'Known For', value: 'A beautiful smile' },
  { icon: '🎉', label: 'Loves', value: 'Outings & adventures' },
];

const lifestyleTags = [
  { icon: '🌅', label: 'Golden-hour glow' },
  { icon: '🎧', label: 'Music that feels like a hug' },
  { icon: '📸', label: 'Camera-ready moments' },
  { icon: '🧭', label: 'Adventure & curiosity' },
  { icon: '🙏', label: 'Faith & gratitude' },
  { icon: '✨', label: 'Graceful presence' },
];

const galleryBlocks = [
  {
    big: { src: images[9], label: 'Vintage', position: '50% 25%' },
    mediums: [
      { src: images[1], label: 'Golden Hour', position: '50% 40%' },
      { src: images[2], label: 'Soft Glow', position: '50% 20%' },
      { src: images[3], label: 'In Monochrome', position: '50% 30%' },
      { src: images[4], label: 'Creative Muse', position: '50% 25%' },
    ],
  },
  {
    big: { src: images[8], label: 'Sunset', position: '50% 55%' },
    mediums: [
      { src: images[5], label: 'Outdoor Vibes', position: '50% 35%' },
      { src: images[6], label: 'Outing Day', position: '50% 30%' },
      { src: images[7], label: 'Photoshoot', position: '50% 30%' },
      { src: images[0], label: 'Timeless', position: '50% 35%' },
    ],
  },
];

const memories = [
  {
    src: images[8],
    title: 'Sunset Hush',
    text: 'When the day slows down and everything glows.',
    tag: 'Golden hour',
    tilt: '-2deg',
  },
  {
    src: images[6],
    title: 'City Sparkle',
    text: 'A little adventure, a lot of laughter.',
    tag: 'Outing day',
    tilt: '1.5deg',
  },
  {
    src: images[9],
    title: 'Vintage Heart',
    text: 'Classic, timeless, effortlessly lovely.',
    tag: 'Old soul',
    tilt: '-1deg',
  },
  {
    src: images[5],
    title: 'Open Air',
    text: 'Fresh wind, soft light, and a bright smile.',
    tag: 'Free spirit',
    tilt: '2deg',
  },
];

const loveNotes = [
  {
    title: 'A quiet promise',
    text: 'I admire the way you carry yourself with grace. You make ordinary moments feel golden.',
  },
  {
    title: 'What I notice',
    text: 'Your smile feels like a sunrise. Warm, honest, and impossible not to love.',
  },
  {
    title: 'Always rooting for you',
    text: 'I see your strength and your kindness. I hope your days are as beautiful as your heart.',
  },
];

export { aboutFacts, galleryBlocks, images, lifestyleTags, loveNotes, memories, storyBeats };
