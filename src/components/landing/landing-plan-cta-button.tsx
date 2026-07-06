'use client';

import { CustomButton } from '@/components/ui/button';
import { appPath } from '@/lib/app-url';
import type { IStaticLandingPlan } from '@/types/plan.type';

interface LandingPlanCtaButtonProps {
  plan: IStaticLandingPlan;
}

export function LandingPlanCtaButton({ plan }: LandingPlanCtaButtonProps) {
  if (plan.plan_key === 'free') {
    return (
      <CustomButton href={appPath('/sign-up')} variant="contained" color="primary">
        {plan.landing_cta}
      </CustomButton>
    );
  }

  if (plan.plan_key === 'one_time' && plan.is_active) {
    const redirect = encodeURIComponent(`${appPath('/')}#pricing`);
    return (
      <CustomButton
        href={appPath(`/sign-in?redirect_url=${redirect}`)}
        variant="contained"
        color="primary"
      >
        {plan.landing_cta}
      </CustomButton>
    );
  }

  return (
    <CustomButton variant="contained" color="primary" disabled>
      {plan.landing_cta}
    </CustomButton>
  );
}
