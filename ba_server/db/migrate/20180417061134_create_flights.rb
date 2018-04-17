class CreateFlights < ActiveRecord::Migration[5.1]
  def change
    create_table :flights do |t|
      t.text :flight_no
      t.text :origin
      t.text :destination
      t.date :date
      t.integer :avail_seats
      t.integer :airplane_id

      t.timestamps
    end
  end
end
