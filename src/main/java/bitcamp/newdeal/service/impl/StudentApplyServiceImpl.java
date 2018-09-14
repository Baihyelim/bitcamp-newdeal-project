package bitcamp.newdeal.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.StudentApply;
import bitcamp.newdeal.repository.StudentApplyRepository;
import bitcamp.newdeal.service.StudentApplyService;
@Service
public class StudentApplyServiceImpl implements StudentApplyService {

    @Autowired StudentApplyRepository studentApplyRepository;
   
    @Override
    public List<StudentApply> myApplyList(int sNum) {
        
        return studentApplyRepository.myApplyList(sNum);
    }
    

}
