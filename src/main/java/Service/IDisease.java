package Service;

import Entity.Disease;
import Entity.DiseaseHospital;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sirius on 17-4-11.
 */
public interface IDisease {
    public List<Disease> getDisease(Disease d);
    public List<Disease> getDiseaseTrend(Disease d);
    public List<Disease> getTop10(@Param("orderBy") String orderBy, @Param("year") int year, @Param("identity") int identity);
    public List<DiseaseHospital> getDetails(Disease d);
}
