package Action;

import Dao.HospitalDao;
import Entity.Hospital;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by sirius on 17-1-10.
 */
public class HospitalAction extends ActionSupport implements ServletRequestAware {
    private HospitalDao dao=new HospitalDao();
    //get
    private List<Hospital> hospitals;
    //set
    private HttpServletRequest request;

    public String init(){
        hospitals=dao.getHospitals(new Hospital());
        return SUCCESS;
    }

    /**
     * query hospitals,condition:num,year,level
     * @return
     */
    public String query(){
        String num=request.getParameter("num");
        int year=0;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        String level=request.getParameter("level");
        hospitals=dao.getHospitals(new Hospital(0,num,year,0,0,0,0,level));
        return SUCCESS;
    }

    /**
     * orderBy:
     * @return
     */
    public String top10(){
        String orderBy=request.getParameter("orderBy");
        int year=Integer.parseInt(request.getParameter("year"));
<<<<<<< HEAD
        hospitals=dao.getTop10(orderBy, year);
=======
        dao.getTop10(orderBy,year);
>>>>>>> df9c04cbc0372faff294ebe0e59fdb5909d9d5b9
        return SUCCESS;
    }

    public void setServletRequest(HttpServletRequest httpServletRequest) {
        this.request=httpServletRequest;
    }

    public List<Hospital> getHospitals() {
        return hospitals;
    }
}
