Rails.application.routes.draw do
  resource :users, only: [:create] #Special create route
  post "/login", to: "users#login" #Points to the /login endpoint. We need to create a function in controller called login
  get "/auto_login", to: "users#auto_login"
end