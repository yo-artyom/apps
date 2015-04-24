class ChangeFieldType < ActiveRecord::Migration
  def change
    change_column :items, :desc, :text
  end
end
