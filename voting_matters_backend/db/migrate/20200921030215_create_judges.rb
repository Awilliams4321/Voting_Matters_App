class CreateJudges < ActiveRecord::Migration[6.0]
  def change
    create_table :judges do |t|
      t.string :name
      t.string :recommendation
      t.string :details
      t.string :judicial_district
      t.string :image

      t.timestamps
    end
  end
end
