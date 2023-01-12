class Event < ApplicationRecord
    has_many :tickets
    has_many :users, through: :tickets

    validates :title, presence: true
    validates :date, presence: true

    belongs_to :creator, class_name: "User"
end
