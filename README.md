# Legal Services API

## User Stories
- A user is able to register as a client
- A is able to log in as a client to an existing account
- A user is able to register as an advocate
- A is able to log in as an advocate to an existing account
- A client is able to create a dispute with an advocate of their choice
- A client is able to get a list of all his/her created disputes
- An advocate is able to get a list of all disputes he/she is associated with
- An advocate is able to update & delete an client's dispute record


## API Documentation
### Clients
1. Sign Up - New client registration

    post: ``/api/clients/signup``

    Response: 
    ```json
  
    id: 5,
    name: "Tess",
    email: "tess@gmail.com",
    phone: "0712345687"
  
    ```
2. Show - Returns logged in client's data
 
    get: `/api/clients/me`

    Response: 
    ```json
  
    id: 5,
    name: "Tess",
    email: "tess@gmail.com",
    phone: "0712345687"
    ```
  
3. Index - Returns list of all clients (Only advocates are authorized)

    get: `/api/clients`

     Response: 

    [
    ```json
    {
      id: 4,
      name: "Mike",
      email: "mike@gmail.com",
      phone: "0712345687"
    },
    {
      id: 5,
      name: "Tess",
      email: "tess@gmail.com",
      phone: "0712345687"
    }
    ```
    ]

 ### Sessions
 post "/api/clients/login", to: "sessions#client_login_session"
 delete "/api/clients/logout", to: "sessions#client_destroy_session" 
 post "/api/advocates/login", to: "sessions#advocate_login_session"
 delete "/api/advocates/logout", to: "sessions#advocate_destroy_session"

 ### Dispute Categories
 get "/api/dispute_categories", to: "dispute_categories#index"
 post "/api/dispute_categories", to: "dispute_categories#create"

 ### Dispute Types
 get "/api/dispute_types", to: "dispute_types#index"
 post "/api/dispute_types", to: "dispute_types#create"

 ### Advocates
 post "/api/advocates/signup", to: "advocates#create"
 get "/api/advocates", to: "advocates#index"
 get "/api/advocates/me", to: "advocates#show"

 ### Disputes
 get "/api/disputes", to: "disputes#index"
 get "/api/disputes/:id", to: "disputes#show"
 post "/api/disputes/create", to: "disputes#create"
 get "/api/disputes/:id", to: "disputes#destroy"

