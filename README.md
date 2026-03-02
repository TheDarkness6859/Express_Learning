## Innit the project:

1. Execute the following command in your terminal: **npm install**.
2. Setup environment:
Complete the .env file with your database credentials (Host, DB Name, Port, User, Password).
3. Execute the project:
Run the following command in your terminal: **npm start**.

# Postman:

1. Open the folder called postman in the root of the project.

2. Find the file Learning_Express_API.json.

3. Open Postman and click on Import.

4. Drag and drop the JSON file to Postman.

5. Test the endpoints.

## Endpoint(authors):

| Method | Endpoint              | Description              |
|:------:|:---------------------:|:------------------------:|
| GET    | /api/authors          | List all authors         |
| POST   | /api/authors          | Create a new author      |
| PUT    | /api/authors/:id      | Update by UUID           |
| DELETE | /api/authors/:name    | Delete by name           |

# Database setup:
To create the tables and triggers, execute the script found in:
database/setup.sql

# Development notes:

1. The API uses a **practice** schema in PostgreSQL.

2. Validation triggers are active to prevent future dates in books and loans.