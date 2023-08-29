import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Projects',
      links: [
        {
          text: 'Upcoming',
          href: getPermalink('/projects/upcoming'),
        },
        {
          text: 'Completed',
          href: getPermalink('/projects/completed'),
        },
      ],
    },
    {
      text: 'Testimonials',
      href: getPermalink('/testimonials'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },
  ],
  actions: [{ type: 'button', text: 'Contact Us', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Projects',
      links: [
        { text: 'Upcoming', href: getPermalink('/projects/upcoming') },
        { text: 'Completed', href: getPermalink('/projects/completed') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" target="_blank" referrer="no_referrer" href="https://tokala.dev">Rohit Tokala</a> · All rights reserved.
  `,
};
