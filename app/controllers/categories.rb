get '/categories' do
  @categories = Category.all
  erb :"category/all"
end

get '/categories/:id' do
  @category = Category.find(params[:id])
  @photos = @category.photos
  erb :"category/show"
end