package bitcamp.newdeal.web.json;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.newdeal.domain.Lecture;
import bitcamp.newdeal.domain.Student;
import bitcamp.newdeal.domain.StudentApply;
import bitcamp.newdeal.service.StudentApplyService;

@RestController
@RequestMapping("/apply")
public class StudentApplyController {

     @Autowired StudentApplyService studentApplyService;
     
     @RequestMapping("myApplyList")
     public Object myApplyList(HttpSession session) {
         HashMap<String, Object> resultApplyList = new HashMap<>();
         
         Student loginStudent = (Student) session.getAttribute("loginStudent");
         List<StudentApply> myApplyList = studentApplyService.myApplyList(loginStudent.getsNum());
         if(myApplyList.size()==0) {
             resultApplyList.put("status", "newApply");
             resultApplyList.put("myApplyList", myApplyList);
         }else {
         
         resultApplyList.put("status", "success");
         resultApplyList.put("myApplyList", myApplyList);
         }
         return resultApplyList;
     }
}
