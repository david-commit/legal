class AdvocateSerializer < ActiveModel::Serializer
  attributes :id, :name, :phone, :email,  :years_of_practice, :pin_number

  has_many :disputes

end

