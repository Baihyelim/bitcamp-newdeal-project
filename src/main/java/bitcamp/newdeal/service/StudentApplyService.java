package bitcamp.newdeal.service;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.StudentApply;

public interface StudentApplyService {

    List<StudentApply> myApplyList(int sNum);
}
