class AddRowColumnSeatToReservations < ActiveRecord::Migration[5.1]
  def change
    add_column :reservations, :row, :text
    add_column :reservations, :column, :text
    add_column :reservations, :seat, :text
  end
end
