// Mock Stripe integration for template purposes
// In a real implementation, this would integrate with Stripe

export interface SerializedSubscription {
  id: string;
  status: 'active' | 'canceled' | 'incomplete' | 'past_due' | 'trialing';
  current_period_start: number;
  current_period_end: number;
  cancel_at_period_end: boolean;
  created: number;
}

export interface StripePrice {
  id: string;
  unitAmount: number;
  unit_amount: number;
  currency: string;
  interval: string;
  recurring: {
    interval: 'month' | 'year';
    interval_count: number;
  } | null;
  product: string;
  productId: string;
}

export interface StripeProduct {
  id: string;
  name: string;
  description: string | null;
  usageType?: string;
  metadata: Record<string, string>;
}

// Mock Stripe instance
export const stripe = {
  checkout: {
    sessions: {
      create: async (params?: any) => ({
        url: 'https://checkout.stripe.com/mock-session',
      }),
    },
  },
  webhooks: {
    constructEvent: (payload: string, signature: string, secret: string) => ({
      type: 'customer.subscription.updated',
      data: {
        object: { id: 'sub_mock', customer: 'cus_mock', status: 'active' },
      },
    }),
  },
  billingPortal: {
    sessions: {
      create: async () => ({ url: 'https://billing.stripe.com/mock-portal' }),
    },
  },
  prices: {
    list: async () => ({
      data: [
        {
          id: 'price_mock_monthly',
          unitAmount: 999,
          unit_amount: 999,
          currency: 'usd',
          interval: 'month',
          recurring: { interval: 'month', interval_count: 1 },
          product: 'prod_mock_basic',
          productId: 'prod_mock_basic',
        },
        {
          id: 'price_mock_yearly',
          unitAmount: 9999,
          unit_amount: 9999,
          currency: 'usd',
          interval: 'year',
          recurring: { interval: 'year', interval_count: 1 },
          product: 'prod_mock_pro',
          productId: 'prod_mock_pro',
        },
      ] as StripePrice[],
    }),
  },
  products: {
    list: async () => ({
      data: [
        {
          id: 'prod_mock_basic',
          name: 'Basic Plan',
          description: 'Basic features for small teams',
          usageType: 'licensed',
          metadata: {
            tier: 'basic',
            trial_period_days: '7',
            trial_period_credits: '500',
            credits_allowance: '1000',
            features: 'Up to 5 team members,Basic analytics,Email support',
          },
        },
        {
          id: 'prod_mock_pro',
          name: 'Pro Plan',
          description: 'Advanced features for growing teams',
          usageType: 'licensed',
          metadata: {
            tier: 'pro',
            trial_period_days: '14',
            trial_period_credits: '1000',
            credits_allowance: '5000',
            features:
              'Unlimited team members,Advanced analytics,Priority support,Custom integrations',
          },
        },
      ] as StripeProduct[],
    }),
  },
  subscriptions: {
    retrieve: async () => ({
      id: 'sub_mock',
      status: 'active',
      current_period_start: Math.floor(Date.now() / 1000),
      current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
      cancel_at_period_end: false,
      created: Math.floor(Date.now() / 1000),
    }),
    update: async () => ({}),
    cancel: async () => ({}),
  },
  customers: {
    retrieve: async () => ({
      id: 'cus_mock',
      email: 'customer@example.com',
    }),
  },
};

export async function getStripePrices(): Promise<StripePrice[]> {
  const prices = await stripe.prices.list();
  return prices.data;
}

export async function getStripeProducts(): Promise<StripeProduct[]> {
  const products = await stripe.products.list();
  return products.data;
}

export async function createCheckoutSession(data: {
  price_id: string;
  success_url: string;
  cancel_url: string;
  customer_email?: string;
}) {
  return await stripe.checkout.sessions.create({
    mode: 'subscription',
    line_items: [{ price: data.price_id, quantity: 1 }],
    success_url: data.success_url,
    cancel_url: data.cancel_url,
    customer_email: data.customer_email,
  });
}

export async function getUserSubscriptionDetails(userId: string) {
  // Mock subscription details
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
  };
}

export async function handleSubscriptionChange(subscription: any) {
  // Mock subscription change handler
  console.log('Mock: Handling subscription change', subscription.id);
  return { success: true };
}

export async function getSerializedSubscription(
  subscriptionId: string,
): Promise<SerializedSubscription | null> {
  // Mock serialized subscription
  return {
    id: subscriptionId,
    status: 'active',
    current_period_start: Math.floor(Date.now() / 1000),
    current_period_end: Math.floor(Date.now() / 1000) + 30 * 24 * 60 * 60,
    cancel_at_period_end: false,
    created: Math.floor(Date.now() / 1000),
  };
}

export async function resetTeamCredits(teamId: string) {
  // Mock team credits reset
  console.log('Mock: Resetting team credits for', teamId);
  return { success: true };
}

export async function updateSubscriptionAndResetCredits(
  subscriptionId: string,
  teamId: string,
) {
  // Mock subscription update and credits reset
  console.log(
    'Mock: Updating subscription and resetting credits',
    subscriptionId,
    teamId,
  );
  return { success: true };
}
