import ClaritySection from "../components/Analytics/ClaritySection";
import ComplianceSection from "../components/Analytics/ComplianceSection";
import TimesheetSection from "../components/Analytics/TimesheetSection";
import RetentionAnalyticsSection from "../components/Analytics/RetentionAnalyticsSection";
import MarginAnalyticsSection from "../components/Analytics/rginAnalyticsSection";
import PayrollCTASection from "../components/Analytics/PayrollCTASection";
import DrillIntoDetail from "../components/Analytics/DrillIntoDetail";
import AnalyticsSection from "../components/Analytics/AnalyticsSection";

const Analytics = () => {
  return (
      <main className="relative">
       <AnalyticsSection/>

        <DrillIntoDetail/>

        <ClaritySection />

        <ComplianceSection />

        <TimesheetSection />

        <RetentionAnalyticsSection/>

        <MarginAnalyticsSection/>

        <PayrollCTASection/>
      </main>
  );
};

export default Analytics;
