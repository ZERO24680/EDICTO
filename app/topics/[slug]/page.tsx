interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function TopicPage({ params }: PageProps) {
  const { slug } = await params
  
  // TODO: Fetch topic data and related statements from database
  // For now, return a placeholder
  
  return (
    <div className="min-h-screen bg-ivory">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-navy mb-8">
          Topic: {slug}
        </h1>
        <p className="text-lg text-gray-700">
          Cette page affichera tous les communiqués liés à ce thème.
        </p>
      </div>
    </div>
  )
}

