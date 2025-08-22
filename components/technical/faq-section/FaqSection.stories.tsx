import type { Meta, StoryObj } from '@storybook/react';
import FaqSection from './FaqSection';

const meta: Meta<typeof FaqSection> = {
  title: 'Technical/FaqSection',
  component: FaqSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: 'FAQ',
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about our technical implementation',
    faqs: [
      {
        question: 'What programming languages are supported?',
        answer:
          'We support all major programming languages including JavaScript, TypeScript, Python, Go, Rust, and more. Our platform is language-agnostic and works with any tech stack.',
      },
      {
        question: 'How does the API rate limiting work?',
        answer:
          'Our API uses a token bucket algorithm with configurable limits per endpoint. Enterprise customers get dedicated rate limits and can request custom quotas based on their usage patterns.',
      },
      {
        question: 'What about data security and compliance?',
        answer:
          'We implement enterprise-grade security with SOC 2 Type II compliance, end-to-end encryption, and regular security audits. All data is encrypted at rest and in transit using industry-standard protocols.',
      },
      {
        question: 'Can I self-host the solution?',
        answer:
          'Yes, we offer both cloud-hosted and self-hosted options. The self-hosted version includes Docker containers, Kubernetes manifests, and comprehensive deployment documentation.',
      },
      {
        question: 'What monitoring and observability features are included?',
        answer:
          'Our platform includes built-in metrics, logging, distributed tracing, and alerting. We integrate with popular tools like Prometheus, Grafana, and Datadog for comprehensive observability.',
      },
    ],
  },
};

export const Development: Story = {
  args: {
    badge: 'DEVELOPER FAQ',
    title: 'Technical Questions',
    subtitle: 'Common developer questions about implementation and integration',
    faqs: [
      {
        question: 'How do I integrate with existing CI/CD pipelines?',
        answer:
          'We provide GitHub Actions, GitLab CI, and Jenkins plugins. You can also use our CLI tool or REST API for custom integrations with any CI/CD system.',
      },
      {
        question: 'What testing frameworks are supported?',
        answer:
          'We support all major testing frameworks including Jest, Mocha, PyTest, Go Test, and more. Our platform automatically detects your test setup and provides optimized execution strategies.',
      },
      {
        question: 'How does the caching mechanism work?',
        answer:
          'We use intelligent multi-layer caching with automatic invalidation. The system caches at the CDN, application, and database levels, with smart cache warming and purging strategies.',
      },
      {
        question: 'Can I customize the development environment?',
        answer:
          'Absolutely. You can customize everything from runtime versions to environment variables. We support Docker-based environments and provide templates for popular tech stacks.',
      },
    ],
  },
};
