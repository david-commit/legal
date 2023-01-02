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

    POST: ``/api/clients/signup``

    Response: 
  ```json
    {
      "id": 5,
      "name": "Tess",
      "email": "tess@gmail.com",
      "phone": "0712345687"
    }
  
  ```
2. Show - Auto-login & returns logged in client's data
 
    GET: `/api/clients/me`

    Response: 
  ```json
    {
      "id": 5,
      "name": "Tess",
      "email": "tess@gmail.com",
      "phone": "0712345687"
    }
  ```
  
3. Index - Returns list of all clients (Only advocates are authorized)

    GET: `/api/clients`

     Response: 

  ```json
  [
    {
      "id": 4,
      "name": "Mike",
      "email": "mike@gmail.com",
      "phone": "0712345687"
    },
    {
      "id": 5,
      "name": "Tess",
      "email": "tess@gmail.com",
      "phone": "0712345687"
    }
  ]
  ```

4. Login - Creates a client session

    POST: `/api/clients/login`
    
    Response: 

  ```json
    {
      "id": 5,
      "name": "Tess",
      "email": "tess@gmail.com",
      "phone": "0712345687"
    }
  ```

 ### Dispute Categories
 1. Index - Returns all dispute categories with its associated advocaes and dispute sub-types.

    GET:  `/api/dispute_categories`

    Response:

  ```json
   {
        "id": 1,
        "category_name": "Children Law",
        "category_description": "parental responsibility,fostering, adoption, custody, maintenance, guardianship, care and protection of children.",
        "advocates": [
            {
                "id": 1,
                "name": "Ondiege",
                "phone": "33491303",
                "email": "ondiege@gmail.com",
                "years_of_practice": 17,
                "pin_number": 664566
            }
        ],
        "dispute_types": [
            {
                "id": 1,
                "dispute_category_id": 1,
                "dispute_name": "Adoption"
            },
            {
                "id": 2,
                "dispute_category_id": 1,
                "dispute_name": "Custody & Maintenance"
            },
            {
                "id": 3,
                "dispute_category_id": 1,
                "dispute_name": "Guardianship"
            }
        ]
    },
    {
        "id": 2,
        "category_name": "Family Law",
        "category_description": "issues involving family relationships such as marriage and divorce.",
        "advocates": [
            {
                "id": 2,
                "name": "Njomo",
                "phone": "48803655",
                "email": "njomo@gmail.com",
                "years_of_practice": 10,
                "pin_number": 555947
            }
        ],
        "dispute_types": [
            {
                "id": 4,
                "dispute_category_id": 2,
                "dispute_name": "Trademark"
            },
            {
                "id": 5,
                "dispute_category_id": 2,
                "dispute_name": "Copyright"
            },
            {
                "id": 6,
                "dispute_category_id": 2,
                "dispute_name": "Patent"
            }
        ]
    }
  ```


2. Create - Creating a new dispute category (For seeding DB)
    
    POST: `/api/dispute_categories`


 ### Dispute Types

1. Index - Get a list of all types of disputes

    GET:  `/api/dispute_types`

    Response:

    ```json
    [
      {
          "id": 3,
          "dispute_category_id": 1,
          "dispute_name": "Guardianship"
      },
      {
          "id": 4,
          "dispute_category_id": 2,
          "dispute_name": "Trademark"
      },
      {
           "id": 7,
           "dispute_category_id": 3,
           "dispute_name": "Insolvency & Bankruptcy"
      },
      {
           "id": 14,
           "dispute_category_id": 5,
           "dispute_name": "Divorce & Separation"
      }
    ]
    ```

 post "/api/dispute_types", to: "dispute_types#create"



 ### Sessions
 delete "/api/clients/logout", to: "sessions#client_destroy_session" 
 post "/api/advocates/login", to: "sessions#advocate_login_session"
 delete "/api/advocates/logout", to: "sessions#advocate_destroy_session"



 ### Advocates
 post "/api/advocates/signup", to: "advocates#create"
 get "/api/advocates", to: "advocates#index"
 get "/api/advocates/me", to: "advocates#show"

 ### Disputes
 get "/api/disputes", to: "disputes#index"
 get "/api/disputes/:id", to: "disputes#show"
 post "/api/disputes/create", to: "disputes#create"
 get "/api/disputes/:id", to: "disputes#destroy"

