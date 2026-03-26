# Pakistan Budget Reality - Data Sources

This document lists all official data sources used in this project.

## Downloaded Files

### Ministry of Finance (Official Budget Documents)

Location: `sources/ministry-of-finance/`

#### Budget in Brief Documents (FY 2015-16 to 2025-26)

| File                                    | Description                            | Source URL                                                                                  |
| --------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| `FY2025-26_Budget_in_Brief_EN.pdf`      | FY 2025-26 Budget Summary (English)    | https://finance.gov.pk/budget/budget_2025_26/budget_in_brief_10062025.pdf                   |
| `FY2025-26_Budget_in_Brief_UR.pdf`      | FY 2025-26 Budget Summary (Urdu)       | https://finance.gov.pk/budget/budget_2025_26/budget_in_brief_urdu_10062025.pdf              |
| `FY2025-26_Annual_Budget_Statement.pdf` | FY 2025-26 Full Budget Statement       | https://finance.gov.pk/budget/budget_2025_26/abs_eng_10062025.pdf                           |
| `FY2024-25_Budget_in_Brief.pdf`         | FY 2024-25 Budget Summary              | https://finance.gov.pk/budget/Budget_2024_25/Budget_in_Brief.pdf                            |
| `FY2023-24_Budget_in_Brief.pdf`         | FY 2023-24 Budget Summary              | https://finance.gov.pk/budget/Budget_2023_24/Budget_in_Brief.pdf                            |
| `FY2022-23_Budget_in_Brief.pdf`         | FY 2022-23 Budget Summary              | https://finance.gov.pk/budget/Budget_2022_23/Budget_in_Brief_English.pdf                    |
| `FY2021-22_Budget_in_Brief.pdf`         | FY 2021-22 Budget Summary              | https://finance.gov.pk/budget/Budget_2021_22/6_Budget_in_Brief_English_2021_22.pdf          |
| `FY2020-21_Budget_in_Brief.pdf`         | FY 2020-21 Budget Summary              | https://finance.gov.pk/budget/Budget_in_Brief_2020_21_English.pdf                           |
| `FY2019-20_Budget_in_Brief.pdf`         | FY 2019-20 Budget Summary              | https://finance.gov.pk/budget/Budget_in_Brief_2019_20.pdf                                   |
| `FY2018-19_Budget_in_Brief.pdf`         | FY 2018-19 Budget Summary              | https://finance.gov.pk/budget/Budget_in_Brief_2018_19.pdf                                   |
| `FY2017-18_Budget_in_Brief.pdf`         | FY 2017-18 Budget Summary              | https://finance.gov.pk/budget/Budget%20in%20Brief%202017-18.pdf                             |
| `FY2016-17_Budget_in_Brief.pdf`         | FY 2016-17 Budget Summary              | https://finance.gov.pk/budget/Budget_in_Brief_2016_17.pdf                                   |
| `FY2015-16_Budget_in_Brief.pdf`         | FY 2015-16 Budget Summary              | https://finance.gov.pk/budget/Budget_in_Brief_2015_16.pdf                                   |

#### Fiscal Operations (Actual Spending)

| File                                    | Description                            | Source URL                                                                                  |
| --------------------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------- |
| `Fiscal_Ops_FY2025-26_H1.pdf`           | FY 2025-26 Actual Spending (Jul-Dec)   | https://finance.gov.pk/fiscal/july_dec_2025.pdf                                             |
| `Fiscal_Ops_FY2024-25_Full_Year.pdf`    | FY 2024-25 Actual Spending (Full Year) | https://finance.gov.pk/fiscal/july_june_2024_25.pdf                                         |
| `Fiscal_Ops_FY2023-24_Full_Year.pdf`    | FY 2023-24 Actual Spending (Full Year) | https://finance.gov.pk/fiscal/July_June_2023_24.pdf                                         |
| `Fiscal_Ops_FY2022-23_Full_Year.pdf`    | FY 2022-23 Actual Spending (Full Year) | https://finance.gov.pk/fiscal/July_June_2022_23.pdf                                         |

### Provincial Budget Documents

Location: `sources/provincial-budgets/`

| File                          | Description                  | Source URL                                        |
| ----------------------------- | ---------------------------- | ------------------------------------------------- |
| `Punjab_Budget_2025-26.pdf`   | Punjab Annual Budget 2025-26 | https://finance.punjab.gov.pk/system/files/ABS25-26.pdf |

Other provincial budget sources:
- **Sindh**: https://finance.gos.pk/Budget/BudgetBooks
- **KPK**: https://finance.kp.gov.pk
- **Balochistan**: https://balochistan.gov.pk/budget-past-five-years/

### India Budget Documents (for comparison)

Location: `sources/india-budget/`

| File                                    | Description                              | Source URL                                                                                           |
| --------------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `India_Union_Budgets_2015-2025_EY.pdf`  | EY Analysis: 10 Years of India Budgets   | https://www.ey.com/content/dam/ey-unified-site/ey-com/en-in/insights/tax/economy-watch/ey-union-budgets-2015-to-2025-fiscal-reforms-for-long-term-impact.pdf |

Official India Budget Portal: https://www.indiabudget.gov.in/

### Pre-Scraped Budget Data (GitHub)

Location: `sources/github-budgets/`

Repository: https://github.com/asjadnaqvi/Pakistan-national-budgets

Contains cleaned, structured Excel files extracted from official PDFs:

- `2024_2025/budget_2024_25.xlsx` - FY 2024-25 budget data
- `2023_2024/budget_2023_24.xlsx` - FY 2023-24 budget data

**Note:** The maintainer warns files may contain minor parsing errors. Cross-check key figures against official PDFs.

---

## Primary Source URLs

### Ministry of Finance - Budget Publications

- **Portal:** https://www.finance.gov.pk
- **FY 2025-26:** https://www.finance.gov.pk/fb_2025_26.html
- **FY 2024-25:** https://www.finance.gov.pk/fb_2024_25.html
- **FY 2023-24:** https://www.finance.gov.pk/fb_2023_24.html
- **FY 2022-23:** https://www.finance.gov.pk/fb_2022_23.html
- **Archive (pre-2017):** https://www.finance.gov.pk/fb_archieve.html

### Ministry of Finance - Fiscal Operations (Actual Spending)

- **Main Page:** https://www.finance.gov.pk/fiscal_main.html
- Contains actual disbursement data vs budget allocations

### Pakistan Economic Survey

- **FY 2024-25:** https://www.finance.gov.pk/survey_2025.html
- **FY 2023-24:** https://www.finance.gov.pk/survey_2024.html
- **Archive:** https://www.finance.gov.pk/survey_archieve.html

---

## International Data Sources

### Military Expenditure

- **SIPRI:** https://sipri.org/databases/milex
- Use for: Verifying defence figures, international comparisons

### Education & Health Statistics

- **World Bank:** https://data.worldbank.org (search Pakistan)
- **UNICEF Pakistan:** https://unicef.org/pakistan
    - 25 million out-of-school children figure
    - 40% child stunting rate

### Debt & Economic Data

- **IMF Pakistan:** https://imf.org/en/countries/PAK
- **State Bank of Pakistan:** https://sbp.org.pk

---

## Exchange Rate APIs

For PKR/USD currency toggle:

- **Frankfurter API (free, no key):** https://api.frankfurter.app/latest?from=PKR&to=USD
- **ExchangeRate-API (1,500 req/month free):** https://www.exchangerate-api.com

---

## Key Figures Used (FY 2025-26)

All from `FY2025-26_Budget_in_Brief_EN.pdf`:

| Category             | Annual (PKR billion) | Per Second (PKR) |
| -------------------- | -------------------- | ---------------- |
| Total Federal Budget | 17,573               | 557,236          |
| Debt Interest        | 8,207                | 260,241          |
| Defence              | 2,558                | 81,113           |
| NFC Transfers        | ~3,200               | 101,471          |
| Military Pensions    | 1,055                | 33,449           |
| PSDP (Development)   | 1,000                | 31,710           |
| Education (Federal)  | 113                  | 3,583            |
| Health (Federal)     | 22                   | 697              |

**Formula:** `perSecond = annualPKR / 365 / 24 / 3600`

---

## Data Freshness

- **Downloaded:** March 2026
- **Budget Year:** FY 2025-26 (July 1, 2025 - June 30, 2026)
- **Should be updated annually** when new budget is released (typically June)
