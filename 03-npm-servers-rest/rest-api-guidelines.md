# REST API guidelines

### General rules
* Use plural by default, singular where plural does not make sense
  * instead of `GET /ticket` use `GET /tickets`
* Use always HTTPS
  * No exceptions!
* Always have a full up-to-date documentation
  * Use github markdown files (alternatively use Apiary, Swagger)
  * Document each and every request (at least specify URL, HTTP method, request body, response body)
  * Define date formats
* Always use JSON
  * No XML
  * Always use JSON for POST/PUT/PATCH requests (avoid URL encoding)
* snake_case vs. camelCase
  * Pick which one you prefer but be consistent
* use correct HTTP status codes
  * 2xx (OK)
  * 4xx (Bad request)
  * 5xx (Internal server error)
* Use HTTP multipart request for file upload
  * Don't use base64 for file upload as it increases the size
  * Use base64 for small binary data
* For more info read this article: http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api


### How to structure API endpoints
```
GET /tickets - Retrieves a list of tickets
GET /tickets/12 - Retrieves a specific ticket
POST /tickets - Creates a new ticket
PUT /tickets/12 - Updates ticket #12
PATCH /tickets/12 - Partially updates ticket #12
DELETE /tickets/12 - Deletes ticket #12
```

### Difference between PUT & PATCH
```
PATCH /users/12 { firstName: "Martin" }
PUT /users/12 { firstName: "Martin" }
```
  * PATCH updates first name to "Martin"
  * PUT updates first name to "Martin" and sets last name to null

### How to deal with relations
* Only use relations where you want to enforce them
* Flat structure is preferable (keep it simple)

```
GET /tickets/12/messages - Retrieves list of messages for ticket #12
GET /tickets/12/messages/5 - Retrieves message #5 for ticket #12
POST /tickets/12/messages - Creates a new message in ticket #12
PUT /tickets/12/messages/5 - Updates message #5 for ticket #12
PATCH /tickets/12/messages/5 - Partially updates message #5 for ticket #12
DELETE /tickets/12/messages/5 - Deletes message #5 for ticket #12
```

### Filtering
```
GET /tickets?state=open - Retrieves a list of opened tickets
```

### Sorting
```
GET /tickets?sort=-priority - Retrieves a list of tickets in descending order of priority
GET /tickets?sort=-priority,created_at - Retrieves a list of tickets in descending order of priority. Within a specific priority, older tickets are ordered first
```

### Filtering & Sorting
```
GET /tickets?state=closed&sort=-updated_at - Retrieve recently closed tickets
```

### Limiting which fields are returned by the API
```
GET /tickets?fields=id,subject,customer_name,updated_at&state=open&sort=-updated_at
```

### Search
* Search might be considered as a resource
* Provide aliases for common queries

```
GET /tickets/search?q=return
GET /tickets/recently-closed
```

### Envelopes in responses
* Don't use an envelope by default, but make it possible when needed

```
INSTEAD OF THIS:
{
  "data" : {
    "id" : 123,
    "name" : "John"
  }
}

PREFER THIS:
{
  "id" : 123,
  "name" : "John"
}
```

### Authorization
* Obtain access token using credentials (e.g. email, password)
* Use access token to authorize requests

### Error handling
* Don't rely on HTTP status code to differentiate between specific errors - define a consumable error payload
* Always use self-explanatory string as a type (avoid magical numeric values - API should be standalone)
* Don't reveal internals of your server to the consumer (stacktraces, secure data, etc.)

```
{
  "type" : "InvalidAccessToken",
  "message" : "Valid access token is required to access this resource."
}
```