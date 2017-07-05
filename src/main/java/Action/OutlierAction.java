package Action;

import Dao.MybatisUtils;
import Entity.Outlier;
import Service.IOutlier;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.ibatis.session.SqlSession;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by sirius on 17-7-4.
 */
public class OutlierAction extends ActionSupport implements ServletRequestAware {
    private SqlSession s= MybatisUtils.getSqlSession();
    private IOutlier dao=s.getMapper(IOutlier.class);
    //get
    private List<Outlier> outliers;
    //set
    private HttpServletRequest request;

    public String init(){
        outliers=dao.init();
        return SUCCESS;
    }

    public List<Outlier> getOutliers() {
        return outliers;
    }

    public void setServletRequest(HttpServletRequest httpServletRequest) {
        request=httpServletRequest;
    }
}
