package Action;

import Dao.MybatisUtils;
import Entity.DiseaseHospital;
import Entity.Hospital;
import Entity.HospitalAD;
import Service.IHospital;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.ibatis.session.SqlSession;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * Created by sirius on 17-1-10.
 */
public class HospitalAction extends ActionSupport implements ServletRequestAware {
    SqlSession s= MybatisUtils.getSqlSession();
    private IHospital dao=s.getMapper(IHospital.class);
    //get
    private List<Hospital> hospitals;
    private List<DiseaseHospital> diseaseHospitals;
    private List<HospitalAD> hospitalADs;
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
        int identity=0;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }
        String h_name=request.getParameter("h_name");
        int year=0;
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
        for (Hospital h : hospitals){
            h.setAvg_hfees();
            h.setAvg_hgroupfees();
            h.setAvg_mfees();
            h.setAvg_mgroupfees();
        }
        return SUCCESS;
    }

    /**
     * orderBy:
     * @return
     */
    public String top10(){
        String orderBy=request.getParameter("orderBy");
        int identity=0;
        if(request.getParameter("identity")!=null){
            identity=Integer.parseInt(request.getParameter("identity"));
        }
        int year=Integer.parseInt(request.getParameter("year"));

        Hospital condition=new Hospital();
        condition.setIdentity(identity);
        condition.setYear(year);
        hospitals=dao.getTop10(orderBy, year,identity);
        for (Hospital h : hospitals){
            h.setAvg_hfees();
            h.setAvg_hgroupfees();
            h.setAvg_mfees();
            h.setAvg_mgroupfees();
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

        String h_name=request.getParameter("h_name");
        int year=0;
        if(request.getParameter("year")!=null){
            year=Integer.parseInt(request.getParameter("year"));
        }
        Hospital condition=new Hospital();
        condition.setIdentity(identity);
        condition.setYear(year);
        condition.setH_name(h_name);

        diseaseHospitals=dao.getDetails(condition);
        for(DiseaseHospital dh:diseaseHospitals){
            dh.setAvg_hgroupfees();
        }
        return SUCCESS;
    }

    /**
     * detect avgGroupFees of hospitals
     * @return
     */
    public String detectAvgGroup(){
        String h_name=request.getParameter("h_name");
        hospitalADs=dao.detectAvgGroup(h_name);
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

    public List<HospitalAD> getHospitalADs() {
        return hospitalADs;
    }

    public static void main(String[] args) {
        HospitalAction h=new HospitalAction();
        List<HospitalAD>hd=h.dao.detectAvgGroup("018FF7841008EAE36262A5C4B78AC483");
        System.out.println();
    }
}
