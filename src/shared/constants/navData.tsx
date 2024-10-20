import {
  ClientsIcon,
  CompaniesIcon,
  DashboardIcon,
  FeedbackIcon,
  InvoiceIcon,
  SupportIcon,
} from '@components/Icons';
import { NavItem } from '@components/navigation/NavItem';
import { useTranslation } from 'react-i18next';

export const MainNavData = () => {
  const { t } = useTranslation();

  const data: NavItem[] = [
    {
      name: t('navigation.main.dashboard', 'Dashboard'),
      url: '/dashboard',
      icon: DashboardIcon,
    },
    {
      name: t('navigation.main.invoicing', 'Invoicing'),
      url: '/invoices',
      icon: InvoiceIcon,
    },
    {
      name: t('navigation.main.companies', 'Companies'),
      url: '/companies',
      icon: CompaniesIcon,
    },
    {
      name: t('navigation.main.customers', 'Customers'),
      url: '/customers',
      icon: ClientsIcon,
    },
  ];

  return data;
};

export const SecondaryNavData = () => {
  const { t } = useTranslation();
  const data: NavItem[] = [
    {
      name: t('navigation.secondary.support', 'Support'),
      url: '/support',
      icon: SupportIcon,
    },
    {
      name: t('navigation.secondary.feedback', 'Feedback'),
      url: '/feedback',
      icon: FeedbackIcon,
    },
  ];

  return data;
};

/*
Example nav with sub items data structure:
navWithSubItems: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],

  */
