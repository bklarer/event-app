class Api::TicketsController < ApplicationController

    def create
        ticket = Ticket.create!(ticket_params)
        render json: ticket, status: :created
    end

    def destroy
        ticket = Ticket.find(params[:id])
        ticket.destroy
        head :no_content
    end

    private

    def ticket_params
        params.permit(
            :user_id,
            :event_id
        )
    end


end
