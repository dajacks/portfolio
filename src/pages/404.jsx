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
import portraitImage from '@/images/portrait.jpg'

export default function About() {
  return (
    <>
      <Head>
        <title>404 - Danielle Jackson</title>
        <meta
          name="description"
          content="I'm Danielle Jackson. I live in Minneapolis, where I write the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        Hello
      </Container>
    </>
  )
}
