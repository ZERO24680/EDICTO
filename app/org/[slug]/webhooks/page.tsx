interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function OrgWebhooksPage({ params }: PageProps) {
  const { slug } = await params
  
  return (
    <div className="min-h-screen bg-ivory">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif text-navy mb-8">
          Webhooks — {slug}
        </h1>
        <p className="text-lg text-gray-700">
          Configure webhook endpoints for real-time notifications.
        </p>
      </div>
    </div>
  )
}

