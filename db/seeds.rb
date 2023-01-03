# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(username: "Ben", first_name: "Ben", last_name: "Klarer", password: "test")
User.create(username: "John", first_name: "John", last_name: "Smith", password: "test")

# Ticket.create(user_id: 1, event_id: 1)

# Event.create(title: "Christmas", description: "celebration", user_id: 1)