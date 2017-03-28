package Entity;

/**
 * Created by sirius on 17-1-10.
 */
public class Disease {
    int id;
    String name;
    int year;
    float fees;
    float group;
    int count;

    public Disease(int id, String name, int year, float fees, float group, int count) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.fees = fees;
        this.group = group;
        this.count = count;
    }
    public Disease(){}

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public float getFees() {
        return fees;
    }

    public void setFees(float fees) {
        this.fees = fees;
    }

    public float getGroup() {
        return group;
    }

    public void setGroup(float group) {
        this.group = group;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }
}
