# Chatbot Web Application

This is a web chatbot application that allows users to have interactive conversations with a virtual chatbot. The chatbot can interpret various terms and respond accordingly. The project is built using Node.js and Express for the back-end, MySQL with Sequelize as the database, and React with React Router Dom for the front-end.

## Features

- **User Authentication**: Users are required to provide a username and password to initiate and continue conversations with the chatbot. The username and password are securely stored in the database.

- **Chatbot Interaction**: The chatbot can interpret terms such as "Hello," "Goodbye," "Good," and "I want" to initiate a conversation thread with the user. It responds to user input and guides the conversation based on the user's queries.

- **Loan Options**: When the user mentions the term "loan," the chatbot displays three options:
  1. "Do you want to apply for a loan?"
  2. "Loan conditions"
  3. "Help"

- **Loan Information**: When the user selects any of the loan options, the chatbot provides relevant information and includes a link for reference.

- **Conversation Logging**: The chatbot logs the entire conversation in the database for future reference and analysis.

- **Export Historic Conversations**: Users can export historic conversations in CSV format. The conversations are ordered by date, with each entry indicating the user's ID and the timestamp when the user used the term "Goodbye" to end the conversation.

## How it was built

### Back-end

The back-end of the chatbot was developed using Node.js and Express. The Express framework provides a robust and flexible foundation for building RESTful APIs. It handles user authentication, conversation handling, and data storage in the MySQL database using Sequelize as the ORM (Object-Relational Mapping) tool.

### Front-end

The front-end of the chatbot was built using React, a popular JavaScript library for building user interfaces. React Router Dom was utilized for handling client-side routing, enabling smooth navigation between different chatbot sections. The front-end communicates with the back-end API to send and receive data, allowing seamless interactions between the user and the chatbot.

### Database

MySQL was chosen as the database management system to store user authentication data and conversation histories. Sequelize, a powerful ORM for Node.js, was employed to interact with the database, allowing easy management and manipulation of data.

## Getting Started

To run the chatbot locally, follow these steps:

1. Clone the repository to your local machine.

2. Install the necessary dependencies for both the front-end and back-end:

```bash
cd frontend
npm install
bash
Copy code
cd backend
npm install
Set up the MySQL database and update the database configurations in the back-end to connect to your local database.
```

Start the front-end and back-end servers:
```
bash
Copy code
cd frontend
npm start
bash
Copy code
cd backend
npm start
Open your web browser and access the chatbot at http://localhost:3000.
Exporting Historic Conversations
Users can export the historic conversations by navigating to the export page and clicking the "Export CSV" button. A CSV file containing the conversations ordered by date will be generated, allowing users to analyze and review previous interactions with the chatbot.
```

Feel free to explore the application and have an interactive conversation with the chatbot!

Contributing
If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Contributions are always welcome!
