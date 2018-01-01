package Entity;

/**
 * Created by sirius on 17-12-10.
 */
public class HospitalizationDetail {
    private String hospitalization_num; //住院编号
    private String catalog_id; //目录编号
    private String treatment_name; //药品，诊疗名称
    private double price; //价格
    private int cnt; //数量
    private String type; //类型
    private double limit_price; //限价
    private double total_fee; //总价
    private int percentile; //数量百分位
    private double percentage; //有多少人用了

    public double getPercentage() {
        return percentage;
    }

    public void setPercentage(double percentage) {
        this.percentage = percentage;
    }

    public int getPercentile() {
        return percentile;
    }

    public void setPercentile(int percentile) {
        this.percentile = percentile;
    }
    public String getHospitalization_num() {
        return hospitalization_num;
    }

    public void setHospitalization_num(String hospitalization_num) {
        this.hospitalization_num = hospitalization_num;
    }

    public String getCatalog_id() {
        return catalog_id;
    }

    public void setCatalog_id(String catalog_id) {
        this.catalog_id = catalog_id;
    }

    public String getTreatment_name() {
        return treatment_name;
    }

    public void setTreatment_name(String treatment_name) {
        this.treatment_name = treatment_name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getCnt() {
        return cnt;
    }

    public void setCnt(int cnt) {
        this.cnt = cnt;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getLimit_price() {
        return limit_price;
    }

    public void setLimit_price(double limit_price) {
        this.limit_price = limit_price;
    }

    public double getTotal_fee() {
        return total_fee;
    }

    public void setTotal_fee(double total_fee) {
        this.total_fee = total_fee;
    }
}
