# Expense Tracker Project

A full-stack expense tracking application built with the MERN stack (MongoDB, Express.js, React, Node.js) that helps users manage their income and expenses efficiently.

![image](https://github.com/user-attachments/assets/1d0dc19f-656a-4017-8a25-2be33b6a9765)


## 🌟 Features

- **User Authentication**
  - Secure signup and login
  - JWT-based authentication
  - Profile management with avatar upload

- **Income Management**
  - Add, edit, and delete income sources
  - Categorize income with custom icons
  - Download income reports in Excel format
  - Visual representation with charts

- **Expense Management**
  - Track expenses by categories
  - Add custom icons for expense categories
  - Download expense reports in Excel
  - Visual expense analysis

- **Dashboard Analytics**
  - Real-time balance calculation
  - Income vs Expense comparison
  - Monthly/yearly trends
  - Category-wise expense breakdown

- **Data Export**
  - Export to Excel format
  - Detailed transaction history
  - Customizable date ranges

## 🚀 Tech Stack

### Frontend
- React.js with Vite
- Tailwind CSS for styling
- Recharts for data visualization
- Axios for API requests
- React Router for navigation
- React Hot Toast for notifications

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- JWT for authentication
- Multer for file uploads
- XLSX for Excel export
- Bcrypt for password hashing

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### Backend Setup
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/expense-tracker.git
   cd expense-tracker
   ```

2. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

3. Create .env file in backend directory
   ```env
   PORT=8000
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```

4. Start backend server
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to frontend directory
   ```bash
   cd frontend/expense-tracker
   ```

2. Install frontend dependencies
   ```bash
   npm install
   ```

3. Start frontend development server
   ```bash
   npm run dev
   ```

## 📱 Usage

1. **Register/Login**
   - Create a new account or login with existing credentials
   - Upload a profile picture (optional)

2. **Adding Income**
   - Click on "Add Income" button
   - Fill in the income details (source, amount, date)
   - Select an icon for the income source
   - Submit to save

3. **Adding Expenses**
   - Navigate to Expenses section
   - Click "Add Expense"
   - Enter expense details (category, amount, date)
   - Choose an icon for the category
   - Save the expense

4. **Viewing Analytics**
   - Visit the Dashboard for overview
   - Check income/expense charts
   - View category-wise breakdowns
   - Monitor monthly trends

5. **Downloading Reports**
   - Go to Income/Expense section
   - Click on Download button
   - Get Excel report of transactions

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

Your Name
- GitHub: [@vanshgarg110505](https://github.com/vanshgarg110505)
- LinkedIn: [Vansh Garg](https://linkedin.com/in/vansh-garg11)

## 🙏 Acknowledgments

- [React Icons](https://react-icons.github.io/react-icons/) for the icon library
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Recharts](https://recharts.org/) for the charting library
- [React Hot Toast](https://react-hot-toast.com/) for notifications
