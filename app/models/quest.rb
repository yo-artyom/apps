class Quest < ActiveRecord::Base
  STATUS_TYPE = %w(Срочно Важно Неважно Сделано)
  WORKERS = %w(Артём Минар)
  validates :name, :status, presence: true
  validates :status, inclusion: STATUS_TYPE
  validates :worker, inclusion: WORKERS


end
