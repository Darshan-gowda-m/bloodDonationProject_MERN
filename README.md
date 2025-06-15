# 🩸 Blood Donation Tracking System — MERN Stack (🚧 Work in Progress)

A full-stack **MERN** (MongoDB, Express, React, Node.js) project aimed at streamlining **blood collection, donation, and usage tracking**, acting as a centralized interface for **hospitals, donors, and organizations**.

---

## ❗ Problem Statement

India faces a significant **blood supply shortfall**—with a demand of 13 million units annually, the country often lacks 2–3 million units. This gap critically affects:

### 🔻 Key Consequences:

- **🩸 Maternal Mortality**: Postpartum hemorrhage causes ~20% of maternal deaths. Timely blood access could prevent many of the 70,000 deaths annually (WHO).
- **🚑 Trauma & Road Accidents**: Over 150,000 annual traffic fatalities—many victims require urgent transfusions.
- **🧬 Chronic Conditions**: Patients with **Thalassemia**, **Hemophilia**, or undergoing **Chemotherapy** require regular transfusions.
- **⚠️ Anemia & Cancer Patients**: Lack of consistent blood access worsens their conditions.

---

## ✅ Key Features Implemented

### 🔐 User Authentication
- Secure **Sign-Up/Login** using **JWT**.
- **Role-based access**: Donors, Recipients, Hospitals, Admins.

### 🧾 Profile Management
- View donation history.
- Passwords secured with **bcrypt encryption**.

### 🏥 Hospital & Organization Dashboard
- Track blood **availability**, **inflow/outflow**, and **donation logs**.
- Request and manage blood units in real-time.

### 🧑‍💼 Admin Panel
- Manage all users and roles.
- View system-wide **analytics**, delete or suspend accounts.

---

## 🧰 Tech Stack

| Layer      | Tech Stack                     |
|------------|--------------------------------|
| Frontend   | React.js, Axios, React Router  |
| Backend    | Node.js, Express.js            |
| Database   | MongoDB (Mongoose ODM)         |
| Security   | JWT, bcrypt                    |
| Deployment | (Planned) Vercel / Render / Railway |

---

## 🚧 Features In Progress

- 📍 Blood request matching by location
- 📊 Real-time analytics for donation drives
- 📆 Event scheduling and reminders for donors
- 📱 Mobile-responsive UI
- 🩺 Hospital onboarding workflow

---

## 📁 Folder Structure (WIP)


---

## 📌 Installation

```bash
# Clone the repository
git clone https://github.com/darshanGowdaM/bloodDonationProject_MERN.git
cd bloodDonationProject_MERN

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install

# Run both client & server (use concurrently or manually)
npm start
