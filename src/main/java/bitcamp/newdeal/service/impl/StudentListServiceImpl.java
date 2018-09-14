package bitcamp.newdeal.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.newdeal.domain.StudentList;
import bitcamp.newdeal.repository.StudentListRepository;
import bitcamp.newdeal.service.StudentListService;
@Service
public class StudentListServiceImpl implements StudentListService {

    @Autowired StudentListRepository studentListRepository;
    
    @Override
    public int applyAdd(StudentList studentList) {
        
        return studentListRepository.applyAdd(studentList);
    }

    @Override
    public int applyDelete(int lectureNo) {
        
        return studentListRepository.applyDelete(lectureNo);
    }

}
