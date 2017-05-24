package Action;

import Dao.MybatisUtils;
import Entity.Drug;
import Service.IDrug;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.ibatis.session.SqlSession;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by sirius on 17-1-11.
 */
public class DrugAction extends ActionSupport implements ServletRequestAware {
    private SqlSession s= MybatisUtils.getSqlSession();
    private IDrug dao=s.getMapper(IDrug.class);
    //get
    private List<Drug> drugs;
    //set
    private HttpServletRequest request;

    public String init(){
        drugs=dao.getDrugs(new Drug());
        return SUCCESS;
    }

    /**
     * query diseases, condition:name,year
     * @return
     */
    public String query(){
        String name=request.getParameter("name");
        int year=-1;
        if (request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        Drug drug=new Drug();
        drug.setName(name);
        drug.setYear(year);
        drugs=dao.getDrugs(drug);
        return SUCCESS;
    }
    public String top10(){
        String orderBy="drugfees";
        int year=-1;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        drugs=dao.getTop10(orderBy,year);
        return SUCCESS;
    }
    public List<Drug> getDrugs() {
        return drugs;
    }

    public void setServletRequest(HttpServletRequest httpServletRequest) {
        request=httpServletRequest;
    }
}
