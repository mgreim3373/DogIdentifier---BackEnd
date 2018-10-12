## Dog Identifier

This app represents my General Assembly cap stone project. It is a custom built interactive web application for identifying dog breeds from pictures and storing them. It utilizes Saas, Google Vision’s API and a custom built API.

## About

This project was started with the goal of building a custom API using Express and MongoDb that had at least 4 RESTful routes for handling GET, POST, PUT/PATCH, and DELETE requests and was able to programatically make post calls to Google Vision's API. The requirements also specified that any actions that change data must be authenticated (data must be "owned" by the user performing the change) and that the user must have a relationship with at least one resource. The project began by creating entity relationship diagrams to ensure that the project met requirements. I then built out the application using Express and MongoDb, tested the API using curl scripts and linked it to my React web app.

## Unsolved Problems

I plan on updating this project in the future by allowing users to upload their own image files to the app, store them on AS3 and process them with Google's Vision API.

## List of Technologies Used

MongoDb, Express, Node.js, Bcrypt, Passport, Axios, Heroku, Google Vision API

## Installation

1. Fork and clone the repository.
2. Install dependencies with npm install.
3. Save changes with git add and git commit.
4. Ensure that you have `nodemon` installed by running `npm install -g nodemon`.
5. From the root of your repository, run the following commands. They will set a SECRET_KEY for development and testing.
 ```sh
 echo SECRET_KEY_BASE_TEST=$(openssl rand -base64 66 | tr -d '\n') >> .env
 echo SECRET_KEY_BASE_DEVELOPMENT=$(openssl rand -base64 66 | tr -d '\n') >> .env
 ```
6. Ensure the API is functioning properly by running `npm run server`.
7. Run the development server with npm start.

#### POST /sign-up

Request:

```sh
curl --include --request POST http://localhost:4741/sign-up \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password",
      "password_confirmation": "an example password"
    }
  }'
```

```sh
scripts/sign-up.sh
```

Response:

```md
HTTP/1.1 201 Created
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email"
  }
}
```

#### POST /sign-in

Request:

```sh
curl --include --request POST http://localhost:4741/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "an@example.email",
      "password": "an example password"
    }
  }'
```

```sh
scripts/sign-in.sh
```

Response:

```md
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "user": {
    "id": 1,
    "email": "an@example.email",
    "token": "33ad6372f795694b333ec5f329ebeaaa"
  }
}
```

#### PATCH /change-password/

Request:

```sh
curl --include --request PATCH http://localhost:4741/change-password/ \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "an example password",
      "new": "super sekrit"
    }
  }'
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/change-password.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### DELETE /sign-out/

Request:

```sh
curl --include --request DELETE http://localhost:4741/sign-out/ \
  --header "Authorization: Token token=$TOKEN"
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/sign-out.sh
```

Response:

```md
HTTP/1.1 204 No Content
```

#### CREATE /dogs/

Request:

```sh
curl --include --request PATCH http://localhost:4741/dogs/ \
  --header "Authorization: Bearer ${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "dogs": {
      "image": "'"${IMAGE}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'
```

```sh
TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/create.sh
```

Response:

```md
HTTP/1.1 201 Created
{
  "dogs":{  "image":"https://i.kinja-img.com/gawker-media/image/upload/s--WFkXeene--/c_scale,f_auto,fl_progressive,q_80,w_800/ol9ceoqxidudap8owlwn.jpg",
  "description":"new dog",
  "owner":"5bc0071ebf5cfc31f0472920",
  "_id":"5bc0077ebf5cfc31f0472921",
  "label": []
  }
}
```
#### POST Google Vision API

curl --include --request PATCH https://vision.googleapis.com/v1/images:annotate?key= + API_key\
  --header "Content-Type: application/json" \
  --data '{
    "requests": [
      {
        "image": {
          "source": {
            "imageUri": https://i.kinja-img.com/gawker-media/image/upload/s--WFkXeene--/c_scale,f_auto,fl_progressive,q_80,w_800/ol9ceoqxidudap8owlwn.jpg
          }
        },
        "features": [
          {
            "type": "LABEL_DETECTION",
          }
        ]
      }
    ]
  }'

  Response:

  ```md
  HTTP/1.1 200 OK
  {
   "responses": [
    {
     "labelAnnotations": [
      {
       "mid": "/m/0bt9lr",
       "description": "dog",
       "score": 0.9887024,
       "topicality": 0.9887024
      },
      {
       "mid": "/m/01z5f",
       "description": "dog like mammal",
       "score": 0.949399,
       "topicality": 0.949399
      },
     ]
    }
   ]
  }
  ```
  #### DELETE /dogs/:id

  Request:

  ```sh
  curl --include --request PATCH http://localhost:4741/dogs/ + ID \
    --header "Authorization: Bearer ${TOKEN}"
  ```

  ```sh
  TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/destroy.sh
  ```

  Response:

  ```md
  HTTP/1.1 204 No Content
  ```
  #### PATCH /dogs/:id

  Request:

  ```sh
  curl --include --request PATCH http://localhost:4741/dogs/ + ID \
    --header "Authorization: Bearer ${TOKEN}" \
    --header "Content-Type: application/json" \
    --data '{
      "dogs": {
        "image": "'"${IMAGE}"'",
        "description": "'"${DESCRIPTION}"'"
      }
    }'
  ```

  ```sh
  TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/update.sh
  ```

  Response:

  ```md
  HTTP/1.1 202 Accepted

  {
    "items": {
      "n": 1,
      "nModified":1,
      "ok":1
    }
  }
  ```
  #### GET /dogs/

  Request:

  ```sh
  curl --include --request GET http://localhost:4741/dogs \
    --header "Content-Type: application/json" \
    --header "Authorization: Bearer 333desd82dd12rf2eh" \
  ```

  ```sh
  TOKEN=33ad6372f795694b333ec5f329ebeaaa scripts/index.sh , scripts/show.sh
  ```

  Response:
  ```md
  HTTP/1.1 200 OK
  {
    "dogs":{  "image":"https://i.kinja-img.com/gawker-media/image/upload/s--WFkXeene--/c_scale,f_auto,fl_progressive,q_80,w_800/ol9ceoqxidudap8owlwn.jpg",
    "description":"new dog",
    "owner":"5bc0071ebf5cfc31f0472920",
    "_id":"5bc0077ebf5cfc31f0472921",
    "label": []
    }
  }
  ```
