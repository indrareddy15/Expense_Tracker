# Expense Tracker

![Screenshot of App](./public/Indra_Expense_Tracker.png)

## The App

A web application for tracking expenses, allowing users to add, edit, and delete expenses based on category and date, as well as view a summary of their expenses.

### Features:

- **Wallet Balance Management:**
  - The app starts with a default wallet balance of 7500.
  - Users can increase the wallet balance.
  - The app prevents users from spending more than their available wallet balance by showing an alert.
- **Expense Management:**
  - Users can add new expenses with details like title, amount, category, and date, with the wallet balance updating accordingly.
  - Users can edit existing expenses or delete them.
- **Expense Summary:**
  - The app provides a summary of total expenses, categorized by date or type.
- **Data Persistence:**
  - Both wallet balance and expenses are saved in `localStorage` to persist between page refreshes.
- **Responsive Design:**
  - The app is designed to work on various screen sizes, ensuring a seamless experience across devices.

## Tech Used

- `HTML`
- `CSS`
- `React JS`

## NPM Libraries Used for Charts 🚀

- `Recharts` for rendering the summary charts.
- `React-icons` for delete and edit expenses
- `React-modal` for State management library for React

## Live Demo

You can check out the live version of the app here:  
[Expense Tracker on Vercel](https://expense-tracker-270ax97g5-indra-reddys-projects.vercel.app)
