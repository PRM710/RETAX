#  Next.js Invoice Project

This project displays a simple **invoice page** using **Next.js 16** with data fetched from a public API.  
It also includes a **Print Invoice** feature that allows users to select 1, 2, or 3 copies before printing.  

---

##  Features

- Built with **Next.js (App Router)**  
- Uses **fetch API** for data integration  
- No use of `useState`, `useEffect`, or Context API  
- Clean and professional bill-like layout  
- Supports printing multiple copies directly from the browser  

---

##  API Used

The project uses mock invoice data hosted on **myjson.online**:

 **API URL:** [https://myjson.online/api/quick/a6274d23-cd8d-484c-9ad1-7b1981fa014d](https://myjson.online/api/quick/a6274d23-cd8d-484c-9ad1-7b1981fa014d)

### API Data Format
```json
[
  {
    "invoice_number": 1,
    "client_name": "PRAKASH MANE",
    "date": "26/10/2025",
    "amount": "₹500",
    "description": "food for prakash"
  }
]
```

This mock API was created using **https://myjson.online/** to simulate a backend response.

---

##  Project Structure

```
invoice-app/
│
├─ app/
│   ├─ page.js            # Server-side component for fetching and displaying invoices
│   ├─ PrintInvoice.js    # Client component for handling print functionality
│   ├─ globals.css        # Global styles for invoice layout 
│
├─ package.json
└─ next.config.js
```

---

## How to Run Locally

### 1] Clone the Repository
```bash
git clone https://github.com/your-username/invoice-app.git
cd invoice-app
```

### 2] Install Dependencies
```bash
npm install
```

### 3] Run the Development Server
```bash
npm run dev
```

Then open **http://localhost:3000** in your browser.

---

## Printing

Click the **"Print Invoice"** button to open the browser print dialog.  
You will be asked to enter how many copies (1, 2, or 3) you want to print.

---
