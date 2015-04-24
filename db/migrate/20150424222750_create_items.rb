class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name
      t.string :desc
      t.string :type
      t.string :image_url
      t.string :app_type
      t.timestamps
    end
  end
end
