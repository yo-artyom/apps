class MainPagesController < ApplicationController

  def app_page
    @apps =  Item.where( app_type:  'App')
  end

  def game_page
    @games = Item.where( app_type:  'Game')
  end

  def updates
  end

end
