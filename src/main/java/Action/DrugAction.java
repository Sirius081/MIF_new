package Action;

import Dao.DrugDao;
import Entity.Drug;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by sirius on 17-1-11.
 */
public class DrugAction extends ActionSupport implements ServletRequestAware {
    private DrugDao dao=new DrugDao();
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
        int year=0;
        if (request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
<<<<<<< HEAD
=======

>>>>>>> df9c04cbc0372faff294ebe0e59fdb5909d9d5b9
        Drug drug=new Drug(0,year,name,0);
        drugs=dao.getDrugs(drug);
        return SUCCESS;
    }
    public String top10(){
        String orderBy="fees";
        int year=0;
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
