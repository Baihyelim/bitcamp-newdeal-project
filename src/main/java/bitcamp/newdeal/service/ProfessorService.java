package bitcamp.newdeal.service;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Professor;


public interface ProfessorService {

    List<Lecture> list(int pNum);

    Professor get(int professorNo, String professorPwd);

    int add(Professor professor);
    
    int update(Professor professor);

    String getPname(int pNum);
}
