package bitcamp.newdeal.repository;

import bitcamp.newdeal.domain.StudentList;

public interface StudentListRepository {

    int applyList(int lectureNo);
    
    int applyAdd(StudentList studentList);

    int applyDelete(int lectureNo);
}
