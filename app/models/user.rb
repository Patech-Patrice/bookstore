class User < ApplicationRecord
    before_save :downcase_email

    validates :username, presence: true
    validates :email, presence: true

    private

    def downcase_email
        self.email = email.downcase
    end
    
end
