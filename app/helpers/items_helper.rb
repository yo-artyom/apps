module ItemsHelper
  def detect_device_and_return_link
    user_agent =  request.env['HTTP_USER_AGENT'].downcase
    if user_agent.index('iphone')
      iphone_link
    else if user_agent.index('ipad')
           ipad_link
         else if user_agent.index('android')
                android_link
              else iphone_link
              end
         end
    end
  end
end
