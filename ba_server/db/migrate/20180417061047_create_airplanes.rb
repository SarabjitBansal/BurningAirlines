class CreateAirplanes < ActiveRecord::Migration[5.1]
  def change
    create_table :airplanes do |t|
      t.text :name
      t.integer :rows
      t.integer :columns
      t.integer :total_seats

      t.timestamps
    end
  end
end
