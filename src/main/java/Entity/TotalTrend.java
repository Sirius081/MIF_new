package Entity;

/**
 * Created by sirius on 17-3-30.
 */
public class TotalTrend {
    int year;//年份
    int identity;//职工 or 居民
    double income;//收入
    double cost;//支出
    int numbers;//参保人数
    int avgwage;//平均工资
    int working;//在职人数
    int retired;//离退人数
    public TotalTrend(){}
    public TotalTrend(int year, int identity, double income, double cost, int numbers, int avgwage, int working, int retired) {
        this.year = year;
        this.identity = identity;
        this.income = income;
        this.cost = cost;
        this.numbers = numbers;
        this.avgwage = avgwage;
        this.working = working;
        this.retired = retired;
    }

    public int getWorking() {
        return working;
    }

    public void setWorking(int working) {
        this.working = working;
    }

    public int getRetired() {
        return retired;
    }

    public void setRetired(int retired) {
        this.retired = retired;
    }

    public int getIdentity() {
        return identity;
    }

    public void setIdentity(int identity) {
        this.identity = identity;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getIncome() {
        return income;
    }

    public void setIncome(double income) {
        this.income = income;
    }

    public double getCost() {
        return cost;
    }

    public void setCost(double cost) {
        this.cost = cost;
    }

    public int getNumbers() {
        return numbers;
    }

    public void setNumbers(int numbers) {
        this.numbers = numbers;
    }

    public int getAvgwage() {
        return avgwage;
    }

    public void setAvgwage(int avgwage) {
        this.avgwage = avgwage;
    }
}
