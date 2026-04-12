export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  platform: string;
  date: string;
  tags: string[];
  thumbnail: string;
  link: string;
  impact?: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
  editorPick?: boolean;
  thumbnail: string;
}

export interface Accomplishment {
  id: string;
  title: string;
  type: string;
  description: string;
  year: string;
  icon?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Ghostlight - How to Cope With The Loss of a Loved One',
    category: 'Video essay',
    description: 'An analysis on the 2024 film "Ghostlight" and the way it copes with the loss of a loved one.',
    platform: 'YouTube',
    date: '9 March 2025',
    tags: ['Video essay', 'Film analysis', 'Independent film'],
    thumbnail: '/projects/ghostlight.png',
    link: 'https://www.youtube.com/watch?v=P0gZPm0eWgM',
  },
  {
    id: '2',
    title: 'Why is Lumon Torturing Gemma Scout?',
    category: 'Video essay',
    description: 'A discussion on the content of the first 2 seasons of "Severance" and a prediction on the content of the next season.',
    platform: 'YouTube',
    date: '11 April 2025',
    tags: ['Analysis', 'Predictions'],
    thumbnail: '/projects/severance-gemma.png',
    link: 'https://www.youtube.com/watch?v=0Ts40-RvZxM&t=342s',
  },
  {
    id: '3',
    title: 'Nothingness on the Screen',
    category: 'Video essay',
    description: 'An analysis on the way that Asian values and filming techniques enrich the western way of moviemaking.',
    platform: 'YouTube',
    date: '25 August 2025',
    tags: ['Video essay', 'Analysis', 'Cross-cultural cinema'],
    thumbnail: '/projects/nothingness-screen.png',
    link: 'https://www.youtube.com/watch?v=-fhplvL8XDg',
  },
  {
    id: '4',
    title: 'The Art of Profiling - Mindhunter',
    category: 'Video essay',
    description:
      "A video essay about the skills Holden Ford and Bill Tench learn from the U.S.' biggest criminals that helped them secure a confession from the killer Gene Devier.",
    platform: 'YouTube',
    date: '27 February 2026',
    tags: ['Video essay', 'Analysis'],
    thumbnail: '/projects/mindhunter-profiling.png',
    link: 'https://www.youtube.com/watch?v=VQHZK_H8vJE&t=16s',
  },
];

export const articles: Article[] = [
  {
    id: '1', title: 'The Quiet Revolution: How A24 Redefined American Independent Cinema',
    category: 'Film Analysis', excerpt: 'From Moonlight to Everything Everywhere All at Once, tracing how a small distribution company became the defining voice of a generation\'s cinematic taste.',
    readTime: '8 min read', date: 'March 2025', editorPick: true,
    thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600'
  },
  {
    id: '2', title: 'Beyond the Fourth Wall: Immersive Theater and the Future of Audience Experience',
    category: 'Theater Commentary', excerpt: 'Exploring how productions like Sleep No More and The Burnt City are transforming passive audiences into active participants.',
    readTime: '6 min read', date: 'February 2025', editorPick: true,
    thumbnail: 'https://images.unsplash.com/photo-1507924538820-ede94a04019d?w=600'
  },
  {
    id: '3', title: 'Color as Character: The Emotional Palette of Wes Anderson',
    category: 'Film Analysis', excerpt: 'A visual deep-dive into how Anderson\'s meticulous color choices function as narrative devices, creating worlds where hue carries emotional weight.',
    readTime: '10 min read', date: 'January 2025',
    thumbnail: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600'
  },
  {
    id: '4', title: 'The Renaissance of Documentary Storytelling in the Streaming Era',
    category: 'Culture Writing', excerpt: 'How platforms like Netflix and HBO have elevated documentary filmmaking from niche interest to mainstream cultural conversation.',
    readTime: '7 min read', date: 'December 2024', editorPick: true,
    thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600'
  },
  {
    id: '5', title: 'When Music Becomes Memory: Scoring Nostalgia in Contemporary Film',
    category: 'Film Analysis', excerpt: 'Examining how composers and music supervisors use sonic landscapes to trigger collective memory and personal nostalgia.',
    readTime: '5 min read', date: 'November 2024',
    thumbnail: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600'
  },
  {
    id: '6', title: 'Stage Mothers and Difficult Women: Reclaiming Complex Female Characters in Theater',
    category: 'Theater Commentary', excerpt: 'A critical examination of how contemporary playwrights are breathing new life into archetypes once dismissed as one-dimensional.',
    readTime: '9 min read', date: 'October 2024',
    thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600'
  },
];

export const accomplishments: Accomplishment[] = [
  { id: '1', title: 'Published in The Criterion Observer', type: 'Publication', description: 'Regular contributor covering contemporary cinema analysis and retrospective reviews.', year: '2024 to present' },
  { id: '2', title: 'Berlinale Press Accreditation', type: 'Recognition', description: 'Accredited press member at the 75th Berlin International Film Festival.', year: '2025' },
  { id: '3', title: 'Film Criticism Fellowship Finalist', type: 'Competition', description: 'Selected as a finalist for the annual Emerging Critics Fellowship by the National Society of Film Critics.', year: '2024' },
  { id: '4', title: 'Newsletter: 4,800+ Subscribers', type: 'Audience Growth', description: 'Built "Reel & Stage," a weekly newsletter on film and theater, to nearly 5,000 engaged subscribers.', year: '2023 to present' },
  { id: '5', title: 'Guest Columnist, IndieWire', type: 'Publication', description: 'Invited to write a guest column on emerging voices in independent European cinema.', year: '2025' },
  { id: '6', title: 'Theater Coverage, Edinburgh Fringe', type: 'Event Coverage', description: 'Provided daily coverage of the Edinburgh Festival Fringe, publishing 12 reviews across two weeks.', year: '2024' },
  { id: '7', title: 'Collaboration with Letterboxd', type: 'Partnership', description: 'Video essay featured on Letterboxd\'s official social channels, reaching 200K+ viewers.', year: '2024' },
  { id: '8', title: 'Editor Quote, Curtain Call Magazine', type: 'Testimonial', description: '"One of the most thoughtful emerging voices in theater criticism. Their writing has a rare combination of rigor and warmth." Senior Editor.', year: '2024' },
];


/** Enabled filters first; disabled categories show a coming-soon overlay on the projects page. */
export const projectCategories = ['All', 'Video essay', 'Movie Reviews', 'Video Content'] as const;
export const articleCategories = ['All', 'Film Analysis', 'Theater Commentary', 'Culture Writing'];
