package Service;

import org.apache.ibatis.annotations.Param;

import java.util.HashMap;
import java.util.List;

/**
 * Created by sirius on 17-4-13.
 */
public interface IDictionary {
    List<HashMap<String,Object>> getModel(@Param("tableName") String tableName);
}
