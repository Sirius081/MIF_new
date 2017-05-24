package Service;

import Entity.Hospital;
import Entity.Region;

import java.util.List;

/**
 * Created by sirius on 17-4-11.
 */
public interface IRegion {
    public List<Region> getRegions(Region condition);
    public List<Hospital> getRegionDetails(Region condition);

}
