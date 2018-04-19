Rails.application.routes.draw do
  root :to =>'airplanes#home'
  resources :users
  resources :flights
  resources :airplanes
  resources :reservations

end
