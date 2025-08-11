import { mockStatements, mockTopics, mockOrganizations } from '@/app/(lib)/mock'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-ivory">
      {/* Hero Section */}
      <section className="bg-navy text-ivory py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">
            The official register of verified statements
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Consultez, suivez et archivez toutes les annonces officielles d&apos;organisations vérifiées — en temps réel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/statements"
              className="bg-gold text-navy px-8 py-4 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              Explorer les communiqués
            </Link>
            <Link 
              href="/onboarding"
              className="border-2 border-ivory text-ivory px-8 py-4 rounded-lg font-semibold hover:bg-ivory hover:text-navy transition-colors"
            >
              Créer un profil vérifié
            </Link>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-navy mb-2">2,847</div>
              <div className="text-gray-600">Communiqués archivés</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy mb-2">156</div>
              <div className="text-gray-600">Organisations vérifiées</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy mb-2">12,394</div>
              <div className="text-gray-600">Utilisateurs inscrits</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-navy mb-2">24</div>
              <div className="text-gray-600">Thèmes couverts</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-navy text-center mb-12">Comment ça marche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-navy text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold text-navy mb-2">Publiez</h3>
              <p className="text-gray-700">Les organisations vérifiées publient leurs communiqués officiels</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-navy text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold text-navy mb-2">Recherchez</h3>
              <p className="text-gray-700">Accédez à toutes les déclarations en temps réel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-navy text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold text-navy mb-2">Suivez</h3>
              <p className="text-gray-700">Recevez des alertes ciblées selon vos besoins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Statements */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif text-navy">Derniers communiqués</h2>
            <Link href="/statements" className="text-gold hover:text-navy underline">
              Voir tous →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockStatements.slice(0, 6).map((statement) => (
              <article key={statement.id} className="bg-ivory rounded-lg p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded overflow-hidden">
                    <Image 
                      src={statement.organization.logoUrl || '/logos/default.svg'} 
                      alt={statement.organization.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-600">{statement.organization.name}</span>
                </div>
                <h3 className="font-semibold text-navy mb-2 line-clamp-2">
                  {statement.title}
                </h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">
                  {statement.summaryAI}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {statement.topics?.slice(0, 2).map((topic) => (
                    <span key={topic.topic.id} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                      {topic.topic.name}
                    </span>
                  ))}
                </div>
                <Link 
                  href={`/statements/${statement.organization.slug}/${statement.slug}`}
                  className="text-gold hover:text-navy text-sm font-medium"
                >
                  Lire plus →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 bg-ivory">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-navy text-center mb-12">Thèmes populaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mockTopics.slice(0, 8).map((topic) => (
              <Link 
                key={topic.id}
                href={`/topics/${topic.slug}`}
                className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-gold transition-colors"
              >
                <div className="text-3xl mb-2">📊</div>
                <h3 className="font-semibold text-navy mb-1">{topic.name}</h3>
                <p className="text-sm text-gray-600">Communiqués</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Organizations Most Followed */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif text-navy text-center mb-12">Organisations les plus suivies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockOrganizations.slice(0, 6).map((org) => (
              <div key={org.id} className="bg-ivory rounded-lg p-6 border border-gray-200 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded overflow-hidden">
                  <Image 
                    src={org.logoUrl || '/logos/default.svg'} 
                    alt={org.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-navy mb-2">{org.name}</h3>
                <p className="text-sm text-gray-600 mb-3">Abonnés</p>
                <Link 
                  href={`/org/${org.slug}`}
                  className="text-gold hover:text-navy text-sm font-medium"
                >
                  Voir le profil →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
