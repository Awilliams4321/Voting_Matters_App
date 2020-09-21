class JudgesController < ApplicationController
  before_action :set_judge, only: [:show, :update, :destroy]

  # GET /judges
  def index
    @judges = Judge.all

    render json: @judges
  end

  # GET /judges/1
  def show
    render json: @judge
  end

  # POST /judges
  def create
    @judge = Judge.new(judge_params)

    if @judge.save
      render json: @judge, status: :created, location: @judge
    else
      render json: @judge.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /judges/1
  def update
    if @judge.update(judge_params)
      render json: @judge
    else
      render json: @judge.errors, status: :unprocessable_entity
    end
  end

  # DELETE /judges/1
  def destroy
    @judge.destroy
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
