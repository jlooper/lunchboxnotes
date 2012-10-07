class User < ActiveRecord::Base
  attr_accessible :email, :password, :password_confirmation, :name
  acts_as_authentic do |c|
  end # block optional
end
