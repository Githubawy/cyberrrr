export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  type: "Completed" | "Prototype" | "Demonstration" | "Lab Exercise";
  size: "large" | "medium" | "small";
  caseStudy: {
    objective: string;
    architecture: string[];
    methodology: string[];
    outcome: string;
  };
};

export const PROJECTS: Project[] = [
  {
    slug: "faculty-network-infrastructure",
    title: "Faculty Network Infrastructure",
    category: "Network Architecture",
    description:
      "A university faculty network project involving Cisco Packet Tracer, routers, switches, and wireless infrastructure.",
    tags: ["Cisco Packet Tracer", "Networking", "Architecture"],
    type: "Completed",
    size: "large",
    caseStudy: {
      objective:
        "Design a complete, segmented campus network for a university faculty building — covering wired labs, staff offices, and campus-wide wireless — using only structured design methodology and simulated hardware in Cisco Packet Tracer.",
      architecture: [
        "Three-layer hierarchical design: core, distribution, and access layers with concentration of routing at the distribution tier",
        "Departmental VLAN segmentation (labs, staff, administration, guest Wi-Fi) to contain broadcast domains and simplify policy",
        "Inter-VLAN routing via layer 3 switches with default gateways per VLAN, plus trunk links over the access layer",
        "DHCP scopes per segment with static addressing reserved for printers, servers, and management planes",
        "Redundant uplinks modeled between access and distribution for fault-tolerance discussion",
      ],
      methodology: [
        "Mapped requirements to a topology plan before touching Packet Tracer, defining addressing tables and VLAN matrix first",
        "Built the network iteratively — access layer first, then trunks, then routing — validating each stage with end-to-end pings",
        "Documented the full configuration per device (running-config exports) and produced a final topology diagram with labeling standards",
        "Verified DHCP allocation, NAT-less internal routing behavior, and wireless client association across SSIDs",
      ],
      outcome:
        "A fully working simulated faculty network with clean segmentation, per-department isolation, and a reusable documentation pack (topology, IP schema, VLANs, device configs) suitable as a template for similar campus deployments.",
    },
  },
  {
    slug: "network-management-system",
    title: "Network Management System",
    category: "Software Development",
    description:
      "Web application for network device inventory, port management, and topology visualization.",
    tags: ["PHP", "MySQL", "Python", "Nmap"],
    type: "Prototype",
    size: "medium",
    caseStudy: {
      objective:
        "Replace spreadsheet-based device tracking with a lightweight web system that keeps a live inventory of network devices, their switch ports, and a mapable topology.",
      architecture: [
        "PHP (Apache/XAMPP) backend with MySQL schema for devices, interfaces, ports, and location records",
        "Python discovery worker that runs scheduled Nmap sweeps and reconciles results against the inventory",
        "Dashboard views by building, switch, and device type with search and filtering",
      ],
      methodology: [
        "Modeled the database around switches and their ports first, since upstream devices report ownership through the port they plug into",
        "Wrote the discovery worker to parse nmap output into structured JSON, then upsert devices with last-seen timestamps",
        "Marked stale devices instead of deleting them, preserving audit history",
        "Built the UI with plain PHP templates to keep the prototype deployable on any existing XAMPP server",
      ],
      outcome:
        "A working prototype demonstrating automated inventory reconciliation: discovered devices appear in the dashboard with their ports, IPs, and last-seen state, forming the base for a future topology graph module.",
    },
  },
  {
    slug: "web-app-security-assessment",
    title: "Web Application Security Assessment",
    category: "Security Assessment",
    description:
      "Penetration testing and vulnerability assessment focused on OWASP risks.",
    tags: ["OWASP", "Pentesting", "Vulnerability Assessment"],
    type: "Demonstration",
    size: "medium",
    caseStudy: {
      objective:
        "Assess a deliberately vulnerable web application and demonstrate a structured methodology for finding, validating, and reporting OWASP Top 10 class issues in a controlled environment.",
      architecture: [
        "Deliberately vulnerable target app isolated in a local lab (Juice Shop-style target)",
        "Kali attack box with Burp Suite as the interception proxy and workflow hub",
        "Supporting tooling: sqlmap, gobuster/directory fuzzer, curl, and browser dev tools",
      ],
      methodology: [
        "Passive recon: mapping routes, technologies, and authentication flows before sending a single intrusive request",
        "Mapped trust boundaries and annotated every request where user input reached the server or reflected to the client",
        "Manual testing of injection, broken access control, and business-logic cases — automated only where manual was impractical",
        "Each finding validated with a minimal proof-of-concept request, severity-rated, and written up with remediation guidance",
      ],
      outcome:
        "A reproducible assessment workflow and a sample report showing finding, evidence, severity rationale, and fix recommendation — the template I reuse for assessments today.",
    },
  },
  {
    slug: "educenter-management-system",
    title: "EduCenter Management System",
    category: "Web Application",
    description:
      "Education management application involving student records, payments, and role-based access.",
    tags: ["Web Dev", "RBAC", "Database"],
    type: "Completed",
    size: "small",
    caseStudy: {
      objective:
        "Digitize the daily paper workflow of a small education center — student enrollment, group tracking, and payment recording — with different views for admins and staff.",
      architecture: [
        "Server-rendered web app on a classic PHP/MySQL stack deployed on XAMPP locally",
        "Role-based access control (admin/staff) enforced at route level, not just in templates",
        "Normalized schema covering students, groups, enrollments, and payment records",
      ],
      methodology: [
        "Interviewed the daily workflow first and modeled the schema around it — students join groups, not payments",
        "Enforced RBAC through a single authorization check layer so no hidden UI could bypass the rules",
        "Payment records are append-only, keeping a clean audit trail rather than editing balances directly",
        "Trained staff with a simple written usage guide as part of the handover",
      ],
      outcome:
        "A dependable internal tool that survived real daily use — enrollments, receipts, and role separation all handled in one place instead of scattered notebooks.",
    },
  },
  {
    slug: "cybersecurity-home-lab",
    title: "Cybersecurity Home Lab",
    category: "Security Research",
    description:
      "Practical lab work involving Docker, OWASP Juice Shop, and network security experiments.",
    tags: ["Docker", "Juice Shop", "Linux"],
    type: "Lab Exercise",
    size: "medium",
    caseStudy: {
      objective:
        "Build a safe, reproducible playground at home for practicing offensive security techniques without touching any real target.",
      architecture: [
        "Linux host with Docker running OWASP Juice Shop and other deliberately vulnerable containers",
        "Isolated Docker bridge network for targets so experiments never touch the LAN",
        "Kali VM as the attack platform, with snapshot-based rollback for clean exercises",
      ],
      methodology: [
        "Reproduced classic attack classes (injection, XSS, broken auth) against target containers, then reviewed the source to understand the fix",
        "Practiced both directions: attacked from Kali, then hardened the target in the container build and re-ran the same attacks to verify",
        "Kept a lab log — every exercise with commands, expected vs actual behavior, and lessons",
      ],
      outcome:
        "A permanent, always-available practice environment: spin up a target, attack it, revert, and try a different technique — the muscle memory behind all my assessment work.",
    },
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
