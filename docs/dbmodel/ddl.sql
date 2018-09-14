-- 학생
CREATE TABLE P3_Student (
    sNum      INTEGER      NOT NULL AUTO_INCREMENT, -- 학생고유번호
    sNo       INTEGER      NOT NULL, -- 학번
    sPassword VARCHAR(255) NOT NULL, -- 암호
    sName     VARCHAR(50)  NOT NULL, -- 이름
    sTel      VARCHAR(30)  NULL,     -- 연락처
    sMajor    VARCHAR(255) NULL,     -- 전공
    sEmail    VARCHAR(40)  NULL,     -- 이메일
    sYear     INTEGER      NOT NULL, -- 학년
    sMaxClass INTEGER      NOT NULL  -- 학점제한
);

-- 학생 기본키
CREATE UNIQUE INDEX PK_P3_Student
    ON P3_Student ( -- 학생
        sNum ASC -- 학생고유번호
    );

-- 학생 유니크 인덱스
CREATE UNIQUE INDEX UIX_P3_Student
    ON P3_Student ( -- 학생
        sNo ASC -- 학번
    );

-- 학생
ALTER TABLE P3_Student
    ADD
        CONSTRAINT PK_P3_Student -- 학생 기본키
        PRIMARY KEY (
            sNum -- 학생고유번호
        );

-- 학생
ALTER TABLE P3_Student
    ADD
        CONSTRAINT UK_P3_Student -- 학생 유니크 제약
        UNIQUE (
            sNo -- 학번
        );

-- 교수
CREATE TABLE P3_Professor (
    pNum       INTEGER      NOT NULL AUTO_INCREMENT, -- 교수고유번호
    pNo        INTEGER      NOT NULL, -- 교번
    pName      VARCHAR(50)  NOT NULL, -- 이름
    pPassword  VARCHAR(255) NOT NULL, -- 암호
    pMajor     VARCHAR(255) NOT NULL, -- 전공
    pTel       VARCHAR(30)  NULL,     -- 연락처
    pEmail     VARCHAR(40)  NULL,     -- 이메일
    pClassAble VARCHAR(2)   NOT NULL  -- 개설강좌제한
);

-- 교수 기본키
CREATE UNIQUE INDEX PK_P3_Professor
    ON P3_Professor ( -- 교수
        pNum ASC -- 교수고유번호
    );

-- 교수 유니크 인덱스
CREATE UNIQUE INDEX UIX_P3_Professor
    ON P3_Professor ( -- 교수
        pNo ASC -- 교번
    );

-- 교수
ALTER TABLE P3_Professor
    ADD
        CONSTRAINT PK_P3_Professor -- 교수 기본키
        PRIMARY KEY (
            pNum -- 교수고유번호
        );

-- 교수
ALTER TABLE P3_Professor
    ADD
        CONSTRAINT UK_P3_Professor -- 교수 유니크 제약
        UNIQUE (
            pNo -- 교번
        );

-- 강좌
CREATE TABLE P3_Lecture (
    lNo        INTEGER     NOT NULL AUTO_INCREMENT, -- 강의번호
    sNum       INTEGER     NOT NULL, -- 학생고유번호
    pNum       INTEGER     NOT NULL, -- 교수고유번호
    lName      VARCHAR(50) NOT NULL, -- 강의제목
    lSubject   VARCHAR(50) NOT NULL, -- 강좌과목
    lContent   TEXT        NOT NULL, -- 강의내용
    lRoom      VARCHAR(15) NOT NULL, -- 강의실
    lFile      BLOB        NULL,     -- 강의교안파일
    lMaxMember INTEGER     NOT NULL, -- 수강인원
    lAble      VARCHAR(2)  NOT NULL, -- 수강가능여부
    lStartDay  DATE        NOT NULL, -- 강의시작일
    lEndDay    DATE        NOT NULL, -- 강의끝나는일
    lTime      TIMESTAMP   NOT NULL  -- 강의시간
);

-- 강좌 기본키
CREATE UNIQUE INDEX PK_P3_Lecture
    ON P3_Lecture ( -- 강좌
        lNo ASC -- 강의번호
    );

-- 강좌
ALTER TABLE P3_Lecture
    ADD
        CONSTRAINT PK_P3_Lecture -- 강좌 기본키
        PRIMARY KEY (
            lNo -- 강의번호
        );

--  수강신청목록
CREATE TABLE P3_StudentList (
    lNo  INTEGER NOT NULL, -- 강의번호
    sNum INTEGER NOT NULL  -- 학생고유번호
);

-- 강의개설목록
CREATE TABLE P3_ProfessorList (
    lNo  INTEGER NOT NULL, -- 강의번호
    pNum INTEGER NOT NULL  -- 교수고유번호
);

-- 강좌
ALTER TABLE P3_Lecture
    ADD
        CONSTRAINT FK_P3_Student_TO_P3_Lecture -- 학생 -> 강좌
        FOREIGN KEY (
            sNum -- 학생고유번호
        )
        REFERENCES P3_Student ( -- 학생
            sNum -- 학생고유번호
        );

-- 강좌
ALTER TABLE P3_Lecture
    ADD
        CONSTRAINT FK_P3_Professor_TO_P3_Lecture -- 교수 -> 강좌
        FOREIGN KEY (
            pNum -- 교수고유번호
        )
        REFERENCES P3_Professor ( -- 교수
            pNum -- 교수고유번호
        );

--  수강신청목록
ALTER TABLE P3_StudentList
    ADD
        CONSTRAINT FK_P3_Lecture_TO_P3_StudentList -- 강좌 ->  수강신청목록
        FOREIGN KEY (
            lNo -- 강의번호
        )
        REFERENCES P3_Lecture ( -- 강좌
            lNo -- 강의번호
        );

--  수강신청목록
ALTER TABLE P3_StudentList
    ADD
        CONSTRAINT FK_P3_Student_TO_P3_StudentList -- 학생 ->  수강신청목록
        FOREIGN KEY (
            sNum -- 학생고유번호
        )
        REFERENCES P3_Student ( -- 학생
            sNum -- 학생고유번호
        );

-- 강의개설목록
ALTER TABLE P3_ProfessorList
    ADD
        CONSTRAINT FK_P3_Lecture_TO_P3_ProfessorList -- 강좌 -> 강의개설목록
        FOREIGN KEY (
            lNo -- 강의번호
        )
        REFERENCES P3_Lecture ( -- 강좌
            lNo -- 강의번호
        );

-- 강의개설목록
ALTER TABLE P3_ProfessorList
    ADD
        CONSTRAINT FK_P3_Professor_TO_P3_ProfessorList -- 교수 -> 강의개설목록
        FOREIGN KEY (
            pNum -- 교수고유번호
        )
        REFERENCES P3_Professor ( -- 교수
            pNum -- 교수고유번호
        );