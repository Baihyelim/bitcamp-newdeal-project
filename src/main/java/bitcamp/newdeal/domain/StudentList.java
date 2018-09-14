package bitcamp.newdeal.domain;

import java.io.Serializable;
import java.sql.Date;

public class StudentList implements Serializable {
    private static final long serialVersionUID = 1L;
    
    protected int lectureNo;
    protected int sNum;
    protected Date applyDay;
    protected int applyConfirm;
    
    @Override
    public String toString() {
        return "StudentList [lectureNo=" + lectureNo + ", sNum=" + sNum + ", applyDay=" + applyDay + ", applyConfirm="
                + applyConfirm + "]";
    }

    public int getLectureNo() {
        return lectureNo;
    }

    public void setLectureNo(int lectureNo) {
        this.lectureNo = lectureNo;
    }

    public int getsNum() {
        return sNum;
    }

    public void setsNum(int sNum) {
        this.sNum = sNum;
    }

    public Date getApplyDay() {
        return applyDay;
    }

    public void setApplyDay(Date applyDay) {
        this.applyDay = applyDay;
    }

    public int getApplyConfirm() {
        return applyConfirm;
    }

    public void setApplyConfirm(int applyConfirm) {
        this.applyConfirm = applyConfirm;
    }
    
  
    
    
}
