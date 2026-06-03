# Cypress Automation Framework

![Cypress](https://img.shields.io/badge/Cypress-15.x-04C38E?style=flat&logo=cypress&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)
![Allure](https://img.shields.io/badge/Allure-Report-orange?style=flat)
![CI](https://github.com/ParasOli/cypress-automation-framework/actions/workflows/main.yml/badge.svg)

End-to-end test automation framework for [Saucedemo](https://www.saucedemo.com) built with Cypress and TypeScript, following the Page Object Model pattern.

## Live Test Report

**[View Latest Allure Report](https://parasoli.github.io/cypress-automation-framework/)**

> The report is auto-published to GitHub Pages on every push to `main`. The last **3 runs** are retained with full history and trend data.

---

## Tech Stack

| Tool                            | Purpose                         |
| ------------------------------- | ------------------------------- |
| [Cypress](https://www.cypress.io)  | E2E test runner                 |
| TypeScript                      | Type-safe test authoring        |
| Page Object Model               | Selector and action abstraction |
| [Allure](https://allurereport.org) | Test reporting                  |
| GitHub Actions                  | CI/CD pipeline                  |
| GitHub Pages                    | Report hosting                  |

---

## Test Coverage

### Login (`login.cy.ts`)

- Successful login redirects to inventory
- Locked out user sees error message
- Wrong password shows error
- Empty password shows error
- Empty username shows error

### Filter (`filter.cy.ts`)

- Validates all sort options exist in the dropdown
- Sort by price low to high
- Sort by price high to low
- Sort by name A to Z
- Sort by name Z to A

### Cart (`cart.cy.ts`)

- Badge updates when item is added
- Badge increments correctly for multiple items
- Badge disappears when item is removed from inventory
- Cart icon navigates to cart page
- Added item appears with correct name in cart
- Cart shows correct item count after multiple adds
- Remove item from inside the cart page
- Continue Shopping returns to inventory
- Checkout navigates to checkout page

---

## Project Structure

```
cypress/
├── e2e/
│   ├── login.cy.ts
│   ├── filter.cy.ts
│   └── cart.cy.ts
├── pages/
│   ├── loginPage.ts
│   ├── filterPage.ts
│   └── cartPage.ts
├── support/
│   ├── commands.ts
│   ├── e2e.ts
│   └── index.d.ts
└── fixtures/
    └── user.json
```

---

## Run Locally

**Prerequisites:** Node.js 20+, Chrome browser

```bash
# Install dependencies
npm install

# Open Cypress Test Runner (interactive)
npx cypress open

# Run all tests headlessly
npx cypress run --browser chrome
```

**Environment variables** — set these before running locally:

```bash
CYPRESS_USERNAME=your_username
CYPRESS_PASSWORD=your_password
```

---

## CI/CD Pipeline

The GitHub Actions workflow runs on every push to `main`:

1. **cypress-run** — installs dependencies (npm + Cypress binary cached), runs all tests, uploads Allure results as an artifact
2. **publish-report** — downloads results, pulls history from `gh-pages`, generates the Allure report keeping the last 3 runs, deploys to GitHub Pages

```
push to main
     │
     ▼
┌─────────────┐        ┌──────────────────┐
│ cypress-run │ ──────▶│ publish-report   │
│             │        │                  │
│ • npm ci    │        │ • fetch history  │
│ • run tests │        │ • generate report│
│ • upload    │        │ • deploy to Pages│
│   results   │        └──────────────────┘
└─────────────┘
```
