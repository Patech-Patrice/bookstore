Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
  #  resources :books

  get 'books/:id/update', to: 'books#update'
  get 'books', to: 'books#index', as: 'books'
  get 'books/:id', to: 'books#show', as: 'book'
  patch 'books/:id', to: 'books#update'
  delete '/books/:id' => 'books#destroy'
  post '/books', to: 'books#create'
  

 
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
   root "home#index"
end
end
end
