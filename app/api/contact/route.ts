import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message, gdprConsent } = await request.json()
    
    // TODO: Implement email sending logic
    // For now, just return success
    
    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully' 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to send message' },
      { status: 500 }
    )
  }
}

