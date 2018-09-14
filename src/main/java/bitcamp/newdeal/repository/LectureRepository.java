package bitcamp.newdeal.repository;

import java.util.List;
import java.util.Map;

import bitcamp.newdeal.domain.Lecture;

public interface LectureRepository {

    List<Lecture> lectureList(Map<String, Object> params);
    
    Lecture selectOne(int lNum);
    
    int insert (Lecture lecture);
    
    int update (Lecture lecture);

    List<Lecture> myLectureList(int pNum);

    int delete (int lectureNo);

    List<Lecture> lectureListSearch(String keyword);

    int getTotalPage();

    int applyUpdate(int lectureNo);

    int applyUndo(int lectureNo);
    
    

}
