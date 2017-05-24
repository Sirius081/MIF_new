package Action;

import Dao.MybatisUtils;
import Entity.Disease;
import Entity.DiseaseHospital;
import Service.IDisease;
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
    private List<DiseaseHospital> diseaseHospitals;
    //set
    private HttpServletRequest request;

    private IDisease dao= MybatisUtils.getSqlSession().getMapper(IDisease.class);
    public String init() {
        diseases=dao.getDisease(new Disease());
        for (Disease d:diseases){
            d.setAvg_hfees();
            d.setAvg_hgroupfees();
        }
        return  SUCCESS;
    }

    /**
     * query diseases by name,year,identity
     * @return
     */
    public String query(){
        String name= request.getParameter("name");
        int year=0;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        int identity=0;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }
        Disease condition=new Disease();
        condition.setIdentity(identity);
        condition.setYear(year);
        condition.setName(name);
        diseases=dao.getDisease(condition);
        for (Disease d:diseases){
            d.setAvg_hfees();
            d.setAvg_hgroupfees();
        }
        return  SUCCESS;
    }
    public String diseaseTrend(){
        String name= request.getParameter("name");
        int year=0;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        int identity=0;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }
        Disease condition=new Disease();
        condition.setIdentity(identity);
        condition.setYear(year);
        condition.setName(name);
        diseases=dao.getDiseaseTrend(condition);
        for (Disease d:diseases){
            d.setAvg_hfees();
            d.setAvg_hgroupfees();
        }
        return  SUCCESS;
    }
    public String top10(){
        String orderBy=request.getParameter("orderBy");
        int year=0;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        int identity=0;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }
        Disease condition=new Disease();
        condition.setIdentity(identity);
        condition.setYear(year);
        diseases=dao.getTop10(orderBy,year,identity);
        for (Disease d:diseases){
            d.setAvg_hfees();
            d.setAvg_hgroupfees();
        }
        return SUCCESS;
    }
    public String details(){
        String name= request.getParameter("d_name");
        int year=0;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        int identity=0;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }
        Disease condition=new Disease();
        condition.setIdentity(identity);
        condition.setYear(year);
        condition.setName(name);
        diseaseHospitals=dao.getDetails(condition);
        for(DiseaseHospital dh:diseaseHospitals){
            dh.setAvg_hgroupfees();
        }
        return SUCCESS;
    }
    public List<Disease> getDiseases() {
        return diseases;
    }

    public List<DiseaseHospital> getDiseaseHospitals() {
        return diseaseHospitals;
    }

    public void setServletRequest(HttpServletRequest httpServletRequest) {
        this.request = httpServletRequest;
    }
}
