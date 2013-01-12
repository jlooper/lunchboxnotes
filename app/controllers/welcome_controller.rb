class WelcomeController < ApplicationController

	
	def index
    @notes = Note.all.shuffle
	
    respond_to do |format|
    format.html # index.html.erb
    format.json { render json: @notes }

    @images  = ["bgNotes1.png", "bgNotes2.png", "bgNotes3.png", "bgNotes4.png", "bgNotes5.png","bgNotes6.png","bgNotes7.png","bgNotes8.png","bgNotes9.png","bgNotes10.png"]
    @random_no = rand(10)
    @random_image = @images[@random_no]
    end
  end
end
