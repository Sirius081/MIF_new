package Action;

import Dao.DiseaseDao;
import Entity.Disease;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by sirius on 17-1-10.
 */
public class DiseaseAction extends ActionSupport implements ServletRequestAware {
    //get
    private List<Disease> diseases;
    //set
    private HttpServletRequest request;

    private DiseaseDao dao=new DiseaseDao();
    public String init() {
        diseases=dao.getDisease(new Disease());
        return  SUCCESS;
    }

    /**
     * query diseases by name,year
     * @return
     */
    public String query(){
        String name= request.getParameter("name");
        int year=0;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        Disease disease=new Disease(0,name,year,0,0,0);
        diseases=dao.getDisease(disease);
        return  SUCCESS;
    }
    public String top10(){
        String orderBy=request.getParameter("orderBy");
        int year=Integer.parseInt(request.getParameter("year"));
        diseases=dao.getTop10(orderBy,year);
        return SUCCESS;
    }

    public List<Disease> getDiseases() {
        return diseases;
    }

    public void setServletRequest(HttpServletRequest httpServletRequest) {
        this.request = httpServletRequest;
    }
}
