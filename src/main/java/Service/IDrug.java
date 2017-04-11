package Service;

import Entity.Drug;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sirius on 17-4-10.
 */
public interface IDrug {
    public List<Drug> getDrugs(Drug drug);
    public List<Drug> getTop10(@Param("orderBy") String orderBy, @Param("year") int year);
}
