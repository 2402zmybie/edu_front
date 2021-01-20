import request from '@/utils/request'
export default {
  //分页查询讲师
  getTeacherList(page,limit) {
    return request({
      url: `/eduservice/teacherfront/pageTeacher/${page}/${limit}`,
      method: 'get'
    })
  }
}