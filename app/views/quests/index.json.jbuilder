json.array!(@quests) do |quest|
  json.extract! quest, :id, :name, :status, :worker
  json.url quest_url(quest, format: :json)
end
