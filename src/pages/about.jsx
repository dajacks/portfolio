import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/Danielle-1.png'
import portraitImage2 from '@/images/photos/Danielle-2.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-cyan-500 dark:text-zinc-200 dark:hover:text-cyan-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-cyan-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About | Danielle Jackson</title>
        <meta
          name="description"
          content="I'm Danielle Jackson. I live in Minneapolis, where I write the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
              <Image
                src={portraitImage2}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square -rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hi. I&apos;m Danielle, a content specialist, digital storyteller,
              and puzzle solver in Minneapolis.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Fun fact: someone who loves words is a “logophile.” (Not someone
                who loves representational graphics, apparently.) As a
                logophile, I&apos;m passionate about helping others find just
                the right words to share their thoughts, intentions, and
                differentiators.
              </p>
              <p>
                From a young age, I&apos;ve had what some might call a way with
                words. In fact, a family favorite story to tell about my
                toddlerhood is that I invented my own words, and would use them
                vigorously to demonstrate excitement or enthusiasm.
              </p>
              <p>
                Beginning in about first grade, I began to channel that
                enthusiasm into writing stories, working hard to find just the
                right words to describe what I meant.
              </p>
              <p>Today, I&apos;m much the same.</p>
              <p>
                After studying English and sociology in college (Go Blue!), I
                turned to communications, development, and marketing, my very
                own version of “do what you love and you&apos;ll never work a
                day in your life.” I started my career in the nonprofit sector,
                working in education, environment, and politics before
                transitioning to working at a digital marketing agency and
                freelancing.
              </p>
              <p>
                No matter where I am, or what I&apos;m working on, I&apos;m
                still particular about finding just the right words to describe
                what I mean (even if I&apos;m not making them up anymore).
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                LinkedIn
              </SocialLink>
              <SocialLink
                className="mt-2"
                href="mailto:danielle@daniellejackson.co"
                icon={MailIcon}
              >
                Email
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
