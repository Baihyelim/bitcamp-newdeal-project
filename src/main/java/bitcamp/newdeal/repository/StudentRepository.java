package bitcamp.newdeal.repository;


import java.util.Map;

import bitcamp.newdeal.domain.Student;

public interface StudentRepository {

    Student findLectureByStudentNo(Map<String, Object> params);
    
    Student selectOne (int sNum);
    
    int insert (Student student);
    
    int update (Student student);
    
    
}
