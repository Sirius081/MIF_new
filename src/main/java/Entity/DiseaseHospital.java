package Entity;

/**
 * Created by sirius on 17-4-6.
 */
public class DiseaseHospital {
    int year;//年份
    int identity;//职工1 或 居民2
    String h_name;//医院代码
    String fake_name;
    String grade;//医院等级
    String d_name;//疾病名称
    int h_count;//住院人次
    double h_fees;//总费用
    double h_groupfees;//住院统筹支付
    double avg_hgroupfees;

    public DiseaseHospital(int year, int identity, String h_name, String fake_name, String grade, String d_name, int h_count, double h_fees, double h_groupfees, double avg_hgroupfees) {
        this.year = year;
        this.identity = identity;
        this.h_name = h_name;
        this.fake_name = fake_name;
        this.grade = grade;
        this.d_name = d_name;
        this.h_count = h_count;
        this.h_fees = h_fees;
        this.h_groupfees = h_groupfees;
        this.avg_hgroupfees = avg_hgroupfees;
    }

    public DiseaseHospital() {
        this.year = -1;
        this.identity = -1;
        this.h_count = -1;
        this.h_fees = -1;
        this.h_groupfees = -1;
    }

    public String getFake_name() {
        return fake_name;
    }

    public void setFake_name(String fake_name) {
        this.fake_name = fake_name;
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

    public double getAvg_hgroupfees() {
        if(this.h_count!=0){
            this.avg_hgroupfees = this.h_groupfees/this.h_count;
            this.avg_hgroupfees=(int)(this.avg_hgroupfees*100)/100.0;
        }else{
            this.avg_hgroupfees=0;
        }
        return avg_hgroupfees;
    }

    public void setAvg_hgroupfees() {
        this.avg_hgroupfees = avg_hgroupfees;
    }
}
