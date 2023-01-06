class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :img_url, :date, :address, :city, :state, :zip, :creator_id

  has_many :tickets
end
