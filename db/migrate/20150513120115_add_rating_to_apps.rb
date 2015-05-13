class AddRatingToApps < ActiveRecord::Migration
  def change
    add_column :items, :rating, :integer
  end
end
