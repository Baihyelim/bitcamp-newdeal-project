package bitcamp.newdeal.domain;

import java.io.Serializable;

public class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    
    protected int sNum;
    protected int studentNo;
    protected String studentPwd;
    protected String studentName;
    protected String studentTel;
    protected String studentMajor;
    protected String studentEmail;
    protected int studentYear;
    protected int studentMaxClass;
    
    @Override
    public String toString() {
        return "Student [sNum=" + sNum + ", studentNo=" + studentNo + ", studentPwd=" + studentPwd + ", studentName="
                + studentName + ", studentTel=" + studentTel + ", studentMajor=" + studentMajor + ", studentEmail="
                + studentEmail + ", studentYear=" + studentYear + ", studentMaxClass=" + studentMaxClass + "]";
    }

    public int getsNum() {
        return sNum;
    }

    public void setsNum(int sNum) {
        this.sNum = sNum;
    }

    public int getStudentNo() {
        return studentNo;
    }

    public void setStudentNo(int studentNo) {
        this.studentNo = studentNo;
    }

    public String getStudentPwd() {
        return studentPwd;
    }

    public void setStudentPwd(String studentPwd) {
        this.studentPwd = studentPwd;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getStudentTel() {
        return studentTel;
    }

    public void setStudentTel(String studentTel) {
        this.studentTel = studentTel;
    }

    public String getStudentMajor() {
        return studentMajor;
    }

    public void setStudentMajor(String studentMajor) {
        this.studentMajor = studentMajor;
    }

    public String getStudentEmail() {
        return studentEmail;
    }

    public void setStudentEmail(String studentEmail) {
        this.studentEmail = studentEmail;
    }

    public int getStudentYear() {
        return studentYear;
    }

    public void setStudentYear(int studentYear) {
        this.studentYear = studentYear;
    }

    public int getStudentMaxClass() {
        return studentMaxClass;
    }

    public void setStudentMaxClass(int studentMaxClass) {
        this.studentMaxClass = studentMaxClass;
    }
    
    
}
