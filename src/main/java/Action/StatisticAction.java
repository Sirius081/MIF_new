package Action;

import Dao.StatisticDao;
import Entity.AgeDistribution;
import Entity.TotalTrend;
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
        tts=dao.getTotalTrend();
        return SUCCESS;
    }

    /**
     *
     * @return ads
     */
    public String ageDistribution(){
        ads=dao.getAgeDistribution();
        return SUCCESS;
    }


    private StatisticDao dao=new StatisticDao();
    //get
    private List<TotalTrend> tts;//totalTrends
    private List<AgeDistribution> ads;//age distributions
    //set
    private HttpServletRequest request;
    public List<TotalTrend> getTts() {
        return tts;
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
