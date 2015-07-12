class MainPagesController < ApplicationController
  include Detect

  def app_page
    @apps =  Item.only_app
  end

  def game_page
    @games = Item.only_game
  end

  def main
    device = request.env['HTTP_USER_AGENT'].downcase
    if device.match(/android|iphone|ipad/)
      @apps =  Item.only_app.where( "#{detect_browser}_link != '' ")
      @games = Item.only_game.where("#{detect_browser}_link != '' ")
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
