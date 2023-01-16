class Api::EventsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Event.all
    end

    def create
        if @current_user[:id] == params[:creator_id]
            event = Event.create!(event_params)
            render json: event, status: :created
        else
            render json: {errors: ["User not authorized to create event"]}, status: :unauthorized
        end
    end

    def show
        event = find_event
        render json: event
    end

    def update
            event = find_event
        if @current_user[:id] == event[:creator_id]
            event.update!(event_params)
            render json: event
        else
            render json: {errors: ["User is not the creator of the event"]}, status: :unauthorized
        end
    end

    def destroy
        event = find_event
        if @current_user[:id] == event[:creator_id]
            event.destroy
            head :no_content
        else
            render json: {errors: ["User is not the creator of the event"]}, status: :unauthorized
        end
    end


    private

    def event_params
        params.permit(
            :title, 
            :description, 
            :img_url, 
            :date, 
            :address, 
            :city, 
            :state, 
            :zip,
            :creator_id
        )
    end

    def find_event
        Event.find(params[:id])
    end


end
