class JudgesController < ApplicationController
  before_action :set_judge, only: [:show]

  # GET /judges
  def index
    @judges = Judge.all

    render json: @judges
  end

  # GET /judges/1
  def show
    render json: @judge
  end

  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_judge
      @judge = Judge.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def judge_params
      params.require(:judge).permit(:name, :recommendation, :details, :judicial_district)
    end
end
