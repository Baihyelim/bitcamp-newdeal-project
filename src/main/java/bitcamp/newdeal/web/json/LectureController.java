package bitcamp.newdeal.web.json;

import java.io.File;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Professor;
import bitcamp.newdeal.domain.Student;
import bitcamp.newdeal.service.LectureService;
import bitcamp.newdeal.service.ProfessorService;

@RestController
@RequestMapping("/lecture")
public class LectureController {

    @Autowired
    LectureService lectureService;
    @Autowired
    ProfessorService professorService;

    @Autowired
    ServletContext sc;


    @GetMapping("list")
    public Object list(@RequestParam(defaultValue="1") int page,
                       @RequestParam(defaultValue="5") int size,
            HttpSession session) throws Exception {
        HashMap<String, Object> result = new HashMap<>();
            
        if (session.getAttribute("loginStudent") != null) {
            Student loginStudent = (Student) session.getAttribute("loginStudent");
            result.put("loginStudent", loginStudent);
        } else if (session.getAttribute("loginProfessor") != null) {
            
            Professor loginProfessor = (Professor) session.getAttribute("loginProfessor");
            result.put("loginProfessor", loginProfessor);
        }
           
        if(page < 1) page =1;
        if(size < 1 || size >20) size =5;

        List<Lecture> list = lectureService.list(page, size);
       
        result.put("status", "success");
        result.put("list", list);
        result.put("page", page);
        result.put("size", size);
        result.put("totalPage", lectureService.getTotalPage(size));
        return result;
    }

    @GetMapping("myList")
    public Object myList(HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();

        Professor loginProfessor = (Professor) session.getAttribute("loginProfessor");

        List<Lecture> mylist = lectureService.mylist(loginProfessor.getpNum());

        result.put("status", "success");
        result.put("myList", mylist);
        return result;

    }

    @RequestMapping(value = "view")
    public Object lectureView(int lNum, int pNum) {
        HashMap<String, Object> result = new HashMap<>();

        Lecture lecture = lectureService.get(lNum);
        String pname = professorService.getPname(pNum);

        result.put("list", lecture);
        result.put("pname", pname);

        return result;
    }

    @GetMapping("listsearch")
    public Object listSearch(String keyword, HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        
        if (session.getAttribute("loginStudent") != null) {
            Student loginStudent = (Student) session.getAttribute("loginStudent");
            result.put("loginStudent", loginStudent);
        } else if (session.getAttribute("loginProfessor") != null) {
            
            Professor loginProfessor = (Professor) session.getAttribute("loginProfessor");
            result.put("loginProfessor", loginProfessor);
        }

        List<Lecture> list = lectureService.listSearch(keyword);

        
        result.put("status", "success");
        result.put("list", list);
        return result;
    }

    @RequestMapping("insert")
    public Object insert(MultipartFile file) {
       

        String newfilename = UUID.randomUUID().toString();
        String path = sc.getRealPath("/files/" + newfilename);

        try {
            file.transferTo(new File(path));
        } catch (Exception e) {
            e.printStackTrace();
        }

        HashMap<String, Object> result = new HashMap<>();
        result.put("newfilename", newfilename);

        return result;
    }

    @RequestMapping("add")
    public Object insert(Lecture lecture) {
        
        
        
        HashMap<String, Object> result = new HashMap<>();
        lectureService.add(lecture);
        result.put("status", "success");
        return result;
    }

    @RequestMapping("update")
    public Object update(Lecture lecture) {
        

        HashMap<String, Object> result = new HashMap<>();
        lectureService.update(lecture);
        result.put("status", "success");
        return result;
    }

    @RequestMapping("delete")
    public Object delete(int lectureNo) {
        

        HashMap<String, Object> result = new HashMap<>();
        lectureService.delete(lectureNo);
        result.put("status", "success");
        return result;
    }

}
