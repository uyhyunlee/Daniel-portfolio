import spawnFlower from '../assets/figma/spawn-flower.svg';
import blueprintBrand from '../assets/figma/blueprint-brand.png';
import scotiabankLogo from '../assets/figma/scotiabank-logo.png';
import hypersecuWhite from '../assets/figma/hypersecu-white.png';
import aboutHereLogo from '../assets/figma/about-here-logo.png';
import instagramIcon from '../assets/figma/instagram-icon.svg';
import githubIcon from '../assets/figma/github-mdi.svg';
import appleIcon from '../assets/figma/apple-icon.svg';

export type ProjectLinkIcon = 'instagram' | 'github' | 'apple';

export type ProjectLink = {
  label: string;
  href: string;
  icon?: ProjectLinkIcon;
};

export type ProjectSection = {
  label: string;
  summary?: string | string[];
  body: string | string[];
  /** Body spans full width under the label (e.g. present) */
  fullWidth?: boolean;
};

export type ProjectHeroVariant = 'spawn' | 'blueprint' | 'scotia' | 'hypersecu' | 'about-here';

export type Project = {
  id: string;
  title: string;
  hero: {
    variant: ProjectHeroVariant;
    bgColor: string;
  };
  linksLabel: string;
  links: ProjectLink[];
  meta: {
    role: string;
    timeline: string;
    skills: string;
    location: string;
  };
  sections: ProjectSection[];
};

export const linkIcons: Record<ProjectLinkIcon, string> = {
  instagram: instagramIcon,
  github: githubIcon,
  apple: appleIcon,
};

export const heroLogos: Record<ProjectHeroVariant, { src: string; alt: string; className: string }> = {
  spawn: {
    src: spawnFlower,
    alt: 'Spawn',
    className: 'h-[72px] w-[79px] md:h-[92px] md:w-[101px]',
  },
  blueprint: {
    src: blueprintBrand,
    alt: 'BluePrint',
    className: 'h-[72px] w-auto max-w-[min(100%,420px)] md:h-[90px]',
  },
  scotia: {
    src: scotiabankLogo,
    alt: 'Scotiabank',
    className: 'h-[64px] w-auto max-w-[min(100%,360px)] md:h-[80px]',
  },
  hypersecu: {
    src: hypersecuWhite,
    alt: 'Hypersecu',
    className: 'h-[48px] w-auto max-w-[min(100%,420px)] md:h-[60px]',
  },
  'about-here': {
    src: aboutHereLogo,
    alt: 'About Here',
    className: 'h-[140px] w-[121px] md:h-[180px] md:w-[156px]',
  },
};

export const projects: Record<string, Project> = {
  spawn: {
    id: 'spawn',
    title: 'Spawn',
    hero: {
      variant: 'spawn',
      bgColor: '#6b81fb',
    },
    linksLabel: 'check us out!',
    links: [
      {
        label: 'instagram',
        href: 'https://www.instagram.com/spawnapp/',
        icon: 'instagram',
      },
      {
        label: 'ios codebase',
        href: 'https://github.com/Daggerpov/Spawn-App-iOS-SwiftUI',
        icon: 'github',
      },
      {
        label: 'app store',
        href: 'https://getspawn.com/',
        icon: 'apple',
      },
    ],
    meta: {
      role: 'Co-founder',
      timeline: 'May 2025 - Present',
      skills: 'Product management, development',
      location: 'Vancouver, BC',
    },
    sections: [
      {
        label: 'mission',
        summary: 'Easing the coordination of sp-aw-ntaneous and impromptu plans amongst friends.',
        body: 'In an age dominated by endless scrolling and short-form content, genuine social interaction often takes a backseat. The reality is that many of us do have free time throughout the day, but instead of reaching out or making plans, we default to our phones — whether because coordinating feels like too much effort, friends seem unavailable, or initiating plans feels awkward. Spawn was built to reduce that friction. Our goal is simple: encourage people to spend less time on screens and more time creating real experiences with the people around them.',
      },
      {
        label: 'problem',
        summary: [
          '83% of university students feel they spend too much time on their phones.',
          '91% wished there were an easier way to make spontaneous plans.',
        ],
        body: [
          'To better understand the problem, we surveyed 150 university students and found that: the desire for more real-world connection clearly exists, yet organizing something casual with friends still feels surprisingly difficult. Existing tools fall short in different ways. Platforms like Google Calendar or When2Meet are effective for structured scheduling, but they feel too formal for impromptu plans. Social media can help coordinate activities, but its primary purpose is content sharing and communication, not lightweight planning. Posting a story asking who wants to grab lunch can often feel overly public or direct. As a result, most spontaneous plans end up happening in group chats. But messaging apps were never designed for coordination. Messages get buried, conversations drift off-topic, people hesitate to respond, and groups often become cluttered with unrelated members. What should take seconds can quickly become frustrating enough that people give up on making plans altogether.',
          'We realized the issue wasn’t a lack of interest in hanging out, it was the friction involved in organizing it.',
        ],
      },
      {
        label: 'overview',
        summary: [
          'A live activity feed,',
          'smart notifications,',
          'customizable friend groups,',
          'and an interactive activity map.',
        ],
        body: 'Spawn is a mobile application designed to make spontaneous hangouts effortless. Users can quickly share what they’re doing in real time, discover activities their friends are already participating in, and join plans with minimal coordination. One insight we discovered through research was that people naturally organize their social lives into different circles. The friends you play pickup basketball with are often different from the people you grab dinner or go out with on weekends. Spawn builds around this behaviour through customizable social groups, allowing users to instantly share plans with the right people instead of repeatedly inviting individuals one by one. To keep the experience lightweight and frictionless, we focused on surfacing only the information people actually need to decide whether they want to join an activity: what, when, where, and who. This led us to design a streamlined user flow centered around simplicity and speed.',
      },
      {
        label: 'present',
        body: 'Spawn is still a work in progress application, we have accumulated 200 users. Check us out on the app store!',
        fullWidth: true,
      },
    ],
  },
  blueprint: {
    id: 'blueprint',
    title: 'BluePrint',
    hero: {
      variant: 'blueprint',
      bgColor: '#0e1531',
    },
    linksLabel: 'check us out!',
    links: [
      {
        label: 'instagram',
        href: 'https://www.instagram.com/ubcblueprint/',
        icon: 'instagram',
      },
      {
        label: 'website',
        href: 'https://ubcblueprint.com/',
      },
    ],
    meta: {
      role: 'Co-director',
      timeline: '2024 - 2025',
      skills: 'Event production, partnerships, community',
      location: 'Vancouver, BC',
    },
    sections: [
      {
        label: 'mission',
        summary: 'Helping students find their start in tech through an accessible, high-energy networking conference.',
        body: 'BluePrint is a student-run networking conference designed to lower the barrier to entering tech. We bring together students, recruiters, and industry mentors for a day of conversations, workshops, and connections that feel approachable instead of intimidating.',
      },
      {
        label: 'problem',
        summary: [
          'Breaking into tech is hard when you don’t already have a network.',
          'Most career events feel exclusive, formal, or hard to navigate as a beginner.',
        ],
        body: 'Many students want to explore careers in technology but struggle to find their first conversation, internship lead, or mentor. Traditional networking events can feel high-pressure and opaque, especially for first-year and non-traditional applicants. BluePrint was built to create a warmer on-ramp: a space where students can meet people, ask honest questions, and leave with momentum.',
      },
      {
        label: 'overview',
        summary: [
          '200+ students connected,',
          'industry workshops,',
          'mentor conversations,',
          'and community-first programming.',
        ],
        body: 'As a co-director, I helped shape the conference experience end to end — from programming and partnerships to day-of operations. The focus was always on creating moments that felt useful and human: clear pathways into conversations, sessions that answered real student questions, and an environment where people could actually follow up after the event.',
      },
      {
        label: 'present',
        body: 'BluePrint continues to grow as a flagship student conference, helping more people take their first step into tech each year.',
        fullWidth: true,
      },
    ],
  },
  scotia: {
    id: 'scotia',
    title: 'Scotia',
    hero: {
      variant: 'scotia',
      bgColor: '#fd3b3b',
    },
    linksLabel: 'check us out!',
    links: [
      {
        label: 'scotiabank',
        href: 'https://www.scotiabank.com/',
      },
    ],
    meta: {
      role: 'Software Developer Intern',
      timeline: '2025',
      skills: 'Product development, software engineering',
      location: 'Toronto / Vancouver',
    },
    sections: [
      {
        label: 'mission',
        summary: 'Building products that make business banking clearer, faster, and easier to use.',
        body: 'At Scotiabank, I worked on product experiences that help business customers get banking tasks done with less friction. The goal was simple: turn complex financial workflows into interfaces people can understand and trust.',
      },
      {
        label: 'problem',
        summary: [
          'Business banking tools often bury key actions behind dense flows.',
          'Customers need clarity when decisions involve money and time.',
        ],
        body: 'Business owners and operators rely on banking software for everyday operations, but many flows still feel heavy. Small points of friction — unclear states, extra steps, or weak feedback — add up quickly. Our work focused on identifying those moments and shipping improvements that made core tasks more intuitive.',
      },
      {
        label: 'overview',
        summary: [
          'Product collaboration,',
          'feature development,',
          'and shipping usable banking experiences.',
        ],
        body: 'I collaborated with designers, product managers, and engineers to ship improvements across business banking surfaces. Day to day, that meant writing production code, refining interaction details, and making sure the end experience stayed reliable under real customer use.',
      },
      {
        label: 'present',
        body: 'This internship deepened how I think about product craft in regulated, high-trust environments — where clarity and reliability matter as much as speed.',
        fullWidth: true,
      },
    ],
  },
  hypersecu: {
    id: 'hypersecu',
    title: 'Hypersecu',
    hero: {
      variant: 'hypersecu',
      bgColor: '#00a3cf',
    },
    linksLabel: 'check us out!',
    links: [
      {
        label: 'website',
        href: 'https://www.hypersecu.com/',
      },
    ],
    meta: {
      role: 'Software Developer',
      timeline: '2025',
      skills: 'Security software, development',
      location: 'Vancouver, BC',
    },
    sections: [
      {
        label: 'mission',
        summary: 'Developing software that helps people protect their devices from being compromised.',
        body: 'At Hypersecu, I worked on software focused on device security — building tools that help users stay protected without making security feel inaccessible or overly technical.',
      },
      {
        label: 'problem',
        summary: [
          'Security tools are often powerful but hard to understand.',
          'Users need protection that fits into real workflows.',
        ],
        body: 'People know security matters, but many products still assume deep technical knowledge. That gap creates risk: if a tool feels confusing, people avoid it. Hypersecu’s challenge was to ship security software that remains robust while staying approachable enough for everyday use.',
      },
      {
        label: 'overview',
        summary: [
          'Security-focused development,',
          'practical tooling,',
          'and protecting user devices.',
        ],
        body: 'My work centered on building and refining software features that strengthen device protection. That meant collaborating closely with the team on implementation details, reliability, and making complex security concepts feel actionable for users.',
      },
      {
        label: 'present',
        body: 'Hypersecu continues building security software aimed at keeping people safer online — and this role sharpened how I approach trust, clarity, and defensive product thinking.',
        fullWidth: true,
      },
    ],
  },
  'stories-about-here': {
    id: 'stories-about-here',
    title: 'About Here',
    hero: {
      variant: 'about-here',
      bgColor: '#000000',
    },
    linksLabel: 'check us out!',
    links: [
      {
        label: 'instagram',
        href: 'https://www.instagram.com/aboutherevideos/',
        icon: 'instagram',
      },
      {
        label: 'youtube',
        href: 'https://www.youtube.com/c/AboutHere',
      },
      {
        label: 'cbc gem',
        href: 'https://gem.cbc.ca/uytae-lees-stories-about-here/s01',
      },
    ],
    meta: {
      role: 'Video Producer',
      timeline: '2024',
      skills: 'Storytelling, video production, editing',
      location: 'Vancouver, BC',
    },
    sections: [
      {
        label: 'mission',
        summary: 'Educating the public on civic and urban planning issues through clear, compelling video.',
        body: 'Stories About Here is an eight-episode docuseries that dives into urban planning and civic issues across Metro Vancouver. From everyday frustrations like public washrooms to deeper challenges like industrial land scarcity, the series makes city-building feel relevant to daily life.',
      },
      {
        label: 'problem',
        summary: [
          'Urban planning decisions shape everyday life, but rarely feel accessible.',
          'Complex civic issues need storytelling that people actually watch.',
        ],
        body: 'Most people experience the effects of planning — housing, transit, public space — without a clear window into why those systems work the way they do. Dry explainers rarely cut through. About Here uses visual storytelling to make civic topics feel human, memorable, and worth caring about.',
      },
      {
        label: 'overview',
        summary: [
          'Camera and editing craft,',
          'digital storytelling,',
          'and turning complex topics into watchable stories.',
        ],
        body: 'As a Video Producer, I developed industry-standard camera and editing skills, created visually engaging media, and learned how to navigate the demands of digital marketing. Most importantly, I learned how to tell a compelling story — crafting strong hooks and clear calls to action that help content get seen and remembered.',
      },
      {
        label: 'present',
        body: 'The series continues to live on platforms like YouTube and CBC Gem, helping more people understand the cities they live in.',
        fullWidth: true,
      },
    ],
  },
};
