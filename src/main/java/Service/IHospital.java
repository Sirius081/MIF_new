package Service;

import Entity.DiseaseHospital;
import Entity.Hospital;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sirius on 17-4-10.
 */
public interface IHospital {
    public List<Hospital> getHospitals(Hospital condition);
    public List<Hospital> getTop10(@Param("orderBy")String orderBy, @Param("year") int year, @Param("identity") int identity);
    public List<DiseaseHospital> getDetails(Hospital condition);
}
