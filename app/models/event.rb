class Event < ApplicationRecord
    has_many :tickets
    has_many :users, through: :tickets

    validates(
        :title, 
        :date, 
        :description, 
        :img_url, 
        :address, 
        :city, 
        :state, 
        :zip, presence: true
    )
    
    belongs_to :creator, class_name: "User"
end
