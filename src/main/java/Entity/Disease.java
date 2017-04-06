package Entity;

/**
 * Created by sirius on 17-1-10.
 */
public class Disease {
    int year;//年份
    int identity;//职工1 居民2
    String name;//疾病名称
    int h_count;//住院人次
    double h_fees;//总费用
    double h_groupfees;//住院统筹费用

    public Disease(int year, int identity, String name, int h_count, double h_fees, double h_groupfees) {
        this.year = year;
        this.identity = identity;
        this.name = name;
        this.h_count = h_count;
        this.h_fees = h_fees;
        this.h_groupfees = h_groupfees;
    }
    public Disease() {
        this(-1,-1,null,-1,-1,-1);

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public int getH_count() {
        return h_count;
    }

    public void setH_count(int h_count) {
        this.h_count = h_count;
    }
}
