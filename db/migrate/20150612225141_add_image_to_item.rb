class AddImageToItem < ActiveRecord::Migration
  def change
    add_column :items, :item_image, :string
  end
end
