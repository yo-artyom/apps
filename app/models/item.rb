class Item < ActiveRecord::Base

  APP_TYPE = %w( Game App )

  has_attached_file :image, :styles => {:small => "80x80", :medium => "300x300>",  :thumb => "100x100>" },

                    :url => "/:attachment/:id/:style/:basename.:extension",
                    :path => ":rails_root/public/:attachment/:id/:style/:basename.:extension"
  validates_attachment_content_type :image, :content_type => /\Aimage\/.*\Z/

  validates :name, :desc, presence: true
  validates :app_type, inclusion: APP_TYPE
  validates :rating,
            numericality: { greater_than: 0, less_than_or_equal_to: 5 },
            presence: true

  scope :only_app,  ->{ where(app_type: 'App')}
  scope :only_game, ->{ where(app_type: 'Game')}

end


