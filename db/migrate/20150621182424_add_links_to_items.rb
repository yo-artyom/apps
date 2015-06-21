class AddLinksToItems < ActiveRecord::Migration
  def change
    add_column :items, :android_link, :string
    add_column :items, :iphone_link, :string
    add_column :items, :ipad_link, :string
  end
end
