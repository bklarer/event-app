class Event < ApplicationRecord
    has_many :tickets
    has_many :users, through: :tickets

    belongs_to :creator, class_name: "User"
end
