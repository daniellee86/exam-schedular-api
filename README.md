# VICTVS Exam Schedular

The Exam Sedular consumes exam data from an API and displays it to the user, allowing them to filter and sort through the exams.
The API retrieves the data from a Mongodb database by using query parameters sent from the client side.
The application displays exam details such as time and geographical location.

## Features

- Rest API
- Mongodb Database
- Custom filters
- Exam page
- Light/dark mode toggle
- Global map displaying exam locations
- Clock component
- Animations

## API Reference

#### Get all exams

```http
  GET /api/exams
```

| Parameter | Type     | Description |
| :-------- | :------- | :---------- |
| `non`     | `string` | All exams   |

#### Get exam

```http
  GET /api/exams/${id}
```

| Parameter | Type     | Description         |
| :-------- | :------- | :------------------ |
| `id`      | `string` | Id of item to fetch |

The API is built with ExpressJS and consumes data from a MongoDB database. It is a RESTful API built using MVC architecture, complete with routes, controllers, and models. The API is tested with Jest and Super-test and features custom error handling as well as inbuilt ExpressJS middleware. Dotenv used for sensitive information.

## Running Tests

To run tests, run the following command

```bash
  npm run test
```

## Lessons Learned

Through this project, I learned the importance of striking a balance between building for what the application could be in the future and what it should be now; I tried to build for scalability, having large datasets in mind, whilst also being mindful of the user experience. Overall, my focus was on writing clean, understandable code and implementing best practices for an effective and efficient Exam Invigilation Application.
