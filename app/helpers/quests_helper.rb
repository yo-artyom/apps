module QuestsHelper
  def status_css(status)
    if status == 'Срочно'
      return 'important'
    else if status == 'Важно'
           return 'warning'
         else if status == 'Неважно'
                return 'unimportant'
              else
                return 'done'
              end
         end
    end
  end
end
