package Entity;

/**
 * Created by sirius on 17-4-6.
 */
public class DiseaseHospital {
    int year;//年份
    int identity;//职工1 或 居民2
    String h_name;//医院代码
    String grade;//医院等级
    String d_name;//疾病名称
    int h_count;//住院人次
    double h_fees;//总费用
    double h_groupfees;//住院统筹支付

    public DiseaseHospital(int year, int identity, String h_name, String grade, String d_name, int h_count, double h_fees, double h_groupfees) {
        this.year = year;
        this.identity = identity;
        this.h_name = h_name;
        this.grade = grade;
        this.d_name = d_name;
        this.h_count = h_count;
        this.h_fees = h_fees;
        this.h_groupfees = h_groupfees;
    }

    public DiseaseHospital() {
        this.year = -1;
        this.identity = -1;
        this.h_count = -1;
        this.h_fees = -1;
        this.h_groupfees = -1;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getIdentity() {
        return identity;
    }

    public void setIdentity(int identity) {
        this.identity = identity;
    }

    public String getH_name() {
        return h_name;
    }

    public void setH_name(String h_name) {
        this.h_name = h_name;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public String getD_name() {
        return d_name;
    }

    public void setD_name(String d_name) {
        this.d_name = d_name;
    }

    public int getH_count() {
        return h_count;
    }

    public void setH_count(int h_count) {
        this.h_count = h_count;
    }

    public double getH_fees() {
        return h_fees;
    }

    public void setH_fees(double h_fees) {
        this.h_fees = h_fees;
    }

    public double getH_groupfees() {
        return h_groupfees;
    }

    public void setH_groupfees(double h_groupfees) {
        this.h_groupfees = h_groupfees;
    }
}
