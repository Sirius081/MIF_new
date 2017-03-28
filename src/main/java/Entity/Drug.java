package Entity;

/**
 * Created by sirius on 17-1-11.
 */
public class Drug {
    int id;
    int year;
    String name;
    float fees;

    public Drug(int id, int year, String name, float fees) {
        this.id = id;
        this.year = year;
        this.name = name;
        this.fees = fees;
    }
    public Drug(){}
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getFees() {
        return fees;
    }

    public void setFees(float fees) {
        this.fees = fees;
    }
}
