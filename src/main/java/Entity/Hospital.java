package Entity;

/**
 * Created by sirius on 17-1-11.
 */
public class Hospital {
    int id;
    String num;
    int year;
    float fees;
    float groupFees;
    int m_count;
    int h_count;
    String level;

    public Hospital(int id, String num, int year, float fees, float group, int m_count,int h_count, String level) {
        this.id = id;
        this.num = num;
        this.year = year;
        this.fees = fees;
        this.groupFees = group;
        this.m_count = m_count;
        this.h_count=h_count;
        this.level = level;
    }
    public Hospital(){}

    public int getH_count() {
        return h_count;
    }

    public void setH_count(int h_count) {
        this.h_count = h_count;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNum() {
        return num;
    }

    public void setNum(String num) {
        this.num = num;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public float getFees() {
        return fees;
    }

    public void setFees(float fees) {
        this.fees = fees;
    }

    public float getGroupFees() {
        return groupFees;
    }

    public void setGroupFees(float groupFees) {
        this.groupFees = groupFees;
    }

    public int getM_count() {
        return m_count;
    }

    public void setM_count(int m_count) {
        this.m_count = m_count;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
