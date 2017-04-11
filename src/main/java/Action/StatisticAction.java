package Action;

import Dao.MybatisUtils;
import Dao.StatisticDao;
import Entity.AgeDistribution;
import Entity.FeesDetail;
import Entity.TotalTrend;
import Service.IStatistic;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by sirius on 17-3-30.
 */
public class StatisticAction extends ActionSupport implements ServletRequestAware {

    /**
     *
     * @return tts
     */
    public String totalTrend(){
        int identity=Integer.parseInt(request.getParameter("identity"));
        TotalTrend condition=new TotalTrend(-1,identity,-1,-1,-1,-1,-1,-1);
        tts=dao.getTotalTrend(condition);
        return SUCCESS;
    }

    /**
     *
     * @return ads
     */
    public String ageDistribution(){
        int identity=Integer.parseInt(request.getParameter("identity"));
        AgeDistribution condition=new AgeDistribution(-1,-1,identity,-1,-1,-1,-1,-1);
        ads=dao.getAgeDistribution(condition);
        return SUCCESS;
    }

    public String feesDetail(){
        int identity=Integer.parseInt(request.getParameter("identity"));
        FeesDetail condition=new FeesDetail();
        condition.setIdentity(identity);
        fds=dao.getFeesDetail(condition);
        return SUCCESS;
    }
    private IStatistic dao= MybatisUtils.getSqlSession().getMapper(IStatistic.class);
    //get
    private List<TotalTrend> tts;//totalTrends
    private List<AgeDistribution> ads;//age distributions
    private List<FeesDetail> fds;
    //set
    private HttpServletRequest request;
    public List<TotalTrend> getTts() {
        return tts;
    }

    public List<FeesDetail> getFds() {
        return fds;
    }

    public void setRequest(HttpServletRequest request) {
        this.request = request;
    }

    public List<AgeDistribution> getAds() {
        return ads;
    }

    public void setServletRequest(HttpServletRequest httpServletRequest) {
        this.request=httpServletRequest;
    }
}
