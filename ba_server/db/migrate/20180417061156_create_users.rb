class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.text :email
      t.text :user_type
      t.string :password

      t.timestamps
    end
  end
end
