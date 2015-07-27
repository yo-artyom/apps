Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  resources :users
  resources :quests
  resources :items


  controller :sessions do
    get 'login', to: :new
    post 'login',to: :create
    delete 'logout', to: :destroy
  end


  #mount Ckeditor::Engine => '/ckeditor'


  get 'admin/index'
  match '/game',   to: 'main_pages#game_page',      via: 'get'
  match '/app',    to: 'main_pages#app_page',       via: 'get'
  match '/test',   to: 'main_pages#test',           via: 'get'

  root 'main_pages#main'

end
