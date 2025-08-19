'use server';

import { z } from 'zod';
import { User, type NewUser, ActivityType } from '@/lib/db/schema';
import { comparePasswords, hashPassword, setSession } from '@/lib/auth/session';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createCheckoutSession } from '@/lib/payments/stripe';
import { getUser, getUserWithTeam } from '@/lib/db/queries';
import {
  validatedAction,
  validatedActionWithUser,
} from '@/lib/auth/middleware';

async function logActivity(
  teamId: string | null | undefined,
  userId: string,
  type: ActivityType,
  ipAddress?: string,
) {
  // Mock activity logging - in a real app this would save to database
  console.log('Mock: Activity logged', { teamId, userId, type, ipAddress });
}

const signInSchema = z.object({
  email: z.string().email().min(3).max(255),
  password: z.string().min(8).max(100),
});

export const signIn = validatedAction(signInSchema, async (data, formData) => {
  const { email, password } = data;

  // Mock user authentication - accept any user with valid format
  if (!email || !password) {
    return {
      error: 'Invalid email or password. Please try again.',
      email,
      password,
    };
  }

  // Mock password validation (in template mode, accept any 8+ char password)
  if (password.length < 8) {
    return {
      error: 'Invalid email or password. Please try again.',
      email,
      password,
    };
  }

  // Create mock user
  const mockUser: NewUser = {
    id: 'user-1',
    email,
    name: email.split('@')[0],
  };

  await Promise.all([
    setSession(mockUser),
    logActivity('team-1', 'user-1', ActivityType.SIGN_IN),
  ]);

  const redirectTo = formData.get('redirect') as string | null;
  if (redirectTo === 'checkout') {
    const priceId = formData.get('priceId') as string;
    return createCheckoutSession({
      price_id: priceId,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/pricing?canceled=true`,
      customer_email: email,
    });
  }

  redirect('/dashboard');
});

const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  inviteId: z.string().optional(),
});

export const signUp = validatedAction(signUpSchema, async (data, formData) => {
  const { email, password, inviteId } = data;

  // Mock user creation - in template mode, always create successfully
  const passwordHash = await hashPassword(password);

  const mockUser: NewUser = {
    id: 'user-' + Date.now(),
    email,
    name: email.split('@')[0],
  };

  const mockTeam = {
    id: 'team-' + Date.now(),
    name: `${email.split('@')[0]}'s Team`,
  };

  await Promise.all([
    logActivity(mockTeam.id, mockUser.id!, ActivityType.SIGN_UP),
    logActivity(mockTeam.id, mockUser.id!, ActivityType.CREATE_TEAM),
    setSession(mockUser),
  ]);

  const redirectTo = formData.get('redirect') as string | null;
  if (redirectTo === 'checkout') {
    const priceId = formData.get('priceId') as string;
    return createCheckoutSession({
      price_id: priceId,
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/pricing?canceled=true`,
      customer_email: email,
    });
  }

  redirect('/dashboard');
});

export async function signOut() {
  const user = (await getUser()) as User;
  if (user) {
    await logActivity('team-1', user.id, ActivityType.SIGN_OUT);
  }
  (await cookies()).delete('session');
}

const updatePasswordSchema = z
  .object({
    currentPassword: z.string().min(8).max(100),
    newPassword: z.string().min(8).max(100),
    confirmPassword: z.string().min(8).max(100),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export const updatePassword = validatedActionWithUser(
  updatePasswordSchema,
  async (data, _, user) => {
    const { currentPassword, newPassword } = data;

    // Mock password validation - in template mode, just validate inputs
    if (currentPassword === newPassword) {
      return {
        error: 'New password must be different from the current password.',
      };
    }

    // Mock password update
    const newPasswordHash = await hashPassword(newPassword);
    await logActivity('team-1', user.id, ActivityType.UPDATE_PASSWORD);

    return { success: 'Password updated successfully.' };
  },
);

const deleteAccountSchema = z.object({
  password: z.string().min(8).max(100),
});

export const deleteAccount = validatedActionWithUser(
  deleteAccountSchema,
  async (data, _, user) => {
    const { password } = data;

    // Mock password validation - in template mode, accept any valid password
    if (password.length < 8) {
      return { error: 'Incorrect password. Account deletion failed.' };
    }

    await logActivity('team-1', user.id, ActivityType.DELETE_ACCOUNT);

    // Mock account deletion - clear session
    (await cookies()).delete('session');
    redirect('/sign-in');
  },
);

const updateAccountSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
});

export const updateAccount = validatedActionWithUser(
  updateAccountSchema,
  async (data, _, user) => {
    const { name, email } = data;

    // Mock account update
    await logActivity('team-1', user.id, ActivityType.UPDATE_ACCOUNT);

    return { success: 'Account updated successfully.' };
  },
);

const removeTeamMemberSchema = z.object({
  memberId: z.string(),
});

export const removeTeamMember = validatedActionWithUser(
  removeTeamMemberSchema,
  async (data, _, user) => {
    const { memberId } = data;

    // Mock team member removal
    await logActivity('team-1', user.id, ActivityType.REMOVE_TEAM_MEMBER);

    return { success: 'Team member removed successfully' };
  },
);

const inviteTeamMemberSchema = z.object({
  email: z.string().email('Invalid email address'),
  role: z.enum(['member', 'owner']),
});

export const inviteTeamMember = validatedActionWithUser(
  inviteTeamMemberSchema,
  async (data, _, user) => {
    const { email, role } = data;

    // Mock team member invitation
    await logActivity('team-1', user.id, ActivityType.INVITE_TEAM_MEMBER);

    // TODO: In a real app, send invitation email
    console.log('Mock: Sending invitation email to', email, 'with role', role);

    return { success: 'Invitation sent successfully' };
  },
);
