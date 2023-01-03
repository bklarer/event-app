class User < ApplicationRecord
    has_secure_password

    has_many :tickets
    has_many :events, through: :tickets

    has_many :created_events, class_name: "Event", foreign_key: "creator_id"
end
