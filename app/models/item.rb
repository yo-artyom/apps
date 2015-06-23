class Item < ActiveRecord::Base

  APP_TYPE = %w( Game App )

  mount_uploader :item_image, ItemImageUploader

  validates :name, :desc,:iphone_link,:android_link,:ipad_link, presence: true
  validates :app_type, inclusion: APP_TYPE
  validates :rating,
            numericality: { greater_than: 0, less_than_or_equal_to: 5 },
            presence: true

  scope :only_app,  ->{ where(app_type: 'App')}
  scope :only_game, ->{ where(app_type: 'Game')}


end


