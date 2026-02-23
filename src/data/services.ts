export type Service = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  cardImage: string;
  subServices: string[];
};

export const services: Service[] = [
  {
    slug: 'professional-accounting',
    title: 'Professional Accounting Services',
    summary:
      'Reliable accounting systems that give business leaders complete visibility into performance, compliance, and profitability.',
    heroImage: '/images/service-accounting.jpg',
    cardImage: '/images/service-accounting.jpg',
    subServices: [
      'Monthly & Annual Bookkeeping',
      'Payroll Processing & Compliance',
      'Management Accounts Preparation',
      'Annual Financial Statements (IFRS, GRAP, MCIS, IPSAS)',
      'Accounting Standards Consulting',
      'Asset Management & Depreciation',
      'Cash Flow Management',
      'Financial Controls Implementation'
    ]
  },
  {
    slug: 'tax-advisory',
    title: 'Tax Advisory Services',
    summary:
      'Strategic tax planning and compliant submissions that protect your business while optimizing tax efficiency across obligations.',
    heroImage: '/images/service-tax.jpg',
    cardImage: '/images/service-tax.jpg',
    subServices: [
      'SARS Registrations (Income Tax, VAT, PAYE)',
      'Corporate Tax Returns',
      'VAT Returns & Compliance',
      'PAYE & UIF Submissions (IRP6)',
      'Tax Planning & Optimization',
      'Tax Dispute Resolution',
      'Transfer Pricing Documentation',
      'Individual Tax Returns (ITR12)'
    ]
  },
  {
    slug: 'afs-independent-reviews',
    title: 'AFS & Independent Reviews',
    summary:
      'Independent and standards-aligned review engagements that strengthen governance and elevate confidence in your reporting.',
    heroImage: '/images/service-afs.jpg',
    cardImage: '/images/service-afs.jpg',
    subServices: [
      'Annual Financial Statement Compilation',
      'Independent Reviews (Companies Act Compliant)',
      'Agreed-Upon Procedures',
      'Internal Audit Services',
      'Compliance Monitoring',
      'Risk Assessment & Management',
      'Regulatory Reporting',
      'CIPC Compliance Reviews'
    ]
  },
  {
    slug: 'strategic-financial-consulting',
    title: 'Strategic Financial Consulting',
    summary:
      'Forward-looking advisory services that turn financial information into clear strategic decisions for growth and resilience.',
    heroImage: '/images/service-strategy.jpg',
    cardImage: '/images/service-strategy.jpg',
    subServices: [
      'Business Budgeting & Forecasting',
      'Business Valuations',
      'Financial Planning & Analysis',
      'Cash Flow Projections',
      'Performance Management Systems',
      'Business Process Analysis',
      'Merger & Acquisition Support',
      'Investment Advisory'
    ]
  },
  {
    slug: 'individual-tax-services',
    title: 'Individual Tax Services',
    summary:
      'Personalized tax support for professionals and families, with proactive planning and reliable SARS engagement.',
    heroImage: '/images/service-individual-tax.jpg',
    cardImage: '/images/service-individual-tax.jpg',
    subServices: [
      'Personal Tax Consultations',
      'ITR12 Preparation & Submission',
      'Tax Planning for Individuals',
      'Capital Gains Tax Advisory',
      'Estate Planning & Tax',
      'Expatriate Tax Services',
      'Tax Compliance Reviews',
      'SARS Correspondence Handling'
    ]
  },
  {
    slug: 'business-setup-compliance',
    title: 'Business Setup & Compliance',
    summary:
      'End-to-end support to establish, structure, and keep your business compliant in South Africa’s regulatory environment.',
    heroImage: '/images/service-business-setup.jpg',
    cardImage: '/images/service-business-setup.jpg',
    subServices: [
      'Company Registration (CIPC)',
      'Business License Applications',
      'BEE Compliance Consulting',
      'Corporate Governance Advisory',
      'Secretarial Services',
      'Annual Return Submissions',
      'Regulatory Compliance Monitoring',
      'Business Structure Optimization'
    ]
  }
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
