import request from '@/utils/request'
export default {
  //分页查询讲师
  getCourseList(page,limit,searchObj) {
    return request({
      url: `/eduservice/coursefront/getCourseFrontList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  //查询所有分列  
  getAllSubject() {
    return request({
      url: `/eduservice/edu-subject/getAllSubject`,
      method: 'get'
    })
  }
}
