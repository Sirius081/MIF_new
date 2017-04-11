package Service;

import Entity.AgeDistribution;
import Entity.FeesDetail;
import Entity.TotalTrend;

import java.util.List;

/**
 * Created by sirius on 17-4-11.
 */
public interface IStatistic {
    public List<TotalTrend> getTotalTrend(TotalTrend condition);
    public List<FeesDetail> getFeesDetail(FeesDetail condition);
    public List<AgeDistribution> getAgeDistribution(AgeDistribution condition);
}
