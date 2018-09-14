package bitcamp.newdeal.service;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Student;

public interface StudentService {

        List<Lecture> list(int sNum);
        
        Student get(int studentNo, String studentPwd);
        
        int add(Student student);
        
        int update(Student student);

}
