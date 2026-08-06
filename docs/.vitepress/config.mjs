import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'Dream Hive — The Dream Pursuit Doctrine',
  description: 'Public training portal for the Dream Pursuit Doctrine: a concept-first curriculum for winning federal business — doctrine, modules, literacy, case library, study plans, and the full course ladder.',
  base: '/', // GitHub Pages from root of gh-pages branch (uses custom domain learn.dreamhive.org)
  publicDir: 'docs/public', // VitePress resolves publicDir as <srcDir>/public by default
  head: [
    ['meta', { name: 'theme-color', content: '#5b2d90' }],
    ['meta', { property: 'og:title', content: 'Dream Hive — The Dream Pursuit Doctrine' }],
    ['meta', { property: 'og:description', content: 'A concept-first, college-ready curriculum for winning federal business. Doctrine, modules, literacy, case library, and study plans.' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
  ],
  appearance: true,
  // lastUpdated is disabled: VitePress computes it by shelling out to `git log`
  // per page at build time, which fails on the non-root CI image (no `spawn git`).
  // This is a static curriculum site — commit-date footers aren't meaningful.
  lastUpdated: false,
  cleanUrls: true,
  // The source curriculum uses many relative cross-links into a wider tree;
  // not all resolve inside the docs slice. GitHub Pages serves the built site,
  // so ignore minor internal-link gaps in the mirrored content.
  ignoreDeadLinks: true,
  markdown: {
    theme: { light: 'github-light', dark: 'github-dark' },
    lineNumbers: false,
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'Dream Hive',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Doctrine', link: '/doctrine/' },
      { text: 'Course', link: '/course/' },
      { text: 'Modules', link: '/modules/' },
      { text: 'Literacy', link: '/literacy/' },
      { text: 'Case Study', link: '/case-study/' },
      { text: 'Library', link: '/library/' },
    ],
    sidebar: {
      '/doctrine/': [
        {
          text: 'Doctrine',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/doctrine/' },
            { text: '01 · Where the Money Lives', link: '/doctrine/01-where-the-money-lives' },
            { text: '02 · RFPs & Solicitations', link: '/doctrine/02-rfps-and-solicitations' },
            { text: '03 · The Pursuit Pipeline', link: '/doctrine/03-the-pursuit-pipeline' },
            { text: '04 · Gates & Governance', link: '/doctrine/04-gates-and-governance' },
            { text: '05 · Scoring & Price-to-Win', link: '/doctrine/05-scoring-and-price-to-win' },
            { text: '06 · ORBITAL Business Structure', link: '/doctrine/06-orbital-business-structure' },
            { text: '07 · Lifecycle: Dream·Orbital·World', link: '/doctrine/07-lifecycle-dream-orbital-world' },
            { text: '08 · Tools Change, Concepts Don’t', link: '/doctrine/08-tools-change-concepts-dont' },
            { text: '09 · Capture & Competitive Strategy', link: '/doctrine/09-capture-and-competitive-strategy' },
            { text: '10 · Post-Submission & Win', link: '/doctrine/10-post-submission-and-win' },
          ],
        },
      ],
      '/course/': [
        {
          text: 'Course',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/course/' },
            { text: 'Syllabus Overview', link: '/course/syllabus-semester' },
            { text: 'Capstone', link: '/course/capstone-build-an-orbital' },
            { text: 'Undergraduate', link: '/course/undergraduate-program-overview' },
            { text: 'Graduate', link: '/course/graduate-program-overview' },
            { text: 'Doctoral', link: '/course/doctoral-program-overview' },
            { text: 'Forever-Learning', link: '/course/forever-learning-program' },
          ],
        },
      ],
      '/modules/': [
        {
          text: 'Modules & Teaching Plans',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/modules/' },
            { text: 'Shared Core', link: '/modules/shared-core' },
            { text: 'Strategic Initiative', link: '/modules/strategic-initiative' },
            { text: 'MBA', link: '/modules/mba' },
            { text: 'MPA', link: '/modules/mpa' },
            { text: 'Graduate Programs', link: '/modules/graduate/' },
          ],
        },
      ],
      '/literacy/': [
        {
          text: 'Literacy & Reference',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/literacy/' },
            { text: 'Glossary', link: '/literacy/glossary' },
            { text: 'Acronym Decoder', link: '/literacy/acronym-decoder' },
            { text: 'Why GovCon Matters', link: '/literacy/why-govcon-matters' },
            { text: 'How to Read an RFP', link: '/literacy/how-to-read-an-rfp' },
            { text: 'How to Read a NOFO', link: '/literacy/how-to-read-a-nofo' },
            { text: 'Where the Money Flows', link: '/literacy/where-the-money-flows' },
            { text: 'The Four Volumes', link: '/literacy/the-four-volumes' },
            { text: 'Capability Statement', link: '/literacy/capability-statement' },
            { text: 'Certification Prep', link: '/literacy/certification-prep-companion' },
            { text: 'Credential Ladder', link: '/literacy/credential-ladder' },
            { text: 'How Color Teams Work', link: '/literacy/how-color-teams-work' },
            { text: 'Industry Standard Canon', link: '/literacy/industry-standard-canon' },
            { text: 'How the Machine Learns', link: '/literacy/how-the-machine-learns' },
            { text: 'Further Reading', link: '/literacy/further-reading' },
          ],
        },
      ],
      '/case-study/': [
        {
          text: 'Case Study',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/case-study/' },
            { text: 'Ravonics', link: '/case-study/ravonics' },
          ],
        },
      ],
      '/library/': [
        {
          text: 'Download Library',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/library/' },
            { text: 'Doctrine', link: '/library/doctrine' },
            { text: 'Modules', link: '/library/modules' },
            { text: 'Literacy', link: '/library/literacy' },
            { text: 'Course', link: '/library/course' },
            { text: 'Reference', link: '/library/reference' },
          ],
        },
      ],
      '/study-plans/': [
        {
          text: 'Study Plans',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/study-plans/' },
          ],
        },
      ],
    },
    footer: {
      message: 'The Dream Pursuit Doctrine — a concept-first curriculum for winning federal business.',
      copyright: '© 2026 Dream Hive · DreamLimited',
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Search the doctrine', buttonAriaLabel: 'Search' },
        },
      },
    },
    editLink: {
      pattern: 'https://git.developerdojo.org/DreamLimited/dream-curriculum/edit/main/:path',
      text: 'Edit this page on GitLab',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/DreamLimited/dream-curriculum-web' },
    ],
    outline: { level: [2, 3], label: 'On this page' },
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
  },
})