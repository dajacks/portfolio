import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-10">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Danielle Jackson</title>
        <meta
          name="description"
          content="Writing is such a personal activity for everyone, I don't know if I believe that any two people will use the exact same set-ups. If you're curious, though, these are the things I use to do my work, both by machine and by hand."
        />
      </Head>
      <SimpleLayout
        title="What I use for writing."
        intro="Writing is such a personal activity for everyone, I don't know if I believe that any two people will use the exact same set-ups. If you're curious, though, these are the things I use to do my work, both by machine and by hand."
      >
        <div className="space-y-20">
          <ToolsSection title="Digital">
            <Tool title="13” MacBook Pro, 2019">
              If my writing is the end, this is the means. My brother helped me
              choose the specifications when I bought it, and it&apos;s served
              me well ever since.
            </Tool>
            <Tool title="LG 34” Ultrawide Curved 88-B">
              This is a much fancier monitor than I would choose for myself, but
              it&apos;s wide enough to accommodate two side-by-side windows
              easily, which is a must.
            </Tool>
            <Tool title="Apple Magic Keyboard and Trackpad">
              I keep my laptop propped up on old textbooks so it&apos;s more at
              eye level. Having a keyboard and mouse lets me keep working
              without straining.
            </Tool>
            <Tool title="Herman Miller Aeron Chair">
              My partner&apos;s office uses these chairs, and he became
              obsessed. Now we have them at home. It&apos;s just big enough for
              me to perch on to be my most creative self.
            </Tool>
            <Tool title="Notion">
              Nothing about Notion being on this list will be surprising to
              anyone who knows me. I use Notion to keep track of everything,
              from tasks and deadlines to notes and ideas.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Analog">
            <Tool title="Leuchtturm1917, Medium A5, Plain, Hardcover, Black">
              I&apos;ve been using Leuchtturm almost exclusively for a decade
              now. The paper weight is good, the construction is great,
              they&apos;re easy to bring along wherever I&apos;m going, and they
              all look very nice together on my shelves.
            </Tool>
            <Tool title="Sakura Pigma Micron 01 (0.25 MM), Black">
              Microns are unnecessary for the writing I do by hand, but
              they&apos;re smooth to write with and easy to use. The archival
              ink means nothing will fade or smear over time, too, which I
              appreciate.
            </Tool>
            <Tool title="Pilot G2 0.38 MM">
              Another solid pen. I like any pen that has a very fine point, so —
              with all due respect to the 0.7 people — I&apos;m a 0.38 or bust
              kind of person.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
