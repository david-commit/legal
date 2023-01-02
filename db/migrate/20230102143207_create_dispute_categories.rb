class CreateDisputeCategories < ActiveRecord::Migration[7.0]
  def change
    create_table :dispute_categories do |t|
      t.string :category_name
      t.string :category_description

      t.timestamps
    end
  end
end
