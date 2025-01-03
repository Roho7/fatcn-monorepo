import { Mdx } from "@/app/_components/mdx-components"
import { getUrl } from "@/lib/site.utils"
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
          url: '',
          width: 1200,
          height: 630,
          alt: 'fatcn',
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [''],
      creator: "@shadcn",
    },
  }
}

const Page = async ({ params }: DocPageProps) => {
  const doc = await getDocFromParams({ params })

  if (!doc) {
    return null
  }

  return (
    <Mdx code={doc.body.code} />
  )
}

export default Page