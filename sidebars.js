/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  learnSidebar: [
    {
      type: 'category',
      label: 'Basics',
      items: [
        'learn/basics/overview',
        'learn/basics/glossary',
        'learn/basics/tokenomics',
        'learn/basics/node-types',
        'learn/basics/spectrum',
        'learn/basics/qubic-architecture',
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      items: [
        'learn/governance/separation-of-power',
        'learn/governance/quorum',
        'learn/governance/arbitrator',
        'learn/governance/steering-committee',
        'learn/governance/proposals',
        'learn/governance/decision-making',
        'learn/governance/dispute-resolution',
        'learn/governance/updates-and-changes',
      ],
    },
    {
      type: 'category',
      label: 'Mining',
      items: [
        'learn/mining/useful-proof-of-work',
        'learn/mining/mining-hardware',
        'learn/mining/mining-software',
        'learn/mining/joining-a-pool',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Concepts',
      items: [
        'learn/advanced-concepts/smart-contracts',
        'learn/advanced-concepts/ipo',
        'learn/advanced-concepts/dutch-auction',
        'learn/advanced-concepts/aigarth',
        'learn/advanced-concepts/oracles',
        'learn/advanced-concepts/environmental-impact',
      ],
    },
    {
      type: 'category',
      label: 'User Guide',
      items: [
        'learn/user guide/invest-inqubic',
        'learn/user guide/wallets',
        'learn/user guide/exchanges',
        'learn/user guide/qx',
      ],
    },
    {
      type: 'category',
      label: 'Ecosystem',
      items: [
        'learn/ecosystem/use-cases',
        'learn/ecosystem/community-engagement',
        'learn/ecosystem/grants-program',
        'learn/ecosystem/hackathons',
        'learn/ecosystem/valis-project',
      ],
    },
    {
      type: 'category',
      label: 'Roadmap',
      items: [
        'learn/roadmap/project-milestones',
        'learn/roadmap/upcoming-features',
        'learn/roadmap/release-history',
        'learn/roadmap/project-x',
      ],
    },
    'learn/security',
  ],
  
  overviewSidebar: [
    'overview/introduction',
    'overview/key-features',
    'overview/qubic-consensus',
    'overview/team-and-founder',
    'overview/future-developments',
    'overview/community-and-adoption',
    'overview/disclaimer',
  ],

  compSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'computors/challenges',
        'computors/prerequisites',
        'computors/installation',
        'computors/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Run a Computor',
      items: [
        'computors/bm',
        'computors/vm',
      ],
    },
    {
      type: 'category',
      label: 'Monitoring & Maintenance',
      items: [
        'computors/logging',
        'computors/commands',
        'computors/backup-restore',
        'computors/upgrading',
      ],
    },
  ],

  devSidebar: [
    'developers/intro',
    'developers/contribute',
    {
      type: 'category',
      label: 'Core Concepts',
      items: [
        'developers/qubic-id',
        'developers/transactions',
      ],
    },
    {
      type: 'category',
      label: 'Advanced Concepts',
      items: [
        'developers/oracles',
        'developers/qpi',
      ],
    },
    {
      type: 'category',
      label: 'Clients',
      items: [
        'api/rpc',
        'developers/rust-api',
      ],
    },
    {
      type: 'category',
      label: 'Community Bounties',
      items: [
        'developers/draft/logo',
      ],
    },
    {
      type: 'category',
      label: 'Implemented Proposals',
      items: [
        'developers/empty',
      ],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'developers/environment',
      ],
    },
    'developers/bug-bounty',
  ],

  apiSidebar: [
    {
      type: 'category',
      label: 'Core API',
      items: [
        'api/rpc',
        'api/transactions',
      ],
    },
  ],
};

module.exports = sidebars;