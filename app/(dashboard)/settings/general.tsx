'use client';

import { startTransition, use, useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useUser } from '@/lib/auth';
import { updateAccount } from '@/app/(login)/actions';
import { customerPortalAction } from '@/lib/payments/actions';
import { TeamDataWithMembers } from '@/lib/db/schema';
import { SerializedSubscription, StripeProduct } from '@/lib/payments/stripe';
import { cn } from '@/lib/utils';

type ActionState = {
  error?: string;
  success?: string;
};

export default function GeneralPage({
  teamData,
  products,
  subscription,
}: {
  teamData: TeamDataWithMembers;
  products: StripeProduct[];
  subscription?: SerializedSubscription;
}) {
  const { userPromise } = useUser();
  const user = use(userPromise);
  const [state, formAction, isPending] = useActionState<ActionState, FormData>(
    updateAccount,
    { error: '', success: '' },
  );
  const product = products.find(
    (product) => product.id === teamData.stripeProductId,
  );
  const teamCredits = teamData.credits || 0;
  const creditAllowance =
    teamData.subscriptionStatus === 'trialing'
      ? parseInt(product?.metadata.trial_period_credits || '0')
      : parseInt(product?.metadata.credits_allowance || '0');
  const renewDate =
    subscription?.current_period_end &&
    new Date(subscription.current_period_end * 1000);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // If you call the Server Action directly, it will automatically
    // reset the form. We don't want that here, because we want to keep the
    // client-side values in the inputs. So instead, we use an event handler
    // which calls the action. You must wrap direct calls with startTransition.
    // When you use the `action` prop it automatically handles that for you.
    // Another option here is to persist the values to local storage. I might
    // explore alternative options.
    startTransition(() => {
      formAction(new FormData(event.currentTarget));
    });
  };

  return (
    <section className='flex-1 p-4 lg:p-8'>
      <h1 className='mb-6 text-lg font-medium lg:text-2xl'>General Settings</h1>

      <Card>
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='name'
                className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Name
              </label>
              <Input
                id='name'
                name='name'
                placeholder='Enter your name'
                defaultValue={user?.name || ''}
                required
              />
            </div>
            <div>
              <label
                htmlFor='email'
                className='text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
              >
                Email
              </label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='Enter your email'
                defaultValue={user?.email || ''}
                required
              />
            </div>
            {state.error && (
              <p className='text-sm text-red-500'>{state.error}</p>
            )}
            {state.success && (
              <p className='text-sm text-green-500'>{state.success}</p>
            )}
            <Button
              type='submit'
              className='bg-orange-500 text-white hover:bg-orange-600'
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Saving...
                </>
              ) : (
                'Save Changes'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
      <Card className='mt-8 mb-8'>
        <CardHeader>
          <CardTitle>Subscription</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='space-y-4'>
            <div className='flex flex-col items-start justify-between sm:flex-row sm:items-center'>
              <div className='mb-4 sm:mb-0'>
                {(teamData.subscriptionStatus === 'active' ||
                  teamData.subscriptionStatus === 'trialing') && (
                  <>
                    <p className='font-medium'>
                      Current Plan: {teamData.planName}
                    </p>
                    <p className='font-medium'>
                      Available Credits: {teamCredits}/{creditAllowance}
                    </p>

                    {renewDate && (
                      <p className='text-muted-foreground text-sm'>
                        Renews on {renewDate.toLocaleDateString()}
                      </p>
                    )}
                  </>
                )}
                <p className='text-muted-foreground text-sm'>
                  {teamData.subscriptionStatus === 'active'
                    ? 'Billed monthly'
                    : teamData.subscriptionStatus === 'trialing'
                      ? 'Trial period'
                      : 'No active subscription'}
                </p>
              </div>
              <form action={customerPortalAction}>
                <Button type='submit' variant='outline'>
                  Manage Subscription
                </Button>
              </form>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
