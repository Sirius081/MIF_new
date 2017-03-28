package Entity;

/**
 * Created by sirius on 16-8-1.
 */
public class YLBX {
    private String time;
    private String wage;
    private String base_low;
    private String base_high;
    private String cmp_worker;
    private String cmp_retire;
    private String single_worker;
    private String single_retire;

    public YLBX(String time, String wage, String base_low, String base_high, String cmp_worker, String cmp_retire, String single_worker, String single_retire, String income, String income_onetime, String distribute_single, String distribute_group, String menzhen_single, String menzhen_group, String hospital_group) {
        this.time = time;
        this.wage = wage;
        this.base_low = base_low;
        this.base_high = base_high;
        this.cmp_worker = cmp_worker;
        this.cmp_retire = cmp_retire;
        this.single_worker = single_worker;
        this.single_retire = single_retire;
        this.income = income;
        this.income_onetime = income_onetime;
        this.distribute_single = distribute_single;
        this.distribute_group = distribute_group;
        this.menzhen_single = menzhen_single;
        this.menzhen_group = menzhen_group;
        this.hospital_group = hospital_group;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public String getWage() {
        return wage;
    }

    public void setWage(String wage) {
        this.wage = wage;
    }

    public String getBase_low() {
        return base_low;
    }

    public void setBase_low(String base_low) {
        this.base_low = base_low;
    }

    public String getBase_high() {
        return base_high;
    }

    public void setBase_high(String base_high) {
        this.base_high = base_high;
    }

    public String getCmp_worker() {
        return cmp_worker;
    }

    public void setCmp_worker(String cmp_worker) {
        this.cmp_worker = cmp_worker;
    }

    public String getCmp_retire() {
        return cmp_retire;
    }

    public void setCmp_retire(String cmp_retire) {
        this.cmp_retire = cmp_retire;
    }

    public String getSingle_worker() {
        return single_worker;
    }

    public void setSingle_worker(String single_worker) {
        this.single_worker = single_worker;
    }

    public String getSingle_retire() {
        return single_retire;
    }

    public void setSingle_retire(String single_retire) {
        this.single_retire = single_retire;
    }

    public String getIncome() {
        return income;
    }

    public void setIncome(String income) {
        this.income = income;
    }

    public String getIncome_onetime() {
        return income_onetime;
    }

    public void setIncome_onetime(String income_onetime) {
        this.income_onetime = income_onetime;
    }

    public String getDistribute_single() {
        return distribute_single;
    }

    public void setDistribute_single(String distribute_single) {
        this.distribute_single = distribute_single;
    }

    public String getDistribute_group() {
        return distribute_group;
    }

    public void setDistribute_group(String distribute_group) {
        this.distribute_group = distribute_group;
    }

    public String getMenzhen_single() {
        return menzhen_single;
    }

    public void setMenzhen_single(String menzhen_single) {
        this.menzhen_single = menzhen_single;
    }

    public String getMenzhen_group() {
        return menzhen_group;
    }

    public void setMenzhen_group(String menzhen_group) {
        this.menzhen_group = menzhen_group;
    }

    public String getHospital_group() {
        return hospital_group;
    }

    public void setHospital_group(String hospital_group) {
        this.hospital_group = hospital_group;
    }

    private String income;
    private String income_onetime;
    private String distribute_single;
    private String distribute_group;
    private String menzhen_single;
    private String menzhen_group;
    private String hospital_group;

}
