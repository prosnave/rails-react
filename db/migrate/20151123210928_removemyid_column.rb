class RemovemyidColumn < ActiveRecord::Migration
  def change
    remove_column :contacts, :myid, :string
  end
end