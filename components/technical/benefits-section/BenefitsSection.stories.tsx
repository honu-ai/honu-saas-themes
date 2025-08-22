import type { Meta, StoryObj } from '@storybook/react';
import BenefitsSection from './BenefitsSection';

const meta: Meta<typeof BenefitsSection> = {
  title: 'Technical/BenefitsSection',
  component: BenefitsSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: 'BENEFITS',
    title: 'Why Choose Our Platform',
    description: 'Technical advantages that give you a competitive edge',
    cards: [
      {
        title: 'Performance',
        description: 'Optimized for speed and efficiency',
        icon: 'Thermometer',
        benefits: [
          'Sub-second response times',
          '99.9% uptime guarantee',
          'Global CDN distribution',
          'Automatic scaling',
        ],
      },
      {
        title: 'Developer Experience',
        description: 'Built by developers, for developers',
        icon: 'Sparkles',
        benefits: [
          'TypeScript first',
          'Comprehensive documentation',
          'CLI tools included',
          'VS Code extensions',
        ],
      },
      {
        title: 'Lightweight',
        description: 'Minimal footprint, maximum impact',
        icon: 'Feather',
        benefits: [
          'Zero dependencies',
          'Tree-shakeable modules',
          'Gzip < 50kb',
          'No runtime overhead',
        ],
      },
    ],
    bottomSection: {
      title: 'Enterprise Ready',
      description:
        'Scales from prototype to production with enterprise-grade security and compliance features.',
    },
  },
};

export const Infrastructure: Story = {
  args: {
    badge: 'INFRASTRUCTURE',
    title: 'Technical Foundation',
    description: 'Robust architecture designed for modern applications',
    cards: [
      {
        title: 'Scalability',
        description: 'Auto-scaling infrastructure',
        icon: 'TrendingUp',
        benefits: [
          'Horizontal scaling',
          'Load balancing',
          'Auto-provisioning',
          'Cost optimization',
        ],
      },
      {
        title: 'Security',
        description: 'Enterprise-grade protection',
        icon: 'Shield',
        benefits: [
          'End-to-end encryption',
          'SOC 2 compliance',
          'Regular audits',
          'Zero-trust architecture',
        ],
      },
      {
        title: 'Monitoring',
        description: 'Full observability stack',
        icon: 'Monitor',
        benefits: [
          'Real-time metrics',
          'Distributed tracing',
          'Log aggregation',
          'Alert management',
        ],
      },
    ],
    bottomSection: {
      title: 'Cloud Native',
      description:
        'Built for the cloud from day one with Kubernetes orchestration and microservices architecture.',
    },
  },
};
