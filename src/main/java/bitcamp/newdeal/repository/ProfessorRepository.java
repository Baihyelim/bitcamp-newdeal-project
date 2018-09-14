package bitcamp.newdeal.repository;

import java.util.List;
import java.util.Map;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Professor;

public interface ProfessorRepository {
    
    Professor findLectureByProfessorNo(Map<String, Object> params);
    
    Professor selectOne (int pNum);
    
    int insert (Professor professor);
    
    int update (Professor professor);
    
    String lecturePname(int pNum);
    
}
