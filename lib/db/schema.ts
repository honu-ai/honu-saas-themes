// Mock database schema for template purposes
// In a real implementation, this would define your database schema

export interface User {
  id: string;
  email: string;
  name: string | null;
  image: string | null;
  role?: 'owner' | 'admin' | 'member';
  createdAt: Date;
  updatedAt: Date;
}

export interface NewUser {
  id?: string;
  email: string;
  name?: string | null;
  image?: string | null;
}

export interface TeamMember {
  id: string;
  teamId: string;
  userId: string;
  role: 'owner' | 'admin' | 'member';
  createdAt: Date;
}

export interface Team {
  id: string;
  name: string;
  slug: string;
  stripeCustomerId?: string | null;
  stripeSubscriptionId?: string | null;
  stripeProductId?: string | null;
  credits?: number;
  subscriptionStatus?: string | null;
  planName?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamDataWithMembers extends Team {
  members: (TeamMember & { user: User })[];
}

export enum ActivityType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
  CREATE_TEAM = 'CREATE_TEAM',
  REMOVE_TEAM_MEMBER = 'REMOVE_TEAM_MEMBER',
  INVITE_TEAM_MEMBER = 'INVITE_TEAM_MEMBER',
  ACCEPT_INVITATION = 'ACCEPT_INVITATION',
}

// Mock table definitions
export const users = {};
export const teams = {};
export const teamMembers = {};
export const invitations = {};
export const activityLogs = {};
