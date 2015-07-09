class MainPagesController < ApplicationController

  def app_page
    @apps =  Item.only_app
  end

  def game_page
    @games = Item.only_game
  end

  def main
    device = request.env['HTTP_USER_AGENT'].downcase
    if device == 'ipad'|| device == 'iphone'|| device == 'android'
      @apps =  Item.only_app.where( "#{device}_link != '' ")
      @games = Item.only_game.where("#{device}_link != '' ")
    else
      @apps = Item.only_app
      @games = Item.only_game
    end

  end

  def test
    @apps =  Item.only_app
    @games = Item.only_game
  end
end
