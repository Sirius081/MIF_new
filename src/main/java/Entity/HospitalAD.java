package Entity;

/**
 * Created by sirius on 17-4-16.
 */
public class HospitalAD {
    String h_name;
    int year;
    double actual;
    double predict;
    double error_rate;

    public String getH_name() {
        return h_name;
    }

    public void setH_name(String h_name) {
        this.h_name = h_name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getActual() {
        return actual;
    }

    public void setActual(double actual) {
        this.actual = actual;
    }

    public double getPredict() {
        return predict;
    }

    public void setPredict(double predict) {
        this.predict = predict;
    }

    public double getError_rate() {
        return error_rate;
    }

    public void setError_rate(double error_rate) {
        this.error_rate = error_rate;
    }
}
