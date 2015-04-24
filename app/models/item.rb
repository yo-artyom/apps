class Item < ActiveRecord::Base
  APP_TYPE = %w( Game App )
  validates :name, :desc, presence: true
  validates :app_type, inclusion: APP_TYPE
end


