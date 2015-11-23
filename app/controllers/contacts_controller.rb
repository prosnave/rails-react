class ContactsController < ApplicationController
  
  def index
    render json: Contact.all
  end
  
  def create
    contact = Contact.create(name: params[:name], tel: params[:tel] )
    render json: contact
  end
  
end
