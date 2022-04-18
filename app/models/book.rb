class Book < ApplicationRecord
    validates :title, presence: true

    validates :body, presence: true
   
    validates :genre, presence: true

    belongs_to :author

end
