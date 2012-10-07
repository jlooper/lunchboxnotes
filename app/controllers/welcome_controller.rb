class WelcomeController < ApplicationController
	def index
    @notes = Note.all.shuffle
	
    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @notes }
    end
  end
end
