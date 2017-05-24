package Service;

import Entity.Forecast;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by sirius on 17-4-13.
 */
public interface IForecast {
    public List<Forecast> getForecast(@Param("model") String model, @Param("time") int year, @Param("variable") int variable);

}
