class CreateQuests < ActiveRecord::Migration
  def change
    create_table :quests do |t|
      t.string :name
      t.string :status
      t.string :worker

      t.timestamps
    end
  end
end
