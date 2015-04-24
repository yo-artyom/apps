json.array!(@items) do |item|
  json.extract! item, :id, :name, :desc, :type, :image_url
  json.url item_url(item, format: :json)
end
