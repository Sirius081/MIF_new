package Action;

import Dao.RegionDao;
import Entity.Hospital;
import Entity.Region;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by sirius on 17-4-6.
 */
public class RegionAction extends ActionSupport implements ServletRequestAware {
    private RegionDao dao=new RegionDao();
    //get
    private List<Region> regions;
    private List<Hospital> hospitals;
    //set
    private HttpServletRequest request;

    public String init(){
        regions=dao.getRegions(new Region());
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
        String r_name=request.getParameter("r_name");
        int year=-1;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        Region condition=new Region();
        condition.setIdentity(identity);
        condition.setYear(year);
        condition.setName(r_name);


        regions=dao.getRegions(condition);
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

        String r_name=request.getParameter("r_name");
        int year=-1;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        Region condition=new Region();
        condition.setIdentity(identity);
        condition.setYear(year);
        condition.setName(r_name);

        hospitals=dao.getRegionDetails(condition);
        return SUCCESS;
    }
    public void setServletRequest(HttpServletRequest httpServletRequest) {
        this.request=httpServletRequest;
    }

    public List<Hospital> getHospitals() {
        return hospitals;
    }

    public List<Region> getRegions() {
        return regions;
    }
}