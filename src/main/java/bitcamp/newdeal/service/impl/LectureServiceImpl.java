package bitcamp.newdeal.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.repository.LectureRepository;
import bitcamp.newdeal.service.LectureService;

@Service
public class LectureServiceImpl implements LectureService {

    @Autowired LectureRepository lectureRepository;
    
    @Override
    public List<Lecture> list(int page, int size) {
        HashMap<String, Object> params = new HashMap<>();
        params.put("startIndex", (page - 1) * size);
        params.put("pageSize", size);
        return lectureRepository.lectureList(params);
    }

    @Override
    public Lecture get(int lNum) {
        
        return lectureRepository.selectOne(lNum);
    }
    @Override
    public int add(Lecture lecture) {
        
        return lectureRepository.insert(lecture);
    }

    @Override
    public int update(Lecture lecture) {

    	return lectureRepository.update(lecture);
    }

    @Override
    public int delete(int lectureNo) {
    	
    	return lectureRepository.delete(lectureNo);
    }

    @Override
    public List<Lecture> mylist(int pNum) {
        
        return lectureRepository.myLectureList(pNum);
    }

    @Override
    public List<Lecture> listSearch(String keyword) {
        return lectureRepository.lectureListSearch(keyword);
    }

    @Override
    public int getTotalPage(int size) {
        int count = lectureRepository.getTotalPage();
        int totalPage = count / size;
        if (count % size > 0)
            totalPage++;
        return totalPage;
    }

    @Override
    public int applyUpdate(int lectureNo) {
        
        return lectureRepository.applyUpdate(lectureNo);
    }

    @Override
    public int applyUndo(int lectureNo) {
        // TODO Auto-generated method stub
        return lectureRepository.applyUndo(lectureNo);
    }



}
