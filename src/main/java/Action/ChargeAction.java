package Action;

import Dao.ChargeDao;
import Entity.Charge;
import Entity.Forecast;
import Entity.KeyValue;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by song on 2017/1/15.
 */
public class ChargeAction extends ActionSupport implements ServletRequestAware
{
    static private ChargeDao cDao;
    static{
       cDao=new ChargeDao();
    }
    private HttpServletRequest request;
    //get,返回给前台
    private ArrayList<Double> result;
    private int avgWage;
    private int ceil;
    private int floor;
    private int ratio1;
    private int ratio2;
    //set,前台传参
    private int year;

    public String query(){
        year=Integer.parseInt(request.getParameter("year"));
        avgWage=Integer.parseInt(request.getParameter("avgwage"));
        ceil=Integer.parseInt(request.getParameter("ceil"));
        floor=Integer.parseInt(request.getParameter("floor"));
        ratio2=0;
        if (request.getParameter("ratio2")==""){
            ratio2=ratio1;
            result=cDao.getForecast(year, avgWage, ceil, floor,ratio1,ratio2);
        }
        else{
            ratio1=Integer.parseInt(request.getParameter("ratio1"));
            ratio2=Integer.parseInt(request.getParameter("ratio2"));
            result=cDao.getForecast(year, avgWage, ceil, floor,ratio1,ratio2);
        }
        return SUCCESS;
    }



    public void setYear(int year) {
        this.year = year;
    }

    public void setAvgWage(int avgWage) {
        this.avgWage = avgWage;
    }

    public void setCeil(int ceil) {
        this.ceil = ceil;
    }

    public void setFloor(int floor) {
        this.floor = floor;
    }

    public ArrayList<Double> getResult() {
        return result;
    }

    public void setResult(ArrayList<Double> result) {
        this.result = result;
    }

    public int getYear() {
        return year;
    }

    public int getAvgWage() {
        return avgWage;
    }

    public int getCeil() {
        return ceil;
    }

    public int getFloor() {
        return floor;
    }

    public int getRatio1() {
        return ratio1;
    }

    public void setRatio1(int ratio1) {
        this.ratio1 = ratio1;
    }

    public int getRatio2() {
        return ratio2;
    }

    public void setRatio2(int ratio2) {
        this.ratio2 = ratio2;
    }


    public void setServletRequest(HttpServletRequest httpServletRequest) {
        this.request = httpServletRequest;
    }


}
