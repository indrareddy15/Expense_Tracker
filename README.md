# Expense Tracker

![Screenshot of App](./public/Indra_Expense_Tracker.png)

## The App

A web application for tracking expenses, allowing users to add, edit, and delete expenses based on category and date, as well as view a summary of their expenses.

### Features:

- **Wallet Balance Management:**
  - The app starts with a default wallet balance of 5000.
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
- `JavaScript`
- `React JS`

## NPM Libraries Used for Charts 🚀

- [Recharts](https://recharts.org/en-US) for charts
- [React-Modal](https://reactcommunity.org/react-modal/) for modals
- [Notistack](https://notistack.com/getting-started) for notifications
- [React Icons](https://react-icons.github.io/react-icons/) for icons

## Installation

1. **Clone the Repository**:

```bash
git clone https://github.com/indrareddy15/Expense_Tracker.git
```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Application**:

   ```bash
   npm start
   ```

   This will start the development server, and you can view the application in your browser at `http://localhost:3000`.

## Live Demo

You can check out the live version of the app here:  
[Expense Tracker on Vercel](https://expense-tracker-270ax97g5-indra-reddys-projects.vercel.app)

## Contributing

If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## Contact

For any questions or suggestions, please contact [Ganta Indra Reddy](mailto:gantaindrareddy83@gmail.com).
