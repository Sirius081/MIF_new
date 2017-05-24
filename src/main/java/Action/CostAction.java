package Action;

import Dao.CostDao;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

/**
 * Created by song on 2017/1/16.
 */
public class CostAction extends ActionSupport implements ServletRequestAware
{
    static private CostDao cDao;
    static{
        cDao=new CostDao();
    }
    private HttpServletRequest request;
    //get,返回给前台
    private ArrayList<Double> result=new ArrayList<Double>();
    private double cost;

    private int line10;
    private int ratio10;
    private int line11;
    private int ratio11;
    private int line20;
    private int ratio20;
    private int line21;
    private int ratio21;
    private int line30;
    private int ratio30;
    private int line31;
    private int ratio31;
    private int line40;
    private int ratio40;
    private int line41;
    private int ratio41;

    public String query(){
        line10=Integer.parseInt(request.getParameter("line10"));
        ratio10=Integer.parseInt(request.getParameter("ratio10"));
        line11=Integer.parseInt(request.getParameter("line11"));
        ratio11=Integer.parseInt(request.getParameter("ratio11"));
        line20=Integer.parseInt(request.getParameter("line20"));
        ratio20=Integer.parseInt(request.getParameter("ratio20"));
        line21=Integer.parseInt(request.getParameter("line21"));
        ratio21=Integer.parseInt(request.getParameter("ratio21"));
        line30=Integer.parseInt(request.getParameter("line30"));
        ratio30=Integer.parseInt(request.getParameter("ratio30"));
        line31=Integer.parseInt(request.getParameter("line31"));
        ratio31=Integer.parseInt(request.getParameter("ratio31"));
        line40=Integer.parseInt(request.getParameter("line40"));
        ratio40=Integer.parseInt(request.getParameter("ratio40"));
        line41=Integer.parseInt(request.getParameter("line41"));
        ratio41=Integer.parseInt(request.getParameter("ratio41"));
        result=cDao.getPastcost(line10, ratio10, line11, ratio11, line20, ratio20, line21, ratio21, line30, ratio30, line31, ratio31, line40, ratio40, line41, ratio41);
        return SUCCESS;
    }
    public String queryGroup(){
        line10=Integer.parseInt(request.getParameter("line10"));
        ratio10=Integer.parseInt(request.getParameter("ratio10"));
        line11=Integer.parseInt(request.getParameter("line11"));
        ratio11=Integer.parseInt(request.getParameter("ratio11"));
        line20=Integer.parseInt(request.getParameter("line20"));
        ratio20=Integer.parseInt(request.getParameter("ratio20"));
        line21=Integer.parseInt(request.getParameter("line21"));
        ratio21=Integer.parseInt(request.getParameter("ratio21"));
        line30=Integer.parseInt(request.getParameter("line30"));
        ratio30=Integer.parseInt(request.getParameter("ratio30"));
        line31=Integer.parseInt(request.getParameter("line31"));
        ratio31=Integer.parseInt(request.getParameter("ratio31"));
        line40=Integer.parseInt(request.getParameter("line40"));
        ratio40=Integer.parseInt(request.getParameter("ratio40"));
        line41=Integer.parseInt(request.getParameter("line41"));
        ratio41=Integer.parseInt(request.getParameter("ratio41"));
        result=cDao.getGroup(line10, ratio10, line11, ratio11, line20, ratio20, line21, ratio21, line30, ratio30, line31, ratio31, line40, ratio40, line41, ratio41);
        return SUCCESS;
    }

    public void setLine10(int line10) {
        this.line10 = line10;
    }

    public void setRatio10(int ratio10) {
        this.ratio10 = ratio10;
    }

    public void setLine11(int line11) {
        this.line11 = line11;
    }

    public void setRatio11(int ratio11) {
        this.ratio11 = ratio11;
    }

    public void setLine20(int line20) {
        this.line20 = line20;
    }

    public void setRatio20(int ratio20) {
        this.ratio20 = ratio20;
    }

    public void setLine21(int line21) {
        this.line21 = line21;
    }

    public void setRatio21(int ratio21) {
        this.ratio21 = ratio21;
    }

    public void setLine30(int line30) {
        this.line30 = line30;
    }

    public void setRatio30(int ratio30) {
        this.ratio30 = ratio30;
    }

    public void setLine31(int line31) {
        this.line31 = line31;
    }

    public void setRatio31(int ratio31) {
        this.ratio31 = ratio31;
    }

    public void setLine40(int line40) {
        this.line40 = line40;
    }

    public void setRatio40(int ratio40) {
        this.ratio40 = ratio40;
    }

    public void setLine41(int line41) {
        this.line41 = line41;
    }

    public void setRatio41(int ratio41) {
        this.ratio41 = ratio41;

    }

    public int getLine10() {
        return line10;
    }

    public int getRatio10() {
        return ratio10;
    }

    public int getLine11() {
        return line11;
    }

    public int getRatio11() {
        return ratio11;
    }

    public int getLine20() {
        return line20;
    }

    public int getRatio20() {
        return ratio20;
    }

    public int getLine21() {
        return line21;
    }

    public int getRatio21() {
        return ratio21;
    }

    public int getLine30() {
        return line30;
    }

    public int getRatio30() {
        return ratio30;
    }

    public int getLine31() {
        return line31;
    }

    public int getRatio31() {
        return ratio31;
    }

    public int getLine40() {
        return line40;
    }

    public int getRatio40() {
        return ratio40;
    }

    public int getLine41() {
        return line41;
    }

    public int getRatio41() {
        return ratio41;
    }

    public void setServletRequest(HttpServletRequest httpServletRequest) {
        this.request = httpServletRequest;
    }
    public double getCost() {
        return cost;
    }
    public void setCost(double cost) {
        this.cost = cost;
    }
    public ArrayList<Double> getResult() {
        return result;
    }

    public void setResult(ArrayList<Double> result) {
        this.result = result;
    }
}
