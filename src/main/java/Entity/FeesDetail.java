package Entity;

/**
 * Created by sirius on 17-3-30.
 */
public class FeesDetail {
    int year;//年份
    int identity;//职工 or 居民
    String grade;//医院等级
    double m_fees;//门诊费用
    double h_fees;//住院费用
    int m_count;//门诊人次
    int h_count;//住院人次
    double drugfees;//药费
    public FeesDetail(){}
    public FeesDetail(int year, int identity, String grade, double m_fees, double h_fees, int m_count, int h_count, double drugfees) {
        this.year = year;
        this.identity = identity;
        this.grade = grade;
        this.m_fees = m_fees;
        this.h_fees = h_fees;
        this.m_count = m_count;
        this.h_count = h_count;
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

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }

    public double getM_fees() {
        return m_fees;
    }

    public void setM_fees(double m_fees) {
        this.m_fees = m_fees;
    }

    public double getH_fees() {
        return h_fees;
    }

    public void setH_fees(double h_fees) {
        this.h_fees = h_fees;
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

    public double getDrugfees() {
        return drugfees;
    }

    public void setDrugfees(double drugfees) {
        this.drugfees = drugfees;
    }
}
