'use client';

import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LandingPlanCtaButton } from '@/components';
import { STATIC_LANDING_PLANS } from '@/content/pricing/static-pricing';
import { TRANSLATION_GROUPS } from '@/locales';
import {
  PricingCard,
  PricingCardBadge,
  PricingCardFeature,
  PricingCardFeatured,
  PricingCardFeatures,
  PricingCardHeader,
  PricingCardPrice,
  PricingCardPriceAmount,
  PricingCardPricePeriod,
  PricingCardPriceValue,
  PricingCardSubtitle,
  PricingCardTitle,
  PricingDescription,
  PricingFullBleed,
  PricingFullBleedInner,
  PricingGrid,
  PricingHeader,
  PricingSection,
  PricingTitle,
  PricingTitleSpan,
} from './main-page.styled';

const DISABLED_OPACITY = 0.78;

const formatPlanPrice = (amount: number | null): string => {
  if (amount === null) return '—';
  return amount % 1 === 0 ? String(amount) : amount.toFixed(2);
};

export function MainPagePricingSection() {
  const { t } = useTranslation();
  const plans = STATIC_LANDING_PLANS;

  return (
    <PricingFullBleed id="pricing">
      <PricingFullBleedInner>
        <PricingSection>
          <PricingHeader>
            <PricingTitle variant="h2">
              {t(TRANSLATION_GROUPS.MAIN_PAGE.MAIN_PAGE_PRICING_TITLE_PREFIX)}
              <PricingTitleSpan>
                {t(TRANSLATION_GROUPS.MAIN_PAGE.MAIN_PAGE_PRICING_TITLE_SPAN)}
              </PricingTitleSpan>
            </PricingTitle>
            <PricingDescription>
              {t(TRANSLATION_GROUPS.MAIN_PAGE.MAIN_PAGE_PRICING_DESCRIPTION)}
            </PricingDescription>
          </PricingHeader>

          <PricingGrid>
            {plans.map((plan) => {
              const available = plan.is_active;
              const CardComponent = plan.landing_featured
                ? PricingCardFeatured
                : PricingCard;

              return (
                <Box
                  key={plan.plan_key}
                  sx={{
                    minWidth: 0,
                    display: 'flex',
                    width: '100%',
                    opacity: available ? 1 : DISABLED_OPACITY,
                  }}
                >
                  <CardComponent
                    sx={{
                      width: '100%',
                      position: 'relative',
                      ...(available ? {} : { justifyContent: 'flex-start' }),
                    }}
                  >
                    {available && plan.landing_badge ? (
                      <PricingCardBadge>{plan.landing_badge}</PricingCardBadge>
                    ) : null}

                    {available ? (
                      <>
                        <PricingCardHeader>
                          <PricingCardTitle variant="h3">
                            {plan.landing_title}
                          </PricingCardTitle>
                          <PricingCardSubtitle>
                            {plan.landing_subtitle}
                          </PricingCardSubtitle>
                        </PricingCardHeader>

                        <PricingCardPrice>
                          <PricingCardPriceAmount>
                            <PricingCardPriceValue>
                              {formatPlanPrice(plan.price_amount)}
                            </PricingCardPriceValue>
                            <PricingCardPriceValue>
                              {t(
                                TRANSLATION_GROUPS.MAIN_PAGE
                                  .MAIN_PAGE_PRICING_CURRENCY,
                              )}
                            </PricingCardPriceValue>
                          </PricingCardPriceAmount>
                          <PricingCardPricePeriod>
                            {plan.landing_price_period}
                          </PricingCardPricePeriod>
                        </PricingCardPrice>

                        {plan.landing_savings ? (
                          <Typography variant="body2" color="text.secondary">
                            {plan.landing_savings}
                          </Typography>
                        ) : null}

                        <PricingCardFeatures>
                          {plan.landing_features.map((line, index) => (
                            <PricingCardFeature
                              key={`${plan.plan_key}-${String(index)}`}
                            >
                              <span>{line}</span>
                            </PricingCardFeature>
                          ))}
                        </PricingCardFeatures>

                        <LandingPlanCtaButton plan={plan} />
                      </>
                    ) : (
                      <>
                        <PricingCardHeader>
                          <PricingCardTitle variant="h3">
                            {plan.landing_title}
                          </PricingCardTitle>
                        </PricingCardHeader>
                        <Typography
                          variant="body1"
                          color="text.secondary"
                          sx={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            py: 3,
                            fontStyle: 'italic',
                          }}
                        >
                          {t(
                            TRANSLATION_GROUPS.MAIN_PAGE
                              .MAIN_PAGE_PLAN_COMING_SOON,
                          )}
                        </Typography>
                      </>
                    )}
                  </CardComponent>
                </Box>
              );
            })}
          </PricingGrid>
        </PricingSection>
      </PricingFullBleedInner>
    </PricingFullBleed>
  );
}

export default MainPagePricingSection;
