import {
  handleSubscriptionChange,
  stripe,
  resetTeamCredits,
  updateSubscriptionAndResetCredits,
} from '@/lib/payments/stripe';
import { NextRequest, NextResponse } from 'next/server';

// Keep this for future reference on how to track events with PostHog
// import PostHogClient from '@/lib/posthog';

// Mock Stripe types for template
export interface StripeEvent {
  type: string;
  data: {
    object: any;
  };
}

export interface StripeSubscription {
  id: string;
  customer: string;
  status: string;
  cancel_at_period_end: boolean;
  items: {
    data: Array<{
      price: {
        id: string;
        recurring?: {
          interval: string;
        };
        unit_amount: number;
      };
    }>;
  };
  canceled_at?: number;
}

export interface StripeInvoice {
  id: string;
  customer: string;
  subscription: string;
  amount_paid: number;
  currency: string;
}

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const payload = await request.text();
  const signature = request.headers.get('stripe-signature') as string;
  // const posthog = PostHogClient();

  let event: StripeEvent;

  try {
    event = stripe.webhooks.constructEvent(payload, signature, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed.', err);
    return NextResponse.json(
      { error: 'Webhook signature verification failed.' },
      { status: 400 },
    );
  }

  switch (event.type) {
    case 'customer.subscription.updated': {
      const subscription = event.data.object as StripeSubscription;
      await handleSubscriptionChange(subscription);
      console.log('CANCELED');
      // Track subscription updated event
      // posthog.capture({
      //   distinctId: subscription.customer as string,
      //   event: 'subscription_updated',
      //   properties: {
      //     subscription_id: subscription.id,
      //     status: subscription.status,
      //     plan: subscription.items.data[0]?.price.id,
      //     interval: subscription.items.data[0]?.price.recurring?.interval,
      //     amount: subscription.items.data[0]?.price.unit_amount,
      //     currency: subscription.currency,
      //     cancel_at_period_end: subscription.cancel_at_period_end,
      //   },
      // });
      break;
    }
    case 'customer.subscription.deleted': {
      const subscription = event.data.object as StripeSubscription;
      await handleSubscriptionChange(subscription);
      console.log('DELETED');
      // Track subscription canceled event
      // posthog.capture({
      //   distinctId: subscription.customer as string,
      //   event: 'subscription_canceled',
      //   properties: {
      //     subscription_id: subscription.id,
      //     status: subscription.status,
      //     plan: subscription.items.data[0]?.price.id,
      //     canceled_at: subscription.canceled_at
      //       ? new Date(subscription.canceled_at * 1000).toISOString()
      //       : null,
      //   },
      // });
      break;
    }
    case 'invoice.paid': {
      const invoice = event.data.object as StripeInvoice;
      const customerId = invoice.customer as string;
      const subscriptionId = invoice.subscription as string;

      if (customerId) {
        console.log(
          `Invoice paid for customer ${customerId}. Resetting credits.`,
        );
        // Placeholder for resetting user credits
        await resetTeamCredits(customerId);

        try {
          await updateSubscriptionAndResetCredits(customerId, subscriptionId);
        } catch (error) {
          console.error('Error handling invoice paid event:', error);
        }

        // Track invoice paid event (optional, keep commented if not immediately needed)
        // posthog.capture({
        //   distinctId: customerId,
        //   event: 'invoice_paid_credits_reset',
        //   properties: {
        //     invoice_id: invoice.id,
        //     amount_paid: invoice.amount_paid,
        //     currency: invoice.currency,
        //     subscription_id: invoice.subscription,
        //   },
        // });
      } else {
        console.warn(
          'Invoice paid event received without a customer ID.',
          invoice,
        );
      }
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
