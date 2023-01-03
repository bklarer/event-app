class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :title
      t.text :description
      t.string :img_url
      t.datetime :date
      t.string :address
      t.string :city
      t.string :zip
      t.boolean :going
      t.integer :user_id

      t.timestamps
    end
  end
end
