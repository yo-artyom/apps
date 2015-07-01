class MainPagesController < ApplicationController

  def app_page
    @apps =  Item.only_app
  end

  def game_page
    array= []
    array.flatten()
    @games = Item.only_game
  end

  def main
    @apps =  Item.only_app
    @games = Item.only_game
  end

  def test
    @apps =  Item.only_app
    @games = Item.only_game
  end
end
