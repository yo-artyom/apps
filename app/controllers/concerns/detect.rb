module Detect
  def detect_browser
    user_agent =  request.env['HTTP_USER_AGENT'].downcase
    if user_agent.index('ipad')
      'ipad'
    elsif user_agent.index('iphone')
      'iphone'
    elsif user_agent.index('android')
      'chrome'
    else
      'unknown'
    end
  end
end
