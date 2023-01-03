class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :img_url, :date, :address, :city, :zip, :going, :creator_id
end
