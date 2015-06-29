Rails.application.routes.draw do

  resources :items
  get 'slider', to: 'main_pages#slider', via: 'get'
  match '/game',   to: 'main_pages#game_page',      via: 'get'
  match '/app',    to: 'main_pages#app_page',       via: 'get'
  root 'main_pages#main'

end
