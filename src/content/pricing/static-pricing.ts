import type { IStaticLandingPlan } from "@/types/plan.type";

/** Static pricing shown on clusterboard.pl — update here when plans change. */
export const STATIC_LANDING_PLANS: IStaticLandingPlan[] = [
	{
		plan_key: "free",
		price_amount: 0,
		currency: "PLN",
		billing_type: "free",
		is_active: true,
		landing_featured: false,
		landing_title: "Free",
		landing_subtitle: "Start i pierwsze projekty",
		landing_features: [
			"1 aktywny projekt",
			"Do 15 inspiracji / projekt",
			"Do 20 dokumentów / projekt",
			"1 inwestor na projekt",
			"Wiadomości bez limitu",
		],
		landing_price_period: "/ miesiąc",
		landing_badge: null,
		landing_savings: null,
		landing_cta: "Załóż darmowe konto",
	},
	{
		plan_key: "one_time",
		price_amount: 29.99,
		currency: "PLN",
		billing_type: "one_time",
		is_active: true,
		landing_featured: true,
		landing_title: "Pojedyncza Tablica",
		landing_subtitle: "Freelancerzy i małe zlecenia",
		landing_features: [
			"1 dodatkowy aktywny projekt",
			"Do 60 inspiracji / projekt",
			"Do 30 dokumentów / projekt",
			"Max 2 inwestorów per projekt",
			"Wiadomości bez limitu",
			"Mozliwość pobrania projektu w formie .zip (archiwum)",
		],
		landing_price_period: "/ jednorazowo",
		landing_badge: "NAJPOPULARNIEJSZY",
		landing_savings: null,
		landing_cta: "Rozpocznij",
	},
];
