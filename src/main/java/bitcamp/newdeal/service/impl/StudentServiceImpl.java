package bitcamp.newdeal.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Student;
import bitcamp.newdeal.repository.StudentRepository;
import bitcamp.newdeal.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {

    @Autowired StudentRepository studentRepository;
    
    @Override
    public List<Lecture> list(int sNum) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Student get(int studentNo, String studentPwd) {

       HashMap<String, Object> params = new HashMap<>();
       params.put("studentNo", studentNo);
       params.put("studentPwd", studentPwd);
       return studentRepository.findLectureByStudentNo(params);
    }

    @Override
    public int add(Student student) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int update(Student student) {
        // TODO Auto-generated method stub
        return 0;
    }

}
