module SessionsHelper

  def login?
    !session[:user_id].nil?
  end
end
