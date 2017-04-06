package Action;

import Dao.HospitalDao;
import Entity.DiseaseHospital;
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
    private List<DiseaseHospital> diseaseHospitals;
    //set
    private HttpServletRequest request;

    public String init(){
        hospitals=dao.getHospitals(new Hospital());
        return SUCCESS;
    }

    /**
     * query hospitals,condition:identity,year,grade,h_name
     * @return
     */
    public String query(){
        //condition
        int identity=-1;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }
        String h_name=request.getParameter("h_name");
        int year=-1;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        String grade=request.getParameter("grade");
        Hospital condition=new Hospital();
        condition.setIdentity(identity);
        condition.setYear(year);
        condition.setGrade(grade);
        condition.setH_name(h_name);


        hospitals=dao.getHospitals(condition);
        return SUCCESS;
    }

    /**
     * orderBy:
     * @return
     */
    public String top10(){
        String orderBy=request.getParameter("orderBy");
        int identity=-1;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }
        int year=Integer.parseInt(request.getParameter("year"));

        Hospital condition=new Hospital();
        condition.setIdentity(identity);
        condition.setYear(year);
        hospitals=dao.getTop10(orderBy, condition);
        return SUCCESS;
    }

    /**
     *
     * @return deseaeHospitals
     */
    public String details(){
        //condition: identity,h_name,year
        int identity=-1;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }

        String h_name=request.getParameter("h_name");
        int year=-1;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        Hospital condition=new Hospital();
        condition.setIdentity(identity);
        condition.setYear(year);
        condition.setH_name(h_name);

        diseaseHospitals=dao.getDetails(condition);
        return SUCCESS;
    }
    public void setServletRequest(HttpServletRequest httpServletRequest) {
        this.request=httpServletRequest;
    }

    public List<Hospital> getHospitals() {
        return hospitals;
    }

    public List<DiseaseHospital> getDiseaseHospitals() {
        return diseaseHospitals;
    }
}
