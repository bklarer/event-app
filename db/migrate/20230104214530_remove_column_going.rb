class RemoveColumnGoing < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :going
  end
end
