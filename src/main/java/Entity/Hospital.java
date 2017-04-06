package Entity;

/**
 * Created by sirius on 17-1-11.
 */
public class Hospital {

    int year;//年份
    int identity;//职工1 或 居民2
    String r_name;//区县代码
    String h_name;//医院代码
    String grade;//grade of hospital

    int m_count;//门诊人次
    int h_count;//住院人次
    double h_fees;//住院总费用
    double h_groupfees;//住院统筹支付费用
    double m_fees;//门诊费用
    double m_groupfees;//门诊统筹支付费用
    double drugfees;//药品费
    public Hospital(){
        this.year = -1;
        this.identity = -1;
        this.m_count = -1;
        this.h_count = -1;
        this.h_fees = -1;
        this.h_groupfees = -1;
        this.m_fees = -1;
        this.m_groupfees = -1;
        this.drugfees = -1;
    }
    public Hospital(int year, int identity, String r_name, String h_name, String grade, int m_count, int h_count, double h_fees, double h_groupfees, double m_fees, double m_groupfees, double drugfees) {
        this.year = year;
        this.identity = identity;
        this.r_name = r_name;
        this.h_name = h_name;
        this.grade = grade;
        this.m_count = m_count;
        this.h_count = h_count;
        this.h_fees = h_fees;
        this.h_groupfees = h_groupfees;
        this.m_fees = m_fees;
        this.m_groupfees = m_groupfees;
        this.drugfees = drugfees;
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

    public String getR_name() {
        return r_name;
    }

    public void setR_name(String r_name) {
        this.r_name = r_name;
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

    public int getM_count() {
        return m_count;
    }

    public void setM_count(int m_count) {
        this.m_count = m_count;
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

    public double getM_fees() {
        return m_fees;
    }

    public void setM_fees(double m_fees) {
        this.m_fees = m_fees;
    }

    public double getM_groupfees() {
        return m_groupfees;
    }

    public void setM_groupfees(double m_groupfees) {
        this.m_groupfees = m_groupfees;
    }

    public double getDrugfees() {
        return drugfees;
    }

    public void setDrugfees(double drugfees) {
        this.drugfees = drugfees;
    }
}
