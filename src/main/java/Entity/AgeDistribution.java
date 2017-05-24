package Entity;

/**
 * Created by sirius on 17-3-30.
 */
public class AgeDistribution {
    int year;//年份
    int ageId;//年龄段
    int identity;//身份  职工 or 居民
    int c_count;//参保人数
    int m_count;//门诊人数
    int h_count;//住院人数
    double m_fees;//门诊统筹费用
    double h_fees;//住院统筹
    public AgeDistribution(){}
    public AgeDistribution(int year, int ageId, int identity, int c_count, int m_count, int h_count, double m_fees, double h_fees) {
        this.year = year;
        this.ageId = ageId;
        this.identity = identity;
        this.c_count = c_count;
        this.m_count = m_count;
        this.h_count = h_count;
        this.m_fees = m_fees;
        this.h_fees = h_fees;
    }

    public int getIdentity() {
        return identity;
    }

    public void setIdentity(int identity) {
        this.identity = identity;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public int getAgeId() {
        return ageId;
    }

    public void setAgeId(int ageId) {
        this.ageId = ageId;
    }

    public int getC_count() {
        return c_count;
    }

    public void setC_count(int c_count) {
        this.c_count = c_count;
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
}
