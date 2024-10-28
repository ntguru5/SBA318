# Pet Profile Application

A simple web page for managing pet profiles.

## Features

* Create, read, update, and delete (CRUD) pet profiles
* Upload profile pictures for each pet
* View individual pet profiles with pictures and details

## Technologies Used

* Node.js
* Express.js
* EJS templating engine
* Multer middleware for file uploads

## Getting Started

1. Clone the repository to your local machine
2. Install dependencies with `npm install`
3. Start the server with `node index.js`
4. Open a web browser and navigate to `http://localhost:3000/pets`

## Routes

* `/pets`: View all pet profiles
* `/pets/:id`: View individual pet profile

## API Endpoints

* `GET /pets`: Retrieve all pet profiles
* `GET /pets/:id`: Retrieve individual pet profile
* `PATCH /pets/:id`: Update individual pet profile
* `POST /pets`: Create new pet profile
* `DELETE /pets/:id`: Delete individual pet profile

## Folders
  SBA318-pet-profile-app/
  ├── data/
  │   └── dogs.js            # file to store dog data
  ├── public/
  │   ├── uploads/           # Profile picture uploads go here
  │   └──styles.css         # styling
  ├── routes/
  │   └── pets.js       # Route definitions for dog operations
  ├── views/
  │   ├── petProfile.ejs     # Profile page for a single dog
  │   └── pets.ejs           # List of all dog profiles, add pet
  ├── index.js              # Main application file
  ├── multer.js              # Middleware for file upload
  ├── package.json           # Project dependencies
  └── README.md
