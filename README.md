## Dog Identifier - Back-End

This app represents my General Assembly capstone project. It is a interactive React app for identifying dog breeds from user pictures and storing them. 

This repo contains the back-end for my Dog Idenifier app. It enables users to store images on Amazon S3, process them using Google Vision's API, and preform CRUD on a custom built Express API utilizing MongoDB that contains photo titles and links, and user login credentials.

## List of Technologies Used

Node.js, MongoDb, Express, Bcrypt, Passport, Axios, Heroku, Google Vision API, Amazon S3

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

## Filtering Google Vision API's Post Response

Extracting and organizing the data from Google's post response was one of the biggest challenges of this project. Google's post responses initially contain an array of label annotation objects similar to the example below.

``` "labelAnnotations": [
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
       {
       "mid": "/m/01z5f",
       "description": "cockapoo",
       "score": 0.79334,
       "topicality": 0.79334
      },
     ]
```
To process this data, I had to complete the following:

1. Isolate the "description" and "store" key-value pairs of each object.
2. Check to ensure that at least one of the objects in the array has a "description" key-value equal to "dog". If not, the function  returns the response "Not a dog!". 
3. Compare the "description" key-value of each object to an array of known dog breeds and only return objects where the description is equal to a known breed.
4. Preform a final check on the array to ensure that it contains at least one object with a "description" and "store" key value pair. If the array is empty, the original response from Google must have contained an object with a "description" key-value equal to "dog", but did not contain a "description" key-value equal to any known dog breed. If this is the case, the function returns the response "Unknown dog!".


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

Request:

```md
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
```
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
  ### ERD Link
  
  ERD:https://github.com/mgreim3373/DogIdentifier---BackEnd/blob/master/ERD.jpg
  
  ### Project Links
  
  Front-end deployed site: https://mgreim3373.github.io/DogIdentifier/#/

  Back-end deployed site: https://pure-wildwood-82080.herokuapp.com/

  Front-end repo: https://github.com/mgreim3373/DogIdentifier
