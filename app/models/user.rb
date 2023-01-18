class User < ApplicationRecord
    has_secure_password

    has_many :tickets
    has_many :events, through: :tickets

    has_many :created_events, class_name: "Event", foreign_key: "creator_id"

    validates :username, presence: true, uniqueness: true
    validates :first_name, :last_name, presence: true
end
