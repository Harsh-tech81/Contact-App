# Contact-App 

A full-stack CRUD (Create, Read, Update, Delete) contact management application built with ** Node.js, Express, MongoDB, and EJS.  

## *✨ Features*  
✅ *Add Contacts* – Save name, email, phone, and more.  
✅ *View All Contacts* – Organized list with search functionality (if implemented).  
✅ *Edit & Update* – Modify existing contact details.  
✅ *Delete Contacts* – Remove entries permanently.  
✅ *Responsive UI* – Works on desktop & mobile.  


## *🛠 Tech Stack*  
| Frontend | Backend | Database |
|----------|---------|----------|
| *HTML5* | *Node.js* | *MongoDB* |
| *CSS3* | *Express.js* | *Mongoose (ODM)* |
| *EJS (Embedded JavaScript)* | *REST API* |  |

## *📂 Project Structure*  
contact-app/
├── models/
│   └── Contact.js       # MongoDB Schema
├── views/
│   ├── index.ejs        # Homepage (All Contacts)
│   ├── add-contact.ejs  # Add New Contact Form
│   └── edit-contact.ejs # Edit Contact Form
├── routes/
│   └── contactRoutes.js # Express Routes
├── app.js               # Main Express Setup
├── package.json
└── .env                 # Environment Variables


## *🔧 API Endpoints (RESTful Routes)*  
| Method | Route | Description |
|--------|-------|-------------|
| GET | / | View all contacts |
| GET | /add | Show add-contact form |
| POST | /add | Create new contact |
| GET | /edit/:id | Show edit form |
| PUT | /edit/:id | Update contact |
| DELETE | /delete/:id | Remove contact |


## *📈 Future Improvements*  
- [ ] *User Authentication* (Login/Signup)  
- [ ] *Search & Filter* contacts by name/email.  
- [ ] *Profile Pictures* (Upload with Multer).  
- [ ] *Export Contacts* (CSV/Excel).  

## *🙏 Credits & References*  
- Inspired by *CRUD applications*.  
- MongoDB Docs & Express.js Guide.  
- Built for learning *Node.js backend development*.  
