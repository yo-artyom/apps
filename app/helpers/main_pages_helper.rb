module MainPagesHelper

  def detect_device
    request.env['HTTP_USER_AGENT'].downcase
  end

  def return_link(item,user_device)
    if user_device.index('iphone')
      item.iphone_link
    elsif user_device.index('ipad')
      item.ipad_link
    elsif user_device.index('android')
      item.android_link
    else
      item.iphone_link
    end
  end
end
