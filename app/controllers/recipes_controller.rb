class RecipesController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid_response

  def index
    user = User.find_by(id: session[:user_id])
    if user
      recipes = Recipe.all
      render json: recipes, status: :created
    else
      render json: { errors: ["Not authorized"]}, status: :unauthorized
    end
  end

  def create
    user = User.find_by(id: session[:user_id])
    if user
      recipe = Recipe.create!(user_id: user.id, title: params[:title], instructions: params[:instructions], minutes_to_complete: params[:minutes_to_complete])
      render json: recipe, include: :user, status: :created
    else
      render json: { errors: ["Not authorized"] }, status: :unauthorized
    end
  end

  private

  def render_record_invalid_response(e)
    render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
  end

end
