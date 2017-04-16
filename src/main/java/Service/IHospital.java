package Service;

import Entity.DiseaseHospital;
import Entity.Hospital;
import Entity.HospitalAD;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sirius on 17-4-10.
 */
public interface IHospital {
    List<Hospital> getHospitals(Hospital condition);
    List<Hospital> getTop10(@Param("orderBy")String orderBy, @Param("year") int year, @Param("identity") int identity);
    List<DiseaseHospital> getDetails(Hospital condition);
    List<HospitalAD> detectAvgGroup(@Param("h_name") String h_name);
}
