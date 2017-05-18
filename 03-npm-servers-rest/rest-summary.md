# REST

## HTTP methods
GET - get data
POST - create data
PUT - update specifield field, clear others
PATCH - update specifiedl fields
DELETE - delete entity
OPTIONS - endpoint metadata

## Endpoints structure
GET /api/users - get all users
POST /api/users - create user, response with newly created entity
GET /api/users/123 - get user detail
GET /api/users/123/orders?sort=createAt - get orders of user 123
GET /orders/1234423?fields=id,name&state=pending - filtering, limiting fields
POST /orders/search // BODY { state: 'pending' } - can be used when search is too complicated

## Most common HTTPS status codes
200 Success
201 Created
400 Bad Request
404 Not Found
401 Unauthorized
403 Forbidden
409 Conflict
500 Internal Server Error

## Response wrapping, headers can be also used
{
  pagination: {
  },
  data: [{
    id: 1,
    first: 'John',
    last: 'Doe'
  }]
}
