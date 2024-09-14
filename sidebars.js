
/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Hide sidebar that's home page
  // tutorialSidebar: [{type: 'doc', id: 'index'}],

  overviewSidebar: [
    {
      type: 'category',
      label: 'Overview',
      items: [
        'overview/introduction',
        'overview/overview',
        'overview/key-features',
        'overview/consensus',
        'overview/whitepaper',
        'overview/disclaimer'
      ],
    },
  ],
  learnSidebar: [
    'learn/overview',
    'learn/glossary',
    {
      type: 'category',
      label: 'Basics',
      items: [
        'learn/nodes', 
        'learn/spectrum',
        'learn/tokenomics',
      ],
    },
    {
      type: 'category',
      label: 'Governance',
      items: [
        'learn/governance',
        'learn/quorum',
        'learn/arbitrator',
        'learn/proposals',
        'learn/decision-making',
        'learn/dispute-resolution',
        'learn/updates-changes',
      ],
    },
    {
      type: 'category',
      label: 'Mining',
      items: [
        'learn/upow',
        'learn/hw',
        'learn/sw',
        'learn/pool',
      ],
    },
    {
      type: 'category',
      label: 'Smart Contracts and IPOs',
      items: [
        'learn/smart-contracts',
        'learn/ipo',
        'learn/dutch-auction',
        'learn/qouterry',
        'learn/qx',
        'learn/random',
        'learn/mlm',
      ],
    },
    'learn/aigarth',
    {
      type: 'category',
      label: 'How to buy',
      items: [
        'learn/invest',
        'learn/wallets',
        'learn/qx',
      ],
    }
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
        'developers/qubic-node',
        'developers/qubic-cli',
        'developers/client-qubicj-shell',
        'api/rpc',
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      items: [
        'developers/integration',
        'developers/library-java',
        'developers/library-typescript',
        'developers/library-go',
        'developers/library-http',
        'developers/library-csharp',
      ],
    },
    {
      type: 'category',
      label: 'Grants',
      items: [
        'developers/grants',
      ],
    },
    // {
    //   type: 'category',
    //   label: 'Community Bounties',
    //   items: [
    //     'developers/draft/logo',
    //   ],
    // },
    // {
    //   type: 'category',
    //   label: 'Implemented Proposals',
    //   items: [
    //     'developers/empty',
    //   ],
    // },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'developers/tutorials',
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
      ],
    },
  ],
  hackathonSidebar: [
    {
      type: 'category',
      label: 'Hackathons',
      items: [
        'hackathon/hackathon',
      ],
    },
  ],
};

module.exports = sidebars;