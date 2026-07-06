export type TPlanKey = 'free' | 'one_time' | 'basic' | 'pro';

export type TPlanBillingType = 'free' | 'one_time' | 'monthly';

/** Static landing pricing card copy (maintained in-repo, not from API). */
export interface IStaticLandingPlan {
  plan_key: TPlanKey;
  price_amount: number | null;
  currency: string;
  billing_type: TPlanBillingType;
  is_active: boolean;
  landing_featured: boolean;
  landing_title: string;
  landing_subtitle: string;
  landing_features: string[];
  landing_price_period: string;
  landing_badge: string | null;
  landing_savings: string | null;
  landing_cta: string;
}
