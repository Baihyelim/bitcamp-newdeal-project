package bitcamp.newdeal.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Service;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Professor;
import bitcamp.newdeal.repository.ProfessorRepository;
import bitcamp.newdeal.service.ProfessorService;
@Service
public class ProfessorServiceImpl implements ProfessorService {

    ProfessorRepository professorRepository;
    
    public ProfessorServiceImpl(
            ProfessorRepository professorRepository) {
        this.professorRepository = professorRepository;
    }
    
    @Override
    public List<Lecture> list(int pNum) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Professor get(int professorNo, String professorPwd) {
        HashMap<String, Object> params = new HashMap<>();
        params.put("professorNo", professorNo);
        params.put("professorPwd", professorPwd);
        return professorRepository.findLectureByProfessorNo(params);
    }

    @Override
    public int add(Professor professor) {
        // TODO Auto-generated method stub
        return 0;
    }

    @Override
    public int update(Professor professor) {
        // TODO Auto-generated method stub
        return 0;
    }
    
    @Override
    public String getPname(int pNum) {
        
        return  professorRepository.lecturePname(pNum);
    }

}
