# 💰 Expense & Savings Tracker

A simple and powerful web application designed to help you take full control of your finances. Track your daily expenses, manage savings goals, and monitor your financial health with an intuitive interface.

![Expense Tracker](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

### 📊 Financial Dashboard
- **Total Balance** - View your overall financial position
- **Total Expenses** - Track all your spending
- **Total Savings** - Monitor your savings progress
- **Net Balance** - See your remaining balance after expenses and savings

### 💸 Expense Tracking
- Add expenses with description, amount, category, and date
- Categorize expenses (Food, Transport, Shopping, Bills, Entertainment, Health, Other)
- View all expenses in chronological order
- Delete expenses easily

### 🎯 Savings Goals
- Create multiple savings goals
- Set target amounts for each goal
- Track current savings amount
- Visual progress bars showing completion percentage
- Update savings amounts as you progress
- View remaining amount to reach your goal

### 🎨 User Interface
- Clean and modern design
- Responsive layout for all devices
- Color-coded cards for easy visualization
- Smooth animations and transitions
- Tab-based navigation

## 🚀 Getting Started

### Prerequisites
- A Supabase account ([Sign up here](https://supabase.com))
- Basic knowledge of HTML, CSS, and JavaScript

### Database Setup

1. **Create a Supabase Project**
   - Go to [Supabase](https://supabase.com)
   - Create a new project
   - Note your project URL and anon key

2. **Create Database Tables**

   Run these SQL commands in your Supabase SQL Editor:

   ```sql
   -- Create expenses table
   CREATE TABLE expenses (
       id BIGSERIAL PRIMARY KEY,
       description TEXT NOT NULL,
       amount DECIMAL(10, 2) NOT NULL,
       category TEXT NOT NULL,
       date DATE NOT NULL,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Create savings table
   CREATE TABLE savings (
       id BIGSERIAL PRIMARY KEY,
       goal_name TEXT NOT NULL,
       target_amount DECIMAL(10, 2) NOT NULL,
       current_amount DECIMAL(10, 2) NOT NULL DEFAULT 0,
       created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
   );

   -- Enable Row Level Security (RLS)
   ALTER TABLE expenses ENABLE ROW LEVEL SECURITY;
   ALTER TABLE savings ENABLE ROW LEVEL SECURITY;

   -- Create policies for public access (for demo purposes)
   -- In production, you should implement proper authentication
   CREATE POLICY "Enable all access for expenses" ON expenses
       FOR ALL USING (true) WITH CHECK (true);

   CREATE POLICY "Enable all access for savings" ON savings
       FOR ALL USING (true) WITH CHECK (true);
   ```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/richu337/expense-savings-tracker.git
   cd expense-savings-tracker
   ```

2. **Configure Supabase**
   
   Open `config.js` and replace the placeholders with your Supabase credentials:
   ```javascript
   const SUPABASE_URL = 'your-project-url';
   const SUPABASE_ANON_KEY = 'your-anon-key';
   ```

3. **Run the application**
   
   Simply open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

4. **Access the app**
   
   Open your browser and navigate to `http://localhost:8000`

## 📖 Usage

### Adding an Expense
1. Click on the "Expenses" tab
2. Fill in the expense details:
   - Description (e.g., "Groceries")
   - Amount
   - Category
   - Date
3. Click "Add Expense"

### Creating a Savings Goal
1. Click on the "Savings" tab
2. Fill in the goal details:
   - Goal Name (e.g., "Emergency Fund")
   - Target Amount
   - Current Amount
3. Click "Add Savings Goal"

### Updating Savings
- Click the "Update" button on any savings goal
- Enter the new current amount
- The progress bar will update automatically

### Deleting Items
- Click the "Delete" button on any expense or savings goal
- Confirm the deletion

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Backend**: Supabase (PostgreSQL)
- **Database**: PostgreSQL via Supabase
- **Hosting**: Can be deployed on GitHub Pages, Netlify, Vercel, etc.

## 📁 Project Structure

```
expense-savings-tracker/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── app.js             # Application logic
├── config.js          # Supabase configuration
├── README.md          # Documentation
└── database-schema.sql # Database setup (optional)
```

## 🔒 Security Notes

⚠️ **Important**: The current setup uses public access policies for demonstration purposes. For production use:

1. Implement Supabase Authentication
2. Update RLS policies to restrict access to authenticated users
3. Add user-specific data isolation
4. Never commit your Supabase keys to public repositories

## 🎯 Future Enhancements

- [ ] User authentication and authorization
- [ ] Income tracking
- [ ] Budget planning and alerts
- [ ] Data export (CSV, PDF)
- [ ] Charts and analytics
- [ ] Recurring expenses
- [ ] Multi-currency support
- [ ] Mobile app version
- [ ] Email notifications
- [ ] Dark mode

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Rayhan**
- GitHub: [@richu337](https://github.com/richu337)

## 🙏 Acknowledgments

- Supabase for the amazing backend platform
- Icons and design inspiration from modern UI/UX trends

## 📞 Support

If you have any questions or need help, please open an issue in the GitHub repository.

---

Made with ❤️ by Rayhan