import { NewUser } from '@/lib/db/schema';
import { setSession } from '@/lib/auth/session';
import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/payments/stripe';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get('session_id');

  if (!sessionId) {
    return NextResponse.redirect(new URL('/pricing', request.url));
  }

  try {
    // Mock checkout session handling

    // Mock user creation/session
    const mockUser: NewUser = {
      id: 'user-1',
      email: 'user@example.com',
      name: 'Mock User',
    };

    console.log('Mock: Successful checkout session processed');

    await setSession(mockUser);
    return NextResponse.redirect(new URL('/dashboard', request.url));
  } catch (error) {
    console.error('Error handling successful checkout:', error);
    return NextResponse.redirect(
      new URL('/pricing?error=checkout', request.url),
    );
  }
}
