package Entity;

/**
 * Created by sirius on 18-1-10.
 */
public class HospitalOutlierDetail {
    private String h_name;
    private String d_name;
    private String fake_name;
    private double avg_disease_fee;
    private int cnt;
    private double pp_beyond;

    public HospitalOutlierDetail(String h_name, String d_name, String fake_name, double avg_disease_fee, int cnt, double pp_beyond) {
        this.h_name = h_name;
        this.d_name = d_name;
        this.fake_name = fake_name;
        this.avg_disease_fee = avg_disease_fee;
        this.cnt = cnt;
        this.pp_beyond = pp_beyond;
    }

    public String getFake_name() {
        return fake_name;
    }

    public void setFake_name(String fake_name) {
        this.fake_name = fake_name;
    }

    public String getH_name() {
        return h_name;
    }

    public void setH_name(String h_name) {
        this.h_name = h_name;
    }

    public String getD_name() {
        return d_name;
    }

    public void setD_name(String d_name) {
        this.d_name = d_name;
    }

    public double getAvg_disease_fee() {
        return avg_disease_fee;
    }

    public void setAvg_disease_fee(double avg_disease_fee) {
        this.avg_disease_fee = avg_disease_fee;
    }

    public int getCnt() {
        return cnt;
    }

    public void setCnt(int cnt) {
        this.cnt = cnt;
    }

    public double getPp_beyond() {
        return pp_beyond;
    }

    public void setPp_beyond(double pp_beyond) {
        this.pp_beyond = pp_beyond;
    }
}
