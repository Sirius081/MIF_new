package Service;

import Entity.HospitalizationDetail;
import Entity.Outlier;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sirius on 17-7-4.
 */
public interface IOutlier {
    List<Outlier> init();
    List<Outlier> query(@Param("hospitalization_num")String hospitalization_num,@Param("hospital_num")String hospital_num);
    List<HospitalizationDetail> getDetail(@Param("hospitalization_num")String hospitalization_num);
}

