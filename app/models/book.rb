class Book < ApplicationRecord
    validates :title, presence: true

    validates :body, presence: true
   
    validates :genre, presence: true

    belongs_to :author

    accepts_nested_attributes_for :author, allow_destroy: true

end
