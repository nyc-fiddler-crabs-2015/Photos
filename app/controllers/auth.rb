get '/signup' do
  erb :"auth/signup"
end

post '/signup' do
  p params
  @new_user = User.new(params[:user])
  if @new_user.save
    session[:user_id] = @new_user.id
    redirect '/categories'
  else
    redirect '/signup'
 end
end

get '/login' do
  erb :"auth/login"
end

# post '/login' do
#   @user = User.find_by(email: params[:user][:email])
#    if @user.try(:authenticate, params[:user][:password])
#     session[:user_id] = @user.id
#     redirect '/categories'
#    else
#     redirect '/login'
#   end
# end

post '/login.json' do
  @user = User.find_by(email: params[:user][:email])
  if @user.try(:authenticate, params[:user][:password])
    session[:user_id] = @user.id
    {url: "/categories"}.to_json
  end
end

get '/logout' do
  session[:user_id] = nil
  redirect '/'
end