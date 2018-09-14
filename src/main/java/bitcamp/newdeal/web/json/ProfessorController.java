package bitcamp.newdeal.web.json;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.newdeal.domain.Professor;
import bitcamp.newdeal.service.ProfessorService;

@RestController
@RequestMapping("/professor")
public class ProfessorController {

    @Autowired ProfessorService professorService;
    
    @PostMapping("plogin")
    public Object plogin(int professorNo, String professorPwd, HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        try {
            Professor loginProfessor = professorService.get(professorNo, professorPwd);
            
            if(loginProfessor == null)
                throw new Exception("로그인실패!");
            
            session.setAttribute("loginProfessor", loginProfessor);
            result.put("status", "success");
            
        } catch (Exception e) {
            result.put("status", "fail");
            result.put("message", e.getMessage());
        }
        
        return result;
    }
    
    @GetMapping("getsession")
    public Object getSession(int dummy, HttpSession session) {
        HashMap<String, Object> result = new HashMap<>();
        if (session.getAttribute("loginProfessor") != null) {
            result.put("user", "professor");
            result.put("info", session.getAttribute("loginProfessor"));
        } else if (session.getAttribute("loginStudent") != null) {
            result.put("user", "student");
            result.put("info", session.getAttribute("loginStudent"));
        }
        return result;
    }
}
