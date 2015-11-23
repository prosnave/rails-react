class AddsCustomIDtoContact < ActiveRecord::Migration
  def change
    add_column :contacts, :myid, :string
  end
end
