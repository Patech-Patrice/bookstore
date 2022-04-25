module Api
  module V1
    class BooksController < ApplicationController
    before_action :set_book, only: %i[ show update destroy ]
    before_action :find_book, only: [ :edit, :update, :destroy]

    # GET /books
    def index
      @books = Book.all

        render json: @books 
        # render json: @books.to_json(include: [:author]), status: :ok
    end

  
    # GET /books#new  
      def new
        @book = Book.new
        @book.build_author
      end
 

    # GET /books/:id
      def show
        @book = Book.find_by_id params[:id]

         render json: @book
      end 

    # POST /books
    def create
      @book = Book.new(book_params)

      #binding.pry
    

      if @book.save
         render json: @book, status: :created, location: @book
       
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /books/1
    def update
      if @book.update(book_params)
        render json: @book
      else
        render json: @book.errors, status: :unprocessable_entity
      end
    end

    # DELETE /books/1
    def destroy
      @book.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_book
        
        @book = Book.find_by_id params[:id]
      end

      def find_book
        @book = Book.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def book_params
        
        #  params.require(:book).permit(:title, :genre, :body, :image_url, :id, author_attributes: [:id, :first_name, :last_name])

        params.require(:book).permit!(:title, :body, :genre, :image_url,
                                 author_attributes: [:id, :first_name,  
                                 :last_name, :_destroy])
         

        

        
      end

 
  end
end
end





