class Api::TicketsController < ApplicationController

    def create
        if @current_user[:id] == params[:user_id]
            ticket = Ticket.create!(ticket_params)
            render json: ticket, status: :created
        else
            render json: {errors: ["User not authorized to add tickets for other users"]}, status: :unauthorized
        end
    end

    def destroy
        ticket = Ticket.find(params[:id])
        if @current_user[:id] == ticket[:user_id]
            ticket.destroy
            head :no_content
        else 
            render json: {errors: ["User not authorized to delete tickets for other users"]}, status: :unauthorized
        end
    end

    private

    def ticket_params
        params.permit(
            :user_id,
            :event_id
        )
    end


end
