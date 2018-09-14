package bitcamp.newdeal.service;

import java.util.List;

import bitcamp.newdeal.domain.Lecture;

public interface LectureService {

    List<Lecture> list(int page, int size); 
    
    Lecture get(int lNum);
    
    int add(Lecture lecture);
    
    int update(Lecture lecture);
    
    int delete(int lectureNo);

    List<Lecture> mylist(int pNum);

    List<Lecture> listSearch(String keyword);

    int applyUpdate(int lectureNo);

    int applyUndo(int lectureNo);

    int getTotalPage(int size);

}
