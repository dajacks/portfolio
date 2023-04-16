import Image from 'next/future/image'
import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoArticles from '@/images/photos/article.png'
import logoContentStrategy from '@/images/photos/contentstrategy.png'
import logoEmail from '@/images/photos/email.png'
import logoSocial from '@/images/photos/social.png'
import logoSocialStrategy from '@/images/photos/socialstrategy.png'
import logoWebCopy from '@/images/photos/webcopy.png'
import logoOther from '@/images/photos/other.png'

const portfolio = [
  {
    name: 'Articles & Blogs',
    description:
      'Say what you mean and mean what you say. Articles using SEO best practices help you share information about your work while improving your online footprint.',
    link: { href: '/portfolio/article.pdf', label: 'Article Sample' },
    logo: logoArticles,
  },
  {
    name: 'Content Strategy',
    description:
      'There\'s no such thing as "stand-alone content." With a holistic content strategy, all your content will work together to achieve your desired results.',
    link: {
      href: '/portfolio/contentstrategy.pdf',
      label: 'Content Strategy Sample',
    },
    logo: logoContentStrategy,
  },
  {
    name: 'Email',
    description:
      'How many emails do you get a day? Make yours count. From regular email newsletters to custom workflows triggered by users, email helps you stay top of mind.',
    link: { href: '/portfolio/email.pdf', label: 'Email Sample' },
    logo: logoEmail,
  },
  {
    name: 'Organic Social',
    description:
      "Over half of the global population is on social media. Organic social media helps you build brand awareness and engage with your audience, no matter what platforms you're using.",
    link: {
      href: '/portfolio/socialstrategy.pdf',
      label: 'Organic Social Sample',
    },
    logo: logoSocial,
  },
  {
    name: 'Web Copy',
    description:
      'There are over a billion websites on the internet. Be confident yours is a good one with a website that represents your organization and is mindful of current best practices.',
    link: {
      href: '/portfolio/webcopy.pdf',
      label: 'Web Copy Sample',
    },
    logo: logoWebCopy,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio - Danielle Jackson</title>
        <meta
          name="description"
          content="Things I've made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="A cross-sectional sample of my work."
        intro="As a content specialist, I'm passionate about finding the right words. My background in nonprofit communications and B2B digital marketing have given me experience in strategy and execution for numerous causes and industries, from education and politics to technology and finance. No problem is too niche, no content is too small."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolio.map((project) => (
            <Card as="li" key={project.name}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-cyan-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
