package Action;

import Dao.MybatisUtils;
import Entity.DiseaseHospital;
import Entity.Hospital;
import Entity.HospitalAD;
import Entity.KeyValue;
import Service.IHospital;
import com.opensymphony.xwork2.ActionSupport;
import org.apache.ibatis.session.SqlSession;
import org.apache.struts2.interceptor.ServletRequestAware;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
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
    private List<KeyValue> h_fee;
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
        double max_avg=0;
        double min_avg=Double.MAX_VALUE;
        for (Hospital h : hospitals){
            h.setAvg_hfees();
            h.setAvg_hgroupfees();
            h.setAvg_mfees();
            h.setAvg_mgroupfees();
            if(h.getAvg_hgroupfees()>max_avg){
                max_avg=h.getAvg_hgroupfees();
            }
            if(h.getAvg_hgroupfees()<min_avg){
                min_avg=h.getAvg_hgroupfees();
            }
        }
        h_fee=new ArrayList<KeyValue>();
        int interval=20;
        for (int i=0;i<interval;i++){
            double start=min_avg+(max_avg-min_avg)/(interval+1)*i;
            h_fee.add(new KeyValue((int)start+1,0+""));
        }
        h_fee.add(new KeyValue((int)max_avg+1,0+""));
        for (Hospital h : hospitals){
            for (int i=1;i<h_fee.size();i++){
                if(h.getAvg_hgroupfees()>9000){
                    System.out.println();
                }
                if(h_fee.get(i).getKey()>h.getAvg_hgroupfees()
                        &&h_fee.get(i-1).getKey()<h.getAvg_hgroupfees()){
                    h_fee.get(i-1).setValue(Integer.parseInt(h_fee.get(i-1).getValue())+1+"");

                    break;
                }
            }
        }
        h_fee.remove(interval);
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
    public String avgFeeDistrbution(){

        return  SUCCESS;
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

    public List<KeyValue> getH_fee() {
        return h_fee;
    }

    public List<HospitalAD> getHospitalADs() {
        return hospitalADs;
    }

    public static void main(String[] args) {
        HospitalAction h=new HospitalAction();
        h.avgFeeDistrbution();
        System.out.println();
    }
}
