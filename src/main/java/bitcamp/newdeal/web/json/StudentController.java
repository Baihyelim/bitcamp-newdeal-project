package bitcamp.newdeal.web.json;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.newdeal.domain.Student;
import bitcamp.newdeal.service.LectureService;
import bitcamp.newdeal.service.StudentService;

@RestController
@RequestMapping("/student")
public class StudentController {

    @Autowired StudentService studentService;
    @Autowired LectureService lectureService;
    
    @PostMapping("slogin")
    public Object slogin(int studentNo, String studentPwd, HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        
        try {
            Student loginStudent = studentService.get(studentNo, studentPwd);
            
            if(loginStudent == null)
                throw new Exception("로그인 실패!");
            
            session.setAttribute("loginStudent", loginStudent);
            result.put("status", "success");
            
        }catch(Exception e) {
            result.put("status", "fail");
            result.put("message", e.getMessage());
        }
        
        return result;
    }
    
    @PostMapping("slogout")
    public Object slogout(int studentNo, String studentPwd, HttpSession session) {
        
        HashMap<String, Object> result = new HashMap<>();
        
        try {            
            session.invalidate();
            result.put("status", "success");
            
        }catch(Exception e) {
            result.put("status", "fail");
            result.put("message", e.getMessage());
        }
        
        return result;
    }
    
    
}
