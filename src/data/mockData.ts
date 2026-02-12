// ========== EXECUTIVE ==========
export const executiveKPIs = [
  { label: "Total Revenue", value: "KES 12.4M", change: "+18%", up: true },
  { label: "Total Bookings", value: "3,842", change: "+12%", up: true },
  { label: "Active Users", value: "8,215", change: "+9%", up: true },
  { label: "CAC Estimate", value: "KES 1,240", change: "-5%", up: true },
  { label: "Retention Rate", value: "74%", change: "+3%", up: true },
  { label: "NPS Proxy", value: "62", change: "+7", up: true },
];

export const revenueBookingsTrend = [
  { month: "Sep", revenue: 6800, bookings: 420 },
  { month: "Oct", revenue: 7400, bookings: 490 },
  { month: "Nov", revenue: 8200, bookings: 530 },
  { month: "Dec", revenue: 9100, bookings: 580 },
  { month: "Jan", revenue: 10800, bookings: 650 },
  { month: "Feb", revenue: 12400, bookings: 720 },
];

export const opportunities = [
  { title: "Mombasa bookings dropped 15%", impact: "High", action: "Increase caregiver recruitment in coastal region" },
  { title: "Elderly care demand spiking", impact: "High", action: "Launch specialized elderly care training program" },
  { title: "Weekend booking gap", impact: "Medium", action: "Introduce weekend incentive pricing" },
];

export const productPerformance = [
  { product: "Elderly Care", revenue: "KES 4.2M", bookings: 1240, growth: "+22%" },
  { product: "Post-Surgery", revenue: "KES 3.1M", bookings: 890, growth: "+15%" },
  { product: "Child Care", revenue: "KES 2.8M", bookings: 920, growth: "+8%" },
  { product: "Disability Support", revenue: "KES 1.5M", bookings: 480, growth: "+12%" },
  { product: "Palliative Care", revenue: "KES 0.8M", bookings: 312, growth: "+5%" },
];

// ========== SALES ==========
export const salesKPIs = [
  { label: "Daily Sales", value: "KES 420K", change: "+11%", up: true },
  { label: "Conversion Rate", value: "6.8%", change: "+0.4%", up: true },
  { label: "Avg Order Value", value: "KES 3,240", change: "+7%", up: true },
  { label: "Refund Rate", value: "2.1%", change: "-0.3%", up: true },
];

export const salesFunnel = [
  { stage: "Visits", value: 45000 },
  { stage: "Signups", value: 8200 },
  { stage: "Bookings", value: 3842 },
  { stage: "Paid", value: 3450 },
  { stage: "Completed", value: 3180 },
];

export const productRevenue = [
  { name: "Elderly Care", revenue: 4200 },
  { name: "Post-Surgery", revenue: 3100 },
  { name: "Child Care", revenue: 2800 },
  { name: "Disability", revenue: 1500 },
  { name: "Palliative", revenue: 800 },
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
  { label: "Ticket Volume", value: "1,247", change: "+5%", up: false },
  { label: "First Response", value: "18 min", change: "-4min", up: true },
  { label: "Resolution Time", value: "2.4 hrs", change: "-0.6hr", up: true },
  { label: "CSAT Score", value: "4.6/5", change: "+0.2", up: true },
  { label: "Repeat Contact", value: "8%", change: "-1%", up: true },
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
  { flag: "No booking in 30+ days", users: 412, risk: "High" },
  { flag: "Submitted complaint last 7 days", users: 89, risk: "High" },
  { flag: "Downgraded plan", users: 34, risk: "Medium" },
  { flag: "Low CSAT (< 3)", users: 67, risk: "Medium" },
];

// ========== FINANCIAL ==========
export const financialKPIs = [
  { label: "Revenue", value: "KES 12.4M", change: "+18%", up: true },
  { label: "Total Costs", value: "KES 8.9M", change: "+10%", up: false },
  { label: "Gross Margin", value: "28.2%", change: "+2.1%", up: true },
  { label: "Net Margin", value: "14.5%", change: "+1.8%", up: true },
  { label: "Cash on Hand", value: "KES 22M", change: "", up: true },
  { label: "Burn Rate", value: "KES 2.1M/mo", change: "-8%", up: true },
];

export const revenueCostTrend = [
  { month: "Sep", revenue: 6800, costs: 5200 },
  { month: "Oct", revenue: 7400, costs: 5500 },
  { month: "Nov", revenue: 8200, costs: 5900 },
  { month: "Dec", revenue: 9100, costs: 6400 },
  { month: "Jan", revenue: 10800, costs: 7200 },
  { month: "Feb", revenue: 12400, costs: 8900 },
];

export const cashFlowTable = [
  { category: "Booking Revenue", inflow: "KES 11.2M", outflow: "-", net: "KES 11.2M" },
  { category: "Subscription Fees", inflow: "KES 1.2M", outflow: "-", net: "KES 1.2M" },
  { category: "Caregiver Payouts", inflow: "-", outflow: "KES 6.8M", net: "-KES 6.8M" },
  { category: "Operations", inflow: "-", outflow: "KES 1.4M", net: "-KES 1.4M" },
  { category: "Marketing", inflow: "-", outflow: "KES 0.7M", net: "-KES 0.7M" },
];

export const forecastData = [
  { month: "Mar", projected: 13800, actual: null },
  { month: "Apr", projected: 15200, actual: null },
  { month: "May", projected: 16800, actual: null },
];

// ========== MARKETING ==========
export const marketingKPIs = [
  { label: "Traffic", value: "124K", change: "+22%", up: true },
  { label: "CTR", value: "3.4%", change: "+0.6%", up: true },
  { label: "Signup Rate", value: "18.2%", change: "+2.1%", up: true },
  { label: "CPA Estimate", value: "KES 840", change: "-12%", up: true },
  { label: "Top Campaign", value: "Elder Care", change: "", up: true },
];

export const trafficTrend = [
  { week: "W1", traffic: 28000, signups: 4800 },
  { week: "W2", traffic: 31000, signups: 5400 },
  { week: "W3", traffic: 30500, signups: 5100 },
  { week: "W4", traffic: 34500, signups: 6200 },
];

export const contentEngagement = [
  { content: "How to Choose a Caregiver", views: 12400, ctr: "4.2%", conversions: 520 },
  { content: "Elderly Care Guide Kenya", views: 9800, ctr: "3.8%", conversions: 372 },
  { content: "HomeCare vs Traditional", views: 7600, ctr: "5.1%", conversions: 387 },
  { content: "Post-Surgery Recovery Tips", views: 6200, ctr: "3.2%", conversions: 198 },
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
  { label: "Failed Jobs", value: "23", change: "-8", up: true },
  { label: "Avg Match Time", value: "8 min", change: "-2min", up: true },
  { label: "Clock-in Rate", value: "94%", change: "+2%", up: true },
  { label: "Disputes", value: "18", change: "-5", up: true },
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
  { area: "Caregiver matching in Mombasa", severity: "High", detail: "Low supply vs demand ratio (0.6x)" },
  { area: "KYC verification queue", severity: "Medium", detail: "Average 3-day backlog for new applicants" },
  { area: "Payment settlement", severity: "Low", detail: "M-Pesa reconciliation delayed by 4hrs" },
];

export const incidents = [
  { id: "INC-041", title: "SMS gateway timeout", status: "Resolved", date: "Feb 10", duration: "45 min" },
  { id: "INC-040", title: "Booking API latency spike", status: "Resolved", date: "Feb 8", duration: "1.5 hrs" },
  { id: "INC-039", title: "Push notification failure", status: "Monitoring", date: "Feb 7", duration: "Ongoing" },
  { id: "INC-038", title: "Database failover event", status: "Resolved", date: "Feb 5", duration: "12 min" },
];
