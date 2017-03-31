package Entity;

/**
 * Created by sirius on 17-3-30.
 */
public class TotalTrend {
    int year;//年份
    double income;//收入
    double cost;//支出
    int numbers;//参保人数
    int avgwage;//平均工资

    public TotalTrend(int year, double income, double cost, int numbers, int avgwage) {
        this.year = year;
        this.income = income;
        this.cost = cost;
        this.numbers = numbers;
        this.avgwage = avgwage;
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
