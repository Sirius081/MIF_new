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
    private double ceil;
    private double floor;

    public double getFloor() {
        return floor;
    }

    public void setFloor(double floor) {
        this.floor = floor;
    }

    public double getCeil() {
        return ceil;
    }

    public void setCeil(double ceil) {
        this.ceil = ceil;
    }

    private int  ratio;

    public int getRatio() {
        return ratio;
    }

    public void setRatio(int ratio) {
        this.ratio = ratio;
    }

    public String query(){
        ceil=Double.valueOf(request.getParameter("ceil"));
        floor=Double.valueOf(request.getParameter("floor"));
        ratio=Integer.parseInt(request.getParameter("ratio"));
        result=cDao.getForecast(ceil, floor,ratio);
        return SUCCESS;
    }

    public String queryGroup()
    {
        ceil=Double.valueOf(request.getParameter("ceil"));
        floor=Double.valueOf(request.getParameter("floor"));
        ratio=Integer.parseInt(request.getParameter("ratio"));
        result=cDao.getGroup(ceil, floor,ratio);
        return SUCCESS;
    }

    public ArrayList<Double> getResult() {
        return result;
    }

    public void setResult(ArrayList<Double> result) {
        this.result = result;
    }
    public void setServletRequest(HttpServletRequest httpServletRequest) {
        this.request = httpServletRequest;
    }
}
