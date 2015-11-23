class NameandTeltoContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :name, :string
    add_column :contacts, :tel, :string
  end
end
