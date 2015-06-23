Rails.application.routes.draw do

  resources :items

  get 'main_pages/index'
  match '/main',   to: 'main_pages#index',      via: 'get'
  match '/game',   to: 'main_pages#game_page',      via: 'get'
  match '/app',    to: 'main_pages#app_page',      via: 'get'
  match '/test',   to: 'main_pages#test', via: 'get'
  root 'main_pages#game_page'

end
