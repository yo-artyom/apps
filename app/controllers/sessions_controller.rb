class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:new,:create]
  def new

  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path, notice: 'Вы вышли'
  end

  def create
    user = User.find_by(name: params[:name])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to items_path
    else
      redirect_to login_url, alert: 'Неверный логин/пароль'
    end
  end


end
