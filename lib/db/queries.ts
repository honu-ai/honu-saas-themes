// Mock database queries for template purposes
// In a real implementation, these would be actual database queries

import { User, TeamDataWithMembers, ActivityType } from './schema';
import { getSession } from '@/lib/auth/session';

export async function getUser(): Promise<User | null> {
  // Mock getting current user from session
  const session = await getSession();
  if (!session?.user?.id) return null;

  return getUserById(session.user.id.toString());
}

export async function getUserById(id: string): Promise<User | null> {
  // Mock user data
  return {
    id,
    email: 'user@example.com',
    name: 'Mock User',
    image: null,
    role: 'owner' as const,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}

export async function getUserWithTeam(
  id: string,
): Promise<(User & { team: TeamDataWithMembers }) | null> {
  const user = await getUserById(id);
  if (!user) return null;

  return {
    ...user,
    team: {
      id: 'team-1',
      name: 'Mock Team',
      slug: 'mock-team',
      stripeCustomerId: 'cus_mock',
      stripeSubscriptionId: 'sub_mock',
      stripeProductId: 'prod_mock_basic',
      credits: 1000,
      subscriptionStatus: 'active',
      planName: 'Basic Plan',
      createdAt: new Date(),
      updatedAt: new Date(),
      members: [
        {
          id: 'member-1',
          teamId: 'team-1',
          userId: id,
          role: 'owner' as const,
          createdAt: new Date(),
          user,
        },
      ],
    },
  };
}

export async function getTeamForUser(
  userId: string,
): Promise<TeamDataWithMembers | null> {
  const user = await getUserById(userId);
  if (!user) return null;

  return {
    id: 'team-1',
    name: 'Mock Team',
    slug: 'mock-team',
    stripeCustomerId: 'cus_mock',
    stripeSubscriptionId: 'sub_mock',
    createdAt: new Date(),
    updatedAt: new Date(),
    members: [
      {
        id: 'member-1',
        teamId: 'team-1',
        userId,
        role: 'owner' as const,
        createdAt: new Date(),
        user,
      },
    ],
  };
}

export async function getUserActiveSubscriptionDetails(userId: string) {
  // Mock subscription data
  return {
    subscription: {
      id: 'sub_mock',
      status: 'active' as const,
      current_period_start: Math.floor(Date.now() / 1000),
      current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
      cancel_at_period_end: false,
      created: Math.floor(Date.now() / 1000),
    },
    price: {
      id: 'price_mock_monthly',
      unit_amount: 999,
      currency: 'usd',
      recurring: { interval: 'month' as const, interval_count: 1 },
      product: 'prod_mock_basic',
    },
    product: {
      id: 'prod_mock_basic',
      name: 'Basic Plan',
      description: 'Basic features for small teams',
      metadata: { tier: 'basic' },
    },
    hasActiveSubscription: true,
    status: 'active' as const,
  };
}

export async function getActivityLogs(teamId: string, limit = 10) {
  // Mock activity logs
  return Array.from({ length: Math.min(limit, 3) }, (_, i) => ({
    id: `log-${i}`,
    teamId,
    userId: 'user-1',
    action: ActivityType.SIGN_IN,
    ipAddress: '127.0.0.1',
    userAgent: 'Mock Browser',
    createdAt: new Date(Date.now() - i * 86400000), // Days ago
  }));
}
