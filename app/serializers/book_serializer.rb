class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :genre, :image_url

  belongs_to :author
end
