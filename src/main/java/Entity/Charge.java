package Entity;

import Util.Dictionary;

/**
 * Created by song on 2017/1/15.
 */
public class Charge {
    private int  year;
    private double avgWage ;
    private int working;
    private int retired;

    public Charge(int  year, double avgWage, int working,int retired) {
        this.year = year;
        this.avgWage = avgWage;
        this.working =working;
        this.retired =retired;
    }


    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public double getAvgWage() {
        return avgWage;
    }

    public void setAvgWage(double avgWage) {
        this.avgWage = avgWage;
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
}
