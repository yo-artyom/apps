module MainPagesHelper
  def detect_device
    request.env['HTTP_USER_AGENT'].downcase
  end

  def return_link(item,user_agent)
    if user_agent.index('iphone')
      item.iphone_link
    else if user_agent.index('ipad')
           item.ipad_link
         else if user_agent.index('android')
                item.android_link
              else item.iphone_link
              end
         end
    end
  end

end
