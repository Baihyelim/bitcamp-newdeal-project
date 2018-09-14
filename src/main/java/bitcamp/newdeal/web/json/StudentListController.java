package bitcamp.newdeal.web.json;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

import bitcamp.newdeal.domain.Student;
import bitcamp.newdeal.domain.StudentList;
import bitcamp.newdeal.service.LectureService;
import bitcamp.newdeal.service.StudentListService;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/studentlist")
public class StudentListController {

    @Autowired StudentListService studentListService;
    @Autowired LectureService lectureService;
    
    @RequestMapping("applyAdd")
    public Object applyAdd(StudentList studentList, HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        Student loginStudent = (Student) session.getAttribute("loginStudent");
        
        studentListService.applyAdd(studentList);

        result.put("loginStudent", loginStudent);
        result.put("status", "success");
        return result;
    }
    
    @RequestMapping("applyUpdate")
    public Object applyUpdate(int lectureNo) {
        HashMap<String, Object> result = new HashMap<>();
        lectureService.applyUpdate(lectureNo);
        result.put("status", "success");
        return result;
    }
    
    @RequestMapping("applyDelete")
    public Object applyDelete(int lectureNo) {
       HashMap<String, Object> result = new HashMap<>();
       lectureService.applyUndo(lectureNo);
       studentListService.applyDelete(lectureNo);
       result.put("status", "success");
       return result;
       
    }
}
