package Entity;

/**
 * Created by sirius on 17-1-11.
 */
public class Drug {
    int year;//年份
    int identity;//职工1 居民2
    String name;//药品名
    double  drugfees;//药品费

    public Drug(int year, int identity, String name, double drugfees) {
        this.year = year;
        this.identity = identity;
        this.name = name;
        this.drugfees = drugfees;
    }
    public Drug(){
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

    public double getDrugfees() {
        return drugfees;
    }

    public void setDrugfees(double drugfees) {
        this.drugfees = drugfees;
    }
}
