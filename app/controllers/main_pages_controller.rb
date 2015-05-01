class MainPagesController < ApplicationController
  def index
    @items = Item.all
    @apps =  Item.where( app_type:  'App')
    @games = Item.where( app_type:  'Game')
    @num = [1,2,3,4,5,6,7,8,9,10]
    if (@apps.size > @games.size)
      @super = @games.zip(@apps,@num)
    else
      @super = @apps.zip(@games,@num)
    end
  end
end
