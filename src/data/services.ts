export type ServiceSubService = {
  title: string;
  description: string;
  deliverables?: string[];
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  heroImage: string;
  cardImage: string;
  intro: string;
  subServices: ServiceSubService[];
  typicalOutcomes: string[];
};

const HOW_WE_WORK_STEPS = [
  {
    title: 'Discovery',
    description:
      'We begin by understanding your current financial position, compliance status, reporting needs, and operational priorities in the South African context.'
  },
  {
    title: 'Plan',
    description:
      'We develop a clear scope, timelines, and responsibilities so your team knows exactly what will be delivered and when.'
  },
  {
    title: 'Delivery',
    description:
      'Our team executes the agreed work accurately and transparently, with regular updates and practical recommendations at each stage.'
  },
  {
    title: 'Support',
    description:
      'We remain available after delivery to resolve follow-up queries, maintain compliance momentum, and adapt as your business evolves.'
  }
] as const;

export const services: Service[] = [
  {
    slug: 'professional-accounting',
    title: 'Professional Accounting Services',
    summary:
      'Reliable accounting systems that give business leaders complete visibility into performance, compliance, and profitability.',
    heroImage: '/images/service-accounting.jpg',
    cardImage: '/images/service-accounting.jpg',
    intro:
      'Our professional accounting services help South African businesses build dependable financial records and reporting discipline. We combine technical accuracy with practical business insight so leadership teams can make informed decisions quickly. The result is stronger compliance, clearer visibility, and better control over profitability.',
    subServices: [
      {
        title: 'Monthly & Annual Bookkeeping',
        description:
          'We maintain complete and accurate transaction records on a monthly and annual basis, tailored for SMEs and established businesses that need reliable books. This includes reconciliations and ledger integrity checks to ensure your reports are decision-ready. You gain confidence that your financial data is current, consistent, and audit-supportive.',
        deliverables: ['General ledger maintenance', 'Bank and control account reconciliations', 'Period-end bookkeeping files']
      },
      {
        title: 'Payroll Processing & Compliance',
        description:
          'We process payroll with attention to PAYE, UIF, and SDL requirements for businesses employing local teams. Our service supports accurate payslips, deductions, and timely filings to reduce statutory risk. This helps employers protect employee trust while remaining compliant with labour and tax obligations.',
        deliverables: ['Monthly payroll calculations', 'Statutory deduction schedules', 'Payroll compliance support']
      },
      {
        title: 'Management Accounts Preparation',
        description:
          'We prepare monthly or quarterly management accounts for owners, executives, and department heads who need timely insight. Reports highlight performance trends, cost behaviour, and margin movement in a clear format. This enables faster corrective action and stronger operational planning.',
        deliverables: ['Management income statement', 'Balance sheet summaries', 'Variance and trend commentary']
      },
      {
        title: 'Annual Financial Statements (IFRS, GRAP, MCIS, IPSAS)',
        description:
          'We compile annual financial statements aligned to applicable reporting frameworks, including IFRS, GRAP, MCIS, and IPSAS where relevant. This service is suited to private entities, public sector bodies, and organisations requiring standards-based reporting. You receive statements that are technically sound and ready for stakeholder use.',
        deliverables: ['Statement compilation pack', 'Framework-aligned disclosures', 'Year-end financial statement set']
      },
      {
        title: 'Accounting Standards Consulting',
        description:
          'We advise finance teams and leadership on the practical interpretation of accounting standards for complex transactions. Whether you are dealing with new contracts, asset treatment, or classification questions, we provide clear direction. This reduces uncertainty and supports consistent policy application across reporting periods.'
      },
      {
        title: 'Asset Management & Depreciation',
        description:
          'We establish and maintain fixed asset registers with appropriate categorisation, useful lives, and depreciation methods. This service supports organisations with growing asset bases that require reliable capex tracking and reporting. You benefit from cleaner records, improved controls, and more accurate year-end reporting.',
        deliverables: ['Fixed asset register updates', 'Depreciation schedule preparation', 'Asset verification support']
      },
      {
        title: 'Cash Flow Management',
        description:
          'We help businesses monitor and manage inflows, outflows, and short-term liquidity demands through structured cash flow oversight. By identifying pressure points early, we help management prioritise collections, spending, and working capital actions. The outcome is improved cash stability and fewer operational disruptions.'
      },
      {
        title: 'Financial Controls Implementation',
        description:
          'We design and embed practical internal financial controls that suit your company size, risk profile, and reporting needs. This includes approval structures, reconciliations, and segregation practices to reduce fraud and error risk. Stronger controls improve governance and increase confidence in your financial outputs.'
      }
    ],
    typicalOutcomes: [
      'Cleaner monthly records and faster period-end close cycles.',
      'Improved financial visibility for owners and managers.',
      'Reduced compliance exposure through better process discipline.',
      'Higher confidence in data used for strategic decisions.',
      'Stronger internal controls and accountability.'
    ]
  },
  {
    slug: 'tax-advisory',
    title: 'Tax Advisory Services',
    summary:
      'Strategic tax planning and compliant submissions that protect your business while optimizing tax efficiency across obligations.',
    heroImage: '/images/service-tax.jpg',
    cardImage: '/images/service-tax.jpg',
    intro:
      'Our tax advisory services support organisations that want to remain compliant while managing their tax position responsibly. We work proactively with business owners and finance teams to prevent avoidable penalties and administrative delays. With clear guidance and reliable execution, your tax function becomes more predictable and efficient.',
    subServices: [
      {
        title: 'SARS Registrations (Income Tax, VAT, PAYE)',
        description:
          'We manage SARS registrations for companies that are newly formed, expanding, or formalising operations. The process covers eligibility checks, required documentation, and submission follow-through. You start on the right compliance footing from day one.'
      },
      {
        title: 'Corporate Tax Returns',
        description:
          'We prepare and submit corporate income tax returns with supporting schedules and reconciliations. This is ideal for businesses needing accurate annual submissions and clear tax positions. Timely and defensible returns reduce risk and support smoother SARS engagement.'
      },
      {
        title: 'VAT Returns & Compliance',
        description:
          'We prepare VAT returns and review VAT treatment across key transaction streams to reduce errors. The service is designed for VAT-registered entities that need dependable periodic filings. You gain better compliance consistency and fewer surprises during reviews or audits.',
        deliverables: ['VAT return preparation', 'Input/output VAT review', 'Filing calendar support']
      },
      {
        title: 'PAYE & UIF Submissions (IRP6)',
        description:
          'We support payroll-related tax submissions, including PAYE and UIF obligations, with aligned provisional tax planning where relevant. This assists employers who need dependable filing routines and accurate declarations. The value is reduced penalty exposure and improved statutory confidence.'
      },
      {
        title: 'Tax Planning & Optimization',
        description:
          'We provide forward-looking tax planning that aligns commercial objectives with compliant structuring choices. This service suits growing businesses evaluating profit extraction, investment timing, and funding decisions. You benefit from a clearer view of tax implications before committing to major actions.'
      },
      {
        title: 'Tax Dispute Resolution',
        description:
          'We assist with SARS queries, objections, and appeals, ensuring responses are technically grounded and properly documented. Businesses facing assessments or penalties receive practical guidance through each stage of the process. The goal is a fair, timely, and evidence-based resolution.'
      },
      {
        title: 'Transfer Pricing Documentation',
        description:
          'We prepare transfer pricing documentation for groups with related-party cross-border transactions. Our approach helps organisations demonstrate arm’s-length principles and maintain defensible records. This strengthens readiness for regulatory scrutiny and reduces adjustment risk.'
      },
      {
        title: 'Individual Tax Returns (ITR12)',
        description:
          'We prepare and submit ITR12 returns for directors, shareholders, and professionals linked to business structures. This ensures personal filings remain aligned with payroll, investment, and other taxable income sources. Clients gain complete submissions and reduced filing stress.'
      }
    ],
    typicalOutcomes: [
      'Timely submissions with lower penalty and interest exposure.',
      'Improved alignment between tax strategy and business decisions.',
      'Better SARS readiness through accurate supporting records.',
      'Clearer visibility of tax obligations throughout the year.',
      'Reduced administrative burden on internal finance teams.'
    ]
  },
  {
    slug: 'afs-independent-reviews',
    title: 'AFS & Independent Reviews',
    summary:
      'Independent and standards-aligned review engagements that strengthen governance and elevate confidence in your reporting.',
    heroImage: '/images/elephant-hero.jpg',
    cardImage: '/images/service-afs.jpg',
    intro:
      'Our AFS and independent review services strengthen trust in your financial reporting and governance processes. We work with private companies, regulated entities, and organisations that need objective assurance support. Every engagement is delivered with professional scepticism, clarity, and practical recommendations.',
    subServices: [
      {
        title: 'Annual Financial Statement Compilation',
        description:
          'We compile annual financial statements from underlying accounting records using applicable reporting standards. This is suited to organisations requiring complete year-end packs for shareholders, lenders, or regulators. You receive clear, consistent, and presentation-ready statements.'
      },
      {
        title: 'Independent Reviews (Companies Act Compliant)',
        description:
          'We perform independent reviews in line with South African Companies Act requirements and relevant review standards. The service helps qualifying entities obtain credible assurance over financial information. Management and stakeholders gain increased confidence in reported results.'
      },
      {
        title: 'Agreed-Upon Procedures',
        description:
          'We execute focused procedures against specific financial areas identified by management or stakeholders. This is useful where targeted assurance is required without a full-scope review or audit. The outcome is concise factual reporting on the agreed matters.'
      },
      {
        title: 'Internal Audit Services',
        description:
          'We provide internal audit support to evaluate control design and operating effectiveness across core processes. Organisations with governance committees or expanding operations use this to strengthen oversight. Findings are translated into practical actions that improve resilience and accountability.'
      },
      {
        title: 'Compliance Monitoring',
        description:
          'We monitor compliance against key financial, statutory, and internal policy requirements on a recurring basis. This service supports teams that need independent oversight between year-end cycles. Regular monitoring helps identify and resolve issues before they escalate.'
      },
      {
        title: 'Risk Assessment & Management',
        description:
          'We facilitate risk identification and assessment for financial reporting, controls, and regulatory obligations. This equips management with a prioritised risk view and mitigation roadmap. Better risk management supports steadier operations and stronger governance decisions.'
      },
      {
        title: 'Regulatory Reporting',
        description:
          'We assist with the preparation and review of regulatory reporting outputs required by oversight bodies and stakeholders. The service is designed for organisations operating in controlled environments where reporting quality is critical. You gain confidence that submissions are complete, coherent, and timely.'
      },
      {
        title: 'CIPC Compliance Reviews',
        description:
          'We review CIPC-related compliance requirements and filing readiness to keep your company in good standing. This includes identifying gaps in records, returns, and governance documentation. Early remediation reduces compliance friction and supports uninterrupted operations.'
      }
    ],
    typicalOutcomes: [
      'Higher confidence in year-end and stakeholder reporting.',
      'Improved governance through stronger control visibility.',
      'Early identification of compliance and process gaps.',
      'Clear remediation actions aligned to operational realities.',
      'Reduced risk of avoidable regulatory issues.'
    ]
  },
  {
    slug: 'strategic-financial-consulting',
    title: 'Strategic Financial Consulting',
    summary:
      'Forward-looking advisory services that turn financial information into clear strategic decisions for growth and resilience.',
    heroImage: '/images/service-strategy.jpg',
    cardImage: '/images/service-strategy.jpg',
    intro:
      'Our strategic financial consulting services help leaders convert financial data into confident, forward-looking decisions. We work with growing businesses, established firms, and executive teams navigating change. By combining analysis with practical implementation support, we help organisations improve performance with discipline.',
    subServices: [
      {
        title: 'Business Budgeting & Forecasting',
        description:
          'We build realistic budgets and rolling forecasts aligned to your operating model, market assumptions, and growth targets. This supports management teams that need sharper planning discipline and clearer accountability. Better forecasting improves resource allocation and decision timing.'
      },
      {
        title: 'Business Valuations',
        description:
          'We prepare valuation analyses for transactions, shareholder matters, fundraising, and strategic planning. The service is suitable for owners and investors who need an objective view of enterprise value. Clear valuation insight improves negotiation position and strategic clarity.'
      },
      {
        title: 'Financial Planning & Analysis',
        description:
          'We deliver FP&A support that links financial performance with operational drivers across products, regions, or business units. Leadership teams use these insights to understand margins, productivity, and growth opportunities. The outcome is sharper planning and better-informed executive decisions.'
      },
      {
        title: 'Cash Flow Projections',
        description:
          'We model short- and medium-term cash flow scenarios to assess liquidity and funding requirements under different conditions. This is valuable for businesses facing expansion, volatility, or debt obligations. You gain earlier warning signals and a stronger cash management strategy.'
      },
      {
        title: 'Performance Management Systems',
        description:
          'We design practical KPI frameworks and reporting rhythms that connect strategy to measurable outcomes. This helps management teams move beyond static reports toward active performance management. Better measurement enables faster intervention and sustained execution focus.'
      },
      {
        title: 'Business Process Analysis',
        description:
          'We analyse core finance-related processes to identify inefficiencies, control gaps, and handoff issues that slow delivery. Organisations seeking scale or improved quality use this service to streamline operations. The result is improved throughput, reduced friction, and clearer accountability.'
      },
      {
        title: 'Merger & Acquisition Support',
        description:
          'We provide financial support across M&A activities, including preliminary analysis, due diligence assistance, and integration planning input. This assists buyers, sellers, and investors evaluating transaction readiness and risk. You gain a clearer view of value drivers and execution priorities.'
      },
      {
        title: 'Investment Advisory',
        description:
          'We offer financially grounded advisory input for investment decisions, capital deployment, and return expectations. This is intended for businesses and decision-makers evaluating growth opportunities in a disciplined way. Clients benefit from structured analysis that supports risk-aware investment choices.'
      }
    ],
    typicalOutcomes: [
      'Stronger financial planning and forecasting accuracy.',
      'Better visibility into performance drivers and trade-offs.',
      'Improved liquidity preparedness under multiple scenarios.',
      'Clearer strategic choices backed by robust analysis.',
      'More disciplined capital and investment decisions.'
    ]
  },
  {
    slug: 'individual-tax-services',
    title: 'Individual Tax Services',
    summary:
      'Personalized tax support for professionals and families, with proactive planning and reliable SARS engagement.',
    heroImage: '/images/service-individual-tax.jpg',
    cardImage: '/images/service-individual-tax.jpg',
    intro:
      'Our individual tax services are designed for professionals, business owners, and families who need clarity and confidence with personal tax matters. We provide practical guidance that balances compliance obligations with long-term planning. With proactive support, you stay prepared and reduce avoidable tax stress.',
    subServices: [
      {
        title: 'Personal Tax Consultations',
        description:
          'We provide one-on-one consultations to review your tax profile, obligations, and planning opportunities. This is ideal for individuals navigating salary, investment, rental, or business-related income streams. You receive clear guidance tailored to your circumstances and goals.'
      },
      {
        title: 'ITR12 Preparation & Submission',
        description:
          'We prepare and submit ITR12 returns with careful reconciliation of income sources, deductions, and supporting records. The service suits taxpayers who want complete, accurate filings and fewer SARS queries. Timely submission helps avoid penalties and compliance disruptions.'
      },
      {
        title: 'Tax Planning for Individuals',
        description:
          'We help individuals plan tax positions in advance of key events such as bonuses, investment decisions, or business profit distributions. Planning is structured around compliant strategies and realistic assumptions. The result is better tax predictability and improved financial confidence.'
      },
      {
        title: 'Capital Gains Tax Advisory',
        description:
          'We advise on CGT implications for disposals of property, investments, and other assets. This service supports taxpayers who need to evaluate timing, records, and potential liabilities before transactions are finalised. You gain a clearer understanding of impact and options.'
      },
      {
        title: 'Estate Planning & Tax',
        description:
          'We provide tax-focused input for estate planning to help families structure legacy intentions efficiently. The service considers estate duty, liquidity implications, and reporting requirements. This helps reduce uncertainty and supports smoother intergenerational planning.'
      },
      {
        title: 'Expatriate Tax Services',
        description:
          'We support expatriates and globally mobile professionals with tax residency considerations, income treatment, and filing obligations. The service is useful for individuals earning across jurisdictions while maintaining South African tax responsibilities. You gain clearer compliance direction in a complex area.'
      },
      {
        title: 'Tax Compliance Reviews',
        description:
          'We conduct personal tax compliance reviews to identify missing filings, documentation gaps, and historical risks. Individuals with changing income profiles or previous filing uncertainty benefit from this check-up. Early correction improves SARS readiness and long-term compliance.'
      },
      {
        title: 'SARS Correspondence Handling',
        description:
          'We manage SARS correspondence responses, including verification requests and follow-up communications. This supports taxpayers who need technical assistance and structured case handling. You get timely, professional engagement that reduces stress and improves response quality.'
      }
    ],
    typicalOutcomes: [
      'More accurate and timely personal tax submissions.',
      'Reduced uncertainty around SARS requests and queries.',
      'Improved planning for major personal financial decisions.',
      'Greater confidence in ongoing tax compliance.',
      'Lower risk of penalties from missed obligations.'
    ]
  },
  {
    slug: 'business-setup-compliance',
    title: 'Business Setup & Compliance',
    summary:
      'End-to-end support to establish, structure, and keep your business compliant in South Africa’s regulatory environment.',
    heroImage: '/images/service-business-setup.jpg',
    cardImage: '/images/service-business-setup.jpg',
    intro:
      'Our business setup and compliance services help entrepreneurs and growing companies establish strong operational foundations. We guide clients through the practical and regulatory requirements of doing business in South Africa. The focus is on getting your structure right early and keeping compliance sustainable as you scale.',
    subServices: [
      {
        title: 'Company Registration (CIPC)',
        description:
          'We manage CIPC company registrations from name reservation through entity setup documentation. This service is ideal for founders launching new ventures or formalising existing operations. You start with a properly constituted legal entity ready for commercial activity.'
      },
      {
        title: 'Business License Applications',
        description:
          'We assist with identifying and applying for business licenses relevant to your sector and locality. Companies entering regulated activities benefit from clearer application preparation and follow-up. The value is faster readiness and reduced administrative delays.'
      },
      {
        title: 'BEE Compliance Consulting',
        description:
          'We provide practical BEE compliance guidance, including planning for scorecard considerations and supporting documentation readiness. This is suitable for businesses seeking improved tender readiness and stakeholder alignment. You gain a structured pathway toward sustainable compliance progress.'
      },
      {
        title: 'Corporate Governance Advisory',
        description:
          'We advise directors and management on governance practices that support accountability, decision quality, and compliance integrity. The service helps businesses establish practical governance routines appropriate to their size and stage. Better governance improves confidence among investors, lenders, and partners.'
      },
      {
        title: 'Secretarial Services',
        description:
          'We provide company secretarial support for maintaining statutory records, resolutions, and governance documentation. This is valuable for businesses that need consistent administrative discipline without overburdening internal teams. You remain organised and prepared for formal reporting requirements.'
      },
      {
        title: 'Annual Return Submissions',
        description:
          'We prepare and submit annual returns to keep entities compliant and in good standing with required authorities. Companies that miss return cycles often face avoidable penalties and status complications. Timely submissions protect continuity and reduce regulatory friction.'
      },
      {
        title: 'Regulatory Compliance Monitoring',
        description:
          'We monitor ongoing compliance obligations across key deadlines and regulatory touchpoints relevant to your business. This service is suited to teams that need a dependable compliance rhythm as operations expand. You benefit from fewer missed obligations and clearer compliance oversight.'
      },
      {
        title: 'Business Structure Optimization',
        description:
          'We review your legal and operational structure to improve tax efficiency, governance clarity, and scalability. This supports businesses preparing for growth, investment, or succession decisions. The outcome is a structure that better fits your strategic direction and risk profile.'
      }
    ],
    typicalOutcomes: [
      'Faster and cleaner setup of new business entities.',
      'Improved ongoing compliance across statutory requirements.',
      'Stronger governance and documentation discipline.',
      'Reduced risk of avoidable penalties and status issues.',
      'A business structure better aligned to long-term growth.'
    ]
  }
];

export const howWeWorkSteps = HOW_WE_WORK_STEPS;

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
