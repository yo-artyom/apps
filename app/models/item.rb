class Item < ActiveRecord::Base
  APP_TYPE = %w( Game App )
  validates :name, :desc, presence: true
  validates :app_type, inclusion: APP_TYPE
  validates :rating,
            :numericality => { :greater_than => 0, :less_than_or_equal_to => 5 },
            presence: true
end


