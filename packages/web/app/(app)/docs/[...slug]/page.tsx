import DocsRHS from "@/app/_components/docs-rhs"
import { DocsSidebar } from "@/app/_components/docs-sidebar"
import { Mdx } from "@/app/_components/mdx-components"
import { getUrl, siteConfig } from "@/lib/site.utils"
import { getTableOfContents } from "@/lib/tableOfContent"
import { allDocs } from "contentlayer/generated"
import { Metadata } from "next"

interface DocPageProps {
  params: Promise<{
    slug: string[]
  }>
}

async function getDocFromParams({ params }: DocPageProps) {
  const p = await params
  const slug = p.slug?.join("/") || ""
  const doc = allDocs.find((doc) => doc.slugAsParams === slug)

  if (!doc) {
    return null
  }

  return doc
}

export async function generateMetadata({
  params,
}: DocPageProps): Promise<Metadata> {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return {}
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description, 
      type: "article",
      url: getUrl(doc.slug),
      images: [
        {
          url: siteConfig().ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig().name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [siteConfig().ogImage],
      creator: siteConfig().twitter,
    },
  }
}

const Page = async ({ params }: DocPageProps) => {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return null
  }

  const toc = await getTableOfContents(doc.body.raw)

  return (
    <div className="mx-auto md:grid md:grid-cols-[20vw_1fr_20vw]">
      <DocsSidebar />
      <div className="p-8 h-full w-full md:col-start-2 " id="mdx-container">
        <Mdx code={doc.body.code} />
      </div>
      <DocsRHS toc={toc} />
    </div>
  )
}

export default Page