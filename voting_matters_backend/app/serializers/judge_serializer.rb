class JudgeSerializer < ActiveModel::Serializer
  attributes :id, :name, :recommendation, :details, :judicial_district
end
