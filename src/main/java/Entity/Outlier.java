package Entity;

/**
 * Created by sirius on 17-7-4.
 */
public class Outlier {
    private String hospitalization_num;
    private float fee_a;
    private float fee_b;
    private float fee_c;
    private float drug_fee_a;
    private float drug_fee_b;
    private float drug_fee_c;
    private float score;

    public float getScore() {
        return score;
    }

    public void setScore(float score) {
        this.score = score;
    }

    public String getHospitalization_num() {
        return hospitalization_num;
    }

    public void setHospitalization_num(String hospitalization_num) {
        this.hospitalization_num = hospitalization_num;
    }

    public float getFee_a() {
        return fee_a;
    }

    public void setFee_a(float fee_a) {
        this.fee_a = fee_a;
    }

    public float getFee_b() {
        return fee_b;
    }

    public void setFee_b(float fee_b) {
        this.fee_b = fee_b;
    }

    public float getFee_c() {
        return fee_c;
    }

    public void setFee_c(float fee_c) {
        this.fee_c = fee_c;
    }

    public float getDrug_fee_a() {
        return drug_fee_a;
    }

    public void setDrug_fee_a(float drug_fee_a) {
        this.drug_fee_a = drug_fee_a;
    }

    public float getDrug_fee_b() {
        return drug_fee_b;
    }

    public void setDrug_fee_b(float drug_fee_b) {
        this.drug_fee_b = drug_fee_b;
    }

    public float getDrug_fee_c() {
        return drug_fee_c;
    }

    public void setDrug_fee_c(float drug_fee_c) {
        this.drug_fee_c = drug_fee_c;
    }
}
