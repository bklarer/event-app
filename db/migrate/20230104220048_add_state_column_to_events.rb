class AddStateColumnToEvents < ActiveRecord::Migration[6.1]
  def change
    add_column :events, :state, :string
  end
end
