// ========== EXECUTIVE ==========
export const executiveKPIs = [
  { label: "Total Revenue", value: "KES 16.8M", change: "+35%", up: true },
  { label: "Total Bookings", value: "4,280", change: "+14%", up: true },
  { label: "Active Users", value: "8,950", change: "+11%", up: true },
  { label: "CAC Estimate", value: "KES 1,120", change: "-10%", up: true },
  { label: "Retention Rate", value: "76%", change: "+4%", up: true },
  { label: "NPS Proxy", value: "65", change: "+8", up: true },
];

export const revenueBookingsTrend = [
  { month: "Sep", revenue: 6800, bookings: 420 },
  { month: "Oct", revenue: 7400, bookings: 490 },
  { month: "Nov", revenue: 8200, bookings: 530 },
  { month: "Dec", revenue: 9100, bookings: 580 },
  { month: "Jan", revenue: 12400, bookings: 720 },
  { month: "Feb", revenue: 16800, bookings: 860 },
];

export const opportunities = [
  { title: "Mombasa caregiver shortage vs high demand", impact: "High", action: "Increase caregiver recruitment in coastal region — supply ratio at 0.6x" },
  { title: "Elderly care demand spiking +22%", impact: "High", action: "Launch specialized elderly care training and certification program" },
  { title: "KYC verification backlog at 3 days avg", impact: "High", action: "Streamline KYC review process to reduce onboarding time" },
  { title: "Weekend booking gap", impact: "Medium", action: "Introduce weekend incentive pricing for caregivers" },
];

export const productPerformance = [
  { product: "Elderly Care", revenue: "KES 5.8M", bookings: 1540, growth: "+28%" },
  { product: "Post-Surgery", revenue: "KES 4.2M", bookings: 980, growth: "+18%" },
  { product: "Child Care", revenue: "KES 3.5M", bookings: 920, growth: "+10%" },
  { product: "Disability Support", revenue: "KES 2.1M", bookings: 530, growth: "+14%" },
  { product: "Palliative Care", revenue: "KES 1.2M", bookings: 310, growth: "+7%" },
];

// ========== SALES ==========
export const salesKPIs = [
  { label: "Daily Sales", value: "KES 560K", change: "+15%", up: true },
  { label: "Conversion Rate", value: "7.2%", change: "+0.6%", up: true },
  { label: "Avg Order Value", value: "KES 3,920", change: "+9%", up: true },
  { label: "Refund Rate", value: "1.8%", change: "-0.4%", up: true },
];

export const salesFunnel = [
  { stage: "Visits", value: 52000 },
  { stage: "Signups", value: 9460 },
  { stage: "Bookings", value: 4280 },
  { stage: "Paid", value: 3960 },
  { stage: "Completed", value: 3680 },
];

export const productRevenue = [
  { name: "Elderly Care", revenue: 5800 },
  { name: "Post-Surgery", revenue: 4200 },
  { name: "Child Care", revenue: 3500 },
  { name: "Disability", revenue: 2100 },
  { name: "Palliative", revenue: 1200 },
];

export const revenueDrivers = {
  channels: [
    { name: "Organic Search", value: "38%" },
    { name: "Referrals", value: "28%" },
    { name: "Social Media", value: "18%" },
    { name: "Direct", value: "16%" },
  ],
  regions: [
    { name: "Nairobi", value: "45%" },
    { name: "Mombasa", value: "18%" },
    { name: "Kisumu", value: "12%" },
    { name: "Eldoret", value: "10%" },
  ],
  services: [
    { name: "Live-in Care", value: "35%" },
    { name: "Hourly Visit", value: "30%" },
    { name: "Overnight", value: "20%" },
    { name: "Emergency", value: "15%" },
  ],
};

// ========== SUPPORT ==========
export const supportKPIs = [
  { label: "Ticket Volume", value: "1,380", change: "+6%", up: false },
  { label: "First Response", value: "14 min", change: "-4min", up: true },
  { label: "Resolution Time", value: "2.1 hrs", change: "-0.8hr", up: true },
  { label: "CSAT Score", value: "4.7/5", change: "+0.3", up: true },
  { label: "Repeat Contact", value: "7%", change: "-1.5%", up: true },
];

export const ticketsTrend = [
  { week: "W1", billing: 45, service: 62, technical: 28, other: 15 },
  { week: "W2", billing: 52, service: 58, technical: 35, other: 12 },
  { week: "W3", billing: 38, service: 70, technical: 22, other: 18 },
  { week: "W4", billing: 48, service: 65, technical: 30, other: 14 },
];

export const recurringIssues = [
  { issue: "Late caregiver arrival", severity: "High", count: 142, trend: "↑" },
  { issue: "Payment processing delay", severity: "Medium", count: 87, trend: "→" },
  { issue: "App login failures", severity: "Medium", count: 64, trend: "↓" },
  { issue: "Booking cancellation disputes", severity: "High", count: 53, trend: "↑" },
  { issue: "Profile update issues", severity: "Low", count: 31, trend: "→" },
];

export const churnRiskFlags = [
  { flag: "No booking in 30+ days", users: 414, risk: "High" },
  { flag: "Submitted complaint last 7 days", users: 89, risk: "High" },
  { flag: "Downgraded plan", users: 34, risk: "Medium" },
  { flag: "Low CSAT (< 3)", users: 67, risk: "Medium" },
];

// ========== FINANCIAL ==========
export const financialKPIs = [
  { label: "Revenue", value: "KES 16.8M", change: "+35%", up: true },
  { label: "Total Costs", value: "KES 10.2M", change: "+12%", up: false },
  { label: "Gross Margin", value: "39.3%", change: "+5.2%", up: true },
  { label: "Net Margin", value: "18.6%", change: "+3.1%", up: true },
  { label: "Cash on Hand", value: "KES 28M", change: "+27%", up: true },
  { label: "Burn Rate", value: "KES 2.4M/mo", change: "-6%", up: true },
];

export const revenueCostTrend = [
  { month: "Sep", revenue: 6800, costs: 5200 },
  { month: "Oct", revenue: 7400, costs: 5500 },
  { month: "Nov", revenue: 8200, costs: 5900 },
  { month: "Dec", revenue: 9100, costs: 6400 },
  { month: "Jan", revenue: 12400, costs: 7800 },
  { month: "Feb", revenue: 16800, costs: 10200 },
];

export const cashFlowTable = [
  { category: "Booking Revenue", inflow: "KES 14.8M", outflow: "-", net: "KES 14.8M" },
  { category: "Subscription Fees", inflow: "KES 2.0M", outflow: "-", net: "KES 2.0M" },
  { category: "Caregiver Payouts", inflow: "-", outflow: "KES 7.6M", net: "-KES 7.6M" },
  { category: "Operations", inflow: "-", outflow: "KES 1.8M", net: "-KES 1.8M" },
  { category: "Marketing", inflow: "-", outflow: "KES 0.8M", net: "-KES 0.8M" },
];

export const forecastData = [
  { month: "Mar", projected: 18400, actual: null },
  { month: "Apr", projected: 20100, actual: null },
  { month: "May", projected: 22000, actual: null },
];

// ========== MARKETING ==========
export const marketingKPIs = [
  { label: "Traffic", value: "142K", change: "+28%", up: true },
  { label: "CTR", value: "3.8%", change: "+0.8%", up: true },
  { label: "Signup Rate", value: "18.2%", change: "+2.1%", up: true },
  { label: "CPA Estimate", value: "KES 780", change: "-15%", up: true },
  { label: "Top Campaign", value: "Elder Care", change: "", up: true },
];

export const trafficTrend = [
  { week: "W1", traffic: 32000, signups: 5200 },
  { week: "W2", traffic: 35000, signups: 5800 },
  { week: "W3", traffic: 34500, signups: 5600 },
  { week: "W4", traffic: 40500, signups: 7200 },
];

export const contentEngagement = [
  { content: "How to Choose a Caregiver", views: 14200, ctr: "4.5%", conversions: 639 },
  { content: "Elderly Care Guide Kenya", views: 11800, ctr: "4.1%", conversions: 484 },
  { content: "HomeCare vs Traditional", views: 9200, ctr: "5.3%", conversions: 488 },
  { content: "Post-Surgery Recovery Tips", views: 7400, ctr: "3.5%", conversions: 259 },
];

export const messagingTests = [
  { message: "Trusted care, delivered to your door", ctr: "5.2%", winner: true },
  { message: "Professional caregivers near you", ctr: "4.1%", winner: false },
  { message: "Your family deserves the best care", ctr: "4.8%", winner: false },
  { message: "Verified caregivers in 47 counties", ctr: "3.9%", winner: false },
];

// ========== OPERATIONS ==========
export const operationsKPIs = [
  { label: "System Uptime", value: "99.7%", change: "+0.1%", up: true },
  { label: "Avg Match Time", value: "8 min", change: "-2min", up: true },
  { label: "Clock-in Rate", value: "94%", change: "+2%", up: true },
  { label: "Geo-fence Compliance", value: "97.2%", change: "+1.4%", up: true },
  { label: "Active Disputes", value: "18", change: "-5", up: true },
];

export const operationalLoad = [
  { day: "Mon", requests: 520, assignments: 480, failures: 8 },
  { day: "Tue", requests: 610, assignments: 575, failures: 12 },
  { day: "Wed", requests: 580, assignments: 550, failures: 6 },
  { day: "Thu", requests: 640, assignments: 605, failures: 10 },
  { day: "Fri", requests: 700, assignments: 660, failures: 15 },
  { day: "Sat", requests: 450, assignments: 420, failures: 5 },
  { day: "Sun", requests: 380, assignments: 360, failures: 3 },
];

export const bottlenecks = [
  { area: "Caregiver matching in Mombasa", severity: "High", detail: "Low supply vs demand ratio (0.6x) — 18% of demand, insufficient caregiver pool" },
  { area: "KYC verification queue", severity: "High", detail: "Average 3-day backlog for new applicants — 142 pending reviews" },
  { area: "Payment settlement (M-Pesa)", severity: "Medium", detail: "M-Pesa reconciliation delayed by avg 4hrs — affecting 23% of transactions" },
  { area: "Caregiver scheduling conflicts", severity: "Medium", detail: "12% of bookings have overlapping time slots due to missing travel buffers" },
];

export const incidents = [
  { id: "INC-041", title: "SMS gateway timeout", status: "Resolved", date: "Feb 10", duration: "45 min" },
  { id: "INC-040", title: "Booking API latency spike", status: "Resolved", date: "Feb 8", duration: "1.5 hrs" },
  { id: "INC-039", title: "Push notification failure", status: "Monitoring", date: "Feb 7", duration: "Ongoing" },
  { id: "INC-038", title: "Database failover event", status: "Resolved", date: "Feb 5", duration: "12 min" },
];

export const geofenceMetrics = [
  { region: "Nairobi", caregivers: 1148, compliance: "98.1%", avgClockInDistance: "42m" },
  { region: "Mombasa", caregivers: 458, compliance: "95.3%", avgClockInDistance: "67m" },
  { region: "Kisumu", caregivers: 305, compliance: "96.8%", avgClockInDistance: "51m" },
  { region: "Eldoret", caregivers: 254, compliance: "97.4%", avgClockInDistance: "38m" },
  { region: "Others", caregivers: 382, compliance: "94.7%", avgClockInDistance: "72m" },
];

export const kycQueue = [
  { stage: "Pending Review", count: 142, avgDays: 3.2 },
  { stage: "Documents Incomplete", count: 58, avgDays: 5.1 },
  { stage: "Under Verification", count: 34, avgDays: 1.8 },
  { stage: "Approved (Last 7 days)", count: 89, avgDays: 0 },
  { stage: "Rejected", count: 12, avgDays: 0 },
];
