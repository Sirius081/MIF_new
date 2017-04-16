package Action;

import Dao.MybatisUtils;
import Entity.Hospital;
import Entity.Region;
import Service.IRegion;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by sirius on 17-4-6.
 */
public class RegionAction extends ActionSupport implements ServletRequestAware {
    private IRegion dao= MybatisUtils.getSqlSession().getMapper(IRegion.class);
    //get
    private List<Region> regions;
    private List<Hospital> hospitals;
    //set
    private HttpServletRequest request;

    public String init(){
        regions=dao.getRegions(new Region());
        for (Region r:regions){
            r.setAvg_hfees();
            r.setAvg_hgroupfees();
            r.setAvg_mfees();
            r.setAvg_mgroupfees();
        }
        return SUCCESS;
    }

    /**
     * query hospitals,condition:identity,year,grade,h_name
     * @return
     */
    public String query(){
        //condition
        int identity=0;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }
        String r_name=request.getParameter("r_name");
        int year=0;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        Region condition=new Region();
        condition.setIdentity(identity);
        condition.setYear(year);
        condition.setName(r_name);


        regions=dao.getRegions(condition);
        for (Region r:regions){
            r.setAvg_hfees();
            r.setAvg_hgroupfees();
            r.setAvg_mfees();
            r.setAvg_mgroupfees();
        }
        return SUCCESS;
    }


    /**
     *
     * @return deseaeHospitals
     */
    public String details(){
        //condition: identity,h_name,year
        int identity=0;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }

        String r_name=request.getParameter("r_name");
        int year=0;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        Region condition=new Region();
        condition.setIdentity(identity);
        condition.setYear(year);
        condition.setName(r_name);

        hospitals=dao.getRegionDetails(condition);
        for (Hospital h : hospitals){
            h.setAvg_hfees();
            h.setAvg_hgroupfees();
            h.setAvg_mfees();
            h.setAvg_mgroupfees();
        }
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