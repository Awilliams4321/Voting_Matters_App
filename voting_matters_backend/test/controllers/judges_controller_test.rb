require 'test_helper'

class JudgesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @judge = judges(:one)
  end

  test "should get index" do
    get judges_url, as: :json
    assert_response :success
  end

  test "should create judge" do
    assert_difference('Judge.count') do
      post judges_url, params: { judge: { details: @judge.details, judicial_district: @judge.judicial_district, name: @judge.name, recommendation: @judge.recommendation } }, as: :json
    end

    assert_response 201
  end

  test "should show judge" do
    get judge_url(@judge), as: :json
    assert_response :success
  end

  test "should update judge" do
    patch judge_url(@judge), params: { judge: { details: @judge.details, judicial_district: @judge.judicial_district, name: @judge.name, recommendation: @judge.recommendation } }, as: :json
    assert_response 200
  end

  test "should destroy judge" do
    assert_difference('Judge.count', -1) do
      delete judge_url(@judge), as: :json
    end

    assert_response 204
  end
end
