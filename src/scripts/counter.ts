// Counter calculation utilities for Pakistan Budget Reality

export interface BudgetCategory {
  annualPKR: number;
  percentOfBudget: number;
  label: string;
  labelUrdu: string;
  color: string;
  bgColor: string;
}

export interface BudgetData {
  fiscalYearStart: string;
  totalBudget: { annualPKR: number };
  categories: Record<string, BudgetCategory>;
  exchangeRate: { usdToPkr: number };
  comparisonStats: {
    teacherMonthlySalary: { valuePKR: number };
  };
}

const SECONDS_IN_YEAR = 365 * 24 * 60 * 60; // 31,536,000

/**
 * Calculate per-second rate from annual budget
 */
export function getPerSecondRate(annualPKR: number): number {
  return annualPKR / SECONDS_IN_YEAR;
}

/**
 * Get elapsed seconds since fiscal year start
 */
export function getElapsedSeconds(fiscalYearStart: Date): number {
  const now = Date.now();
  const start = fiscalYearStart.getTime();

  // If fiscal year hasn't started yet, return 0
  if (now < start) return 0;

  return (now - start) / 1000;
}

/**
 * Calculate current counter value for a category
 */
export function getCounterValue(annualPKR: number, fiscalYearStart: Date): number {
  const perSecond = getPerSecondRate(annualPKR);
  const elapsed = getElapsedSeconds(fiscalYearStart);
  return Math.floor(perSecond * elapsed);
}

/**
 * Format number with locale-appropriate separators
 */
export function formatNumber(value: number, locale: string = 'en-PK'): string {
  return value.toLocaleString(locale);
}

/**
 * Format as currency (PKR or USD)
 */
export function formatCurrency(
  valuePKR: number,
  showUSD: boolean = false,
  usdRate: number = 282
): string {
  if (showUSD) {
    const usdValue = Math.round(valuePKR / usdRate);
    return `$ ${formatNumber(usdValue, 'en-US')}`;
  }
  return `Rs ${formatNumber(valuePKR, 'en-PK')}`;
}

/**
 * Format large numbers in a readable way (e.g., "8.2 trillion")
 */
export function formatLargeNumber(value: number, locale: 'en' | 'ur' = 'en'): string {
  const trillion = 1_000_000_000_000;
  const billion = 1_000_000_000;
  const million = 1_000_000;
  const lakh = 100_000;
  const crore = 10_000_000;

  if (locale === 'ur') {
    // Use Pakistani numbering system (lakh, crore, arab, kharab)
    const arab = 1_000_000_000;
    const kharab = 100_000_000_000;

    if (value >= kharab) {
      return `${(value / kharab).toFixed(1)} کھرب`;
    } else if (value >= arab) {
      return `${(value / arab).toFixed(1)} ارب`;
    } else if (value >= crore) {
      return `${(value / crore).toFixed(1)} کروڑ`;
    } else if (value >= lakh) {
      return `${(value / lakh).toFixed(1)} لاکھ`;
    }
    return formatNumber(value, 'ur-PK');
  }

  // English numbering
  if (value >= trillion) {
    return `${(value / trillion).toFixed(2)} trillion`;
  } else if (value >= billion) {
    return `${(value / billion).toFixed(1)} billion`;
  } else if (value >= million) {
    return `${(value / million).toFixed(1)} million`;
  }
  return formatNumber(value, 'en-PK');
}

/**
 * Calculate teacher salaries equivalent
 */
export function calculateTeacherEquivalent(
  pkrValue: number,
  teacherSalary: number = 45000
): number {
  return Math.floor(pkrValue / teacherSalary);
}

/**
 * Initialize counter with animation loop
 */
export function initCounter(
  element: HTMLElement,
  annualPKR: number,
  fiscalYearStart: Date,
  options: {
    showUSD?: boolean;
    usdRate?: number;
    updateInterval?: number;
  } = {}
): () => void {
  const { showUSD = false, usdRate = 282, updateInterval = 100 } = options;

  const update = () => {
    const value = getCounterValue(annualPKR, fiscalYearStart);
    element.textContent = formatCurrency(value, showUSD, usdRate);
  };

  // Initial update
  update();

  // Start interval
  const intervalId = setInterval(update, updateInterval);

  // Return cleanup function
  return () => clearInterval(intervalId);
}

/**
 * Generate WhatsApp share message
 */
export function generateWhatsAppMessage(
  debtValue: number,
  locale: 'en' | 'ur' = 'en',
  siteUrl: string = 'https://pakbudgetreality.com'
): string {
  if (locale === 'ur') {
    return `پاکستان نے اس مالی سال میں اب تک Rs ${formatNumber(debtValue)} قرض کا سود ادا کیا۔ جبکہ تعلیم پر صرف Rs 3,583 فی سیکنڈ خرچ ہوتی ہے۔ مکمل ڈیٹا: ${siteUrl}`;
  }
  return `Pakistan has paid Rs ${formatNumber(debtValue)} in debt interest this fiscal year so far. Meanwhile, education gets only Rs 3,583 per second. Full data: ${siteUrl}`;
}

/**
 * Generate Twitter share message
 */
export function generateTwitterMessage(
  debtValue: number,
  siteUrl: string = 'https://pakbudgetreality.com'
): string {
  return `Pakistan pays Rs ${formatLargeNumber(debtValue)} in debt interest while education gets just 0.64% of the budget. See the live tracker: ${siteUrl}`;
}
