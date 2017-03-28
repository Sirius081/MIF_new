package Entity;

import Util.Dictionary;

/**
 * Created by song on 2017/1/15.
 */
public class Charge {
    private int  year;

    public Charge(int  year, int floor, int ceil,int number,double base) {
        this.year = year;
        this.floor = floor;
        this.ceil =ceil;
        this.number =number;
        this.base =base;
    }
    public void setYear(int year) {
        this.year = year;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public void setCeil(int ceil) {
        this.ceil = ceil;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public void setBase(double base) {
        this.base = base;
    }

    public int getYear() {

        return year;
    }

    public int getFloor() {
        return floor;
    }

    public int getCeil() {
        return ceil;
    }

    public int getNumber() {
        return number;
    }

    public double getBase() {
        return base;
    }

    private int floor ;
    private int ceil;
    private int number;
    private double base;


}
