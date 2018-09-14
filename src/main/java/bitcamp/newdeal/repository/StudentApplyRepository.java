package bitcamp.newdeal.repository;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.StudentApply;

public interface StudentApplyRepository {
    
    List<StudentApply> myApplyList(int sNum);
}
