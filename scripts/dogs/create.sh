#!/bin/bash

API="http://localhost:4741"
URL_PATH="/dogs"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "dog": {
      "image": "'"${IMAGE}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
