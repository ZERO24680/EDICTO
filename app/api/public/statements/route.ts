import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/app/(lib)/prisma'
import { mockStatements } from '@/app/(lib)/mock'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const topic = searchParams.get('topic')
    const org = searchParams.get('org')
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '10')
    
    // Try to fetch from database first
    try {
      const whereClause: Record<string, unknown> = { status: 'PUBLISHED' }
      
      if (topic) {
        whereClause.topics = { some: { topic: { slug: topic } } }
      }
      
      if (org) {
        whereClause.organization = { slug: org }
      }
      
      const statements = await prisma.statement.findMany({
        where: whereClause,
        include: {
          organization: {
            select: { name: true, slug: true, logoUrl: true }
          },
          topics: {
            include: { topic: { select: { name: true, slug: true } } }
          },
          currentVersion: {
            select: { contentText: true }
          }
        },
        orderBy: { publishedAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit
      })
      
      return NextResponse.json({ statements, page, limit })
    } catch (dbError) {
      // Fallback to mock data if database is not available
      console.log('Database error, using mock data:', dbError)
      
      let filteredStatements = mockStatements
      
      if (topic) {
        filteredStatements = filteredStatements.filter(s => 
          s.topics?.some(t => t.topic.slug === topic) || false
        )
      }
      
      if (org) {
        filteredStatements = filteredStatements.filter(s => 
          s.organization.slug === org
        )
      }
      
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const paginatedStatements = filteredStatements.slice(startIndex, endIndex)
      
      return NextResponse.json({ 
        statements: paginatedStatements, 
        page, 
        limit,
        total: filteredStatements.length 
      })
    }
  } catch (error) {
    console.error('Error fetching statements:', error)
    return NextResponse.json(
      { error: 'Failed to fetch statements' },
      { status: 500 }
    )
  }
}

