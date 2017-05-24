package Entity;

/**
 * Created by sirius on 17-4-6.
 */
public class Region {
    int year;//年份
    int identity;//职工1 居民2
    String name;//区县代码
    int m_count;//门诊人数
    int h_count;//住院人数
    double h_fees;//住院总费用
    double h_groupfees;//住院统筹费用
    double m_fees;//门诊费用
    double m_groupfees;//门诊统筹费用
    private double avg_hfees;//平均住院费用
    private double avg_hgroupfees;//平均统筹支付费用
    private double avg_mfees;//平均门诊费用
    private double avg_mgroupfees;//平均门诊统筹支付费用
    public Region(int year, int identity, String name, int m_count, int h_count, double h_fees, double h_groupfees, double m_fees, double m_groupfees) {
        this.year = year;
        this.identity = identity;
        this.name = name;
        this.m_count = m_count;
        this.h_count = h_count;
        this.h_fees = h_fees;
        this.h_groupfees = h_groupfees;
        this.m_fees = m_fees;
        this.m_groupfees = m_groupfees;
    }
    public Region(){
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
    public double getAvg_hfees() {
        return avg_hfees;
    }

    public void setAvg_hfees() {
        if(this.h_count!=0){
            this.avg_hfees = this.h_fees/this.h_count;
            this.avg_hfees=(int)(this.avg_hfees*100)/100.0;
        }else{
            this.avg_hfees=0;
        }
    }

    public double getAvg_hgroupfees() {
        return avg_hgroupfees;
    }

    public void setAvg_hgroupfees() {
        if(this.h_count!=0){
            this.avg_hgroupfees = this.h_groupfees/this.h_count;
            this.avg_hgroupfees=(int)(this.avg_hgroupfees*100)/100.0;
        }else{
            this.avg_hgroupfees=0;
        }

    }

    public double getAvg_mfees() {
        return avg_mfees;
    }

    public void setAvg_mfees() {
        if(m_count!=0){
            this.avg_mfees = this.m_fees/this.m_count;
            this.avg_mfees=(int)(this.avg_mfees*100)/100.0;

        }else{
            this.avg_mfees=0;
        }

    }

    public double getAvg_mgroupfees() {
        return avg_mgroupfees;
    }

    public void setAvg_mgroupfees() {
        if(m_count!=0){
            this.avg_mgroupfees = this.m_groupfees/this.m_count;
            this.avg_mgroupfees=(int)(this.avg_mgroupfees*100)/100.0;
        }else{
            this.avg_mgroupfees=0;
        }

    }
}
