import moment from 'moment'
import 'moment/locale/zh-cn'

const diffForHumans = (date, format = 'YYYYMMDD H:mm:ss') => {
  moment.locale('zh-cn')
  return moment(date, format).fromNow()
}

const host = __BASE_URL__
export default {
  diffForHumans
}
