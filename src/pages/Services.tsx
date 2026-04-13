import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AnimatedSection, { staggerContainer, staggerItem } from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Globe, Cloud, Sparkles,
  Smartphone, Layout, Database, Shield, Server, GitBranch,
  Monitor, Cpu, Lock, BarChart3, BookOpen, Code, Users,
  Layers, Rocket, CheckCircle, Bot, Megaphone,
  Search, Target, TrendingUp, Mail, Share2, FileText,
  Brain, LineChart, Workflow, MessageSquare, Lightbulb, Eye,
  GraduationCap, Presentation, Award, ChevronDown
} from "lucide-react";
import webMobileDev from "@/assets/web-mobile-dev.jpg";
import cloudInfra from "@/assets/cloud-infrastructure.jpg";
import learningPlatform from "@/assets/learning-platform.jpg";
import heroTechTeam from "@/assets/hero-tech-team.jpg";
import teamMeeting from "@/assets/team-meeting.jpg";
import roadmapUxDesign from "@/assets/roadmap-ux-design.jpg";
import roadmapAgileDev from "@/assets/roadmap-agile-dev.jpg";
import roadmapTesting from "@/assets/roadmap-testing.jpg";
import roadmapDeployment from "@/assets/roadmap-deployment.jpg";
import roadmapCloudMigration from "@/assets/roadmap-cloud-migration.jpg";
import roadmapSecurity from "@/assets/roadmap-security.jpg";
import courseItTraining from "@/assets/course-it-training.jpg";
import courseAwsTraining from "@/assets/course-aws-training.jpg";
import courseDmarketing from "@/assets/course-dmarketing.jpg";
import courseLeadership from "@/assets/course-leadership.jpg";
import SEOHead from "@/components/SEOHead";

/* ═══════════════════════════════════════════════════
   COURSE DATA FOR TEACHING
   ═══════════════════════════════════════════════════ */

interface Course {
  name: string;
  type?: string;
  topics: string[];
}

interface CourseCategory {
  id: string;
  title: string;
  icon: typeof Globe;
  image: string;
  levels?: { level: string; courses: Course[] }[];
  courses?: Course[];
}

const courseCategories: CourseCategory[] = [
  {
    id: "it-courses",
    title: "IT & Development Courses",
    icon: Code,
    image: courseItTraining,
    courses: [
      { name: "Java Full Stack Development", topics: ["HTML, CSS (Bootstrap / Tailwind), Animations, JavaScript / TypeScript, React", "Core Java, Spring Framework, Spring Boot, Hibernate (JPA)", "PostgreSQL / MySQL", "REST APIs, Maven / Gradle, JWT Authentication"] },
      { name: "Python Full Stack Development", topics: ["HTML, CSS (Bootstrap), JavaScript / TypeScript, React", "Python, Django, Flask, FastAPI", "PostgreSQL / MySQL", "Django ORM, SQLAlchemy, REST API"] },
      { name: "Node.js Full Stack Development", topics: ["React / Next.js, HTML, CSS, JavaScript / TypeScript", "Node.js, Express.js", "MongoDB, PostgreSQL", "REST APIs, Authentication, API Development"] },
      { name: "Next.js Full Stack Development", topics: ["HTML (JSX / TSX), CSS / Tailwind / Bootstrap, React, JavaScript / TypeScript", "Next.js (Node.js Runtime), API Routes, Route Handlers, Server Actions", "PostgreSQL / MySQL / MongoDB", "SSR, API Integration, Authentication"] },
      { name: "Frontend Development", topics: ["HTML, CSS, JavaScript, React, Angular, Vue", "Responsive Design, UI Components", "Modern CSS frameworks and animation libraries"] },
      { name: "Backend Development", topics: ["Node.js, Django, Spring Boot, Laravel", "MySQL / PostgreSQL", "REST API, Authentication"] },
      { name: "Full Stack Development", topics: ["HTML, CSS, JavaScript, React", "Node.js / Spring Boot / Django", "MongoDB / PostgreSQL", "API Integration"] },
      { name: "Mobile App Development", topics: ["React Native / Flutter", "Node.js / Firebase", "MongoDB / Firebase", "API Integration"] },
      { name: "Database Development", topics: ["SQL", "MySQL, PostgreSQL, MongoDB", "Database Design & Optimization"] },
      { name: "Cloud Computing", topics: ["Cloud Architecture", "Managed Databases", "Infrastructure Design"] },
      { name: "DevOps Engineering", topics: ["CI/CD Tools", "Cloud Databases", "Automation, Monitoring"] },
      { name: "Cyber Security", topics: ["Security Tools", "Log Analysis", "Vulnerability Testing"] },
      { name: "Data Science", topics: ["Python Visualization", "Python, Data Lakes", "Data Analysis"] },
      { name: "Machine Learning", topics: ["Python Libraries", "ML Models", "Data Storage, Model Training"] },
      { name: "Artificial Intelligence", topics: ["Python, AI Algorithms", "Big Data", "Deep Learning"] },
      { name: "Software Testing", topics: ["Web Testing, Automation", "Test Databases", "Selenium / Cypress"] },
      { name: "UI/UX Design", topics: ["UI Design", "Prototyping", "User Research & Wireframing"] },
      { name: "System Administration", topics: ["Linux / Windows", "Server Databases", "Server Management"] },
    ],
  },
  {
    id: "aws-courses",
    title: "AWS Cloud Courses",
    icon: Cloud,
    image: courseAwsTraining,
    levels: [
      {
        level: "Beginner",
        courses: [
          { name: "AWS Cloud Practitioner", topics: ["What is AWS, EC2, S3, IAM", "Pricing & Compute", "Storage, Networking, Cloud"] },
          { name: "AWS Fundamentals Specialization", topics: ["Compute, Storage, Networking", "Cloud architecture basics", "AWS core services overview"] },
          { name: "AWS Sales", topics: ["AWS services overview", "Cloud service understanding for business", "Customer engagement"] },
        ],
      },
      {
        level: "Intermediate",
        courses: [
          { name: "AWS Solutions Architect – Associate", topics: ["Designing cloud architecture", "High availability, scalability, security", "Well-Architected Framework"] },
          { name: "AWS Developer – Associate", topics: ["Building applications on AWS", "APIs, Lambda, CI/CD, backend", "DynamoDB, S3, SQS integration"] },
          { name: "AWS DevOps Engineer – Professional", topics: ["DevOps automation in AWS", "CI/CD pipelines, monitoring", "Infrastructure as Code"] },
        ],
      },
      {
        level: "Advanced",
        courses: [
          { name: "AWS DevOps and AI on AWS", topics: ["Advanced DevOps and automation", "Infrastructure as Code, CI/CD tools", "AI/ML services integration"] },
          { name: "Generative AI and AI Agents with Amazon Bedrock", topics: ["AI development on AWS", "Generative AI, AI agents", "LLM, Foundation Models"] },
        ],
      },
    ],
  },
  {
    id: "digital-marketing-courses",
    title: "Digital Marketing Courses",
    icon: Megaphone,
    image: courseDmarketing,
    levels: [
      {
        level: "Beginner",
        courses: [
          { name: "Google Digital Marketing & E-commerce Certificate", topics: ["SEO fundamentals", "Google Ads & Analytics", "E-commerce strategies"] },
          { name: "Social Media Marketing & Management Specialist", topics: ["Fundamentals of Digital Marketing", "Content Creation", "Instagram, Facebook, LinkedIn, YouTube"] },
        ],
      },
      {
        level: "Intermediate",
        courses: [
          { name: "Meta Social Media Marketing / Meta Blueprint", topics: ["Facebook & Instagram Ads", "Campaign Optimization", "Audience Targeting"] },
          { name: "Digital Marketing Specialist", topics: ["SEO & SEM", "Social Media Marketing", "Analytics & Marketing Tools", "Capstone Projects"] },
        ],
      },
      {
        level: "Advanced",
        courses: [
          { name: "Post Graduate Program in Digital Marketing", topics: ["AI-based Marketing", "Influencer Marketing", "Advanced Analytics"] },
        ],
      },
    ],
  },
  {
    id: "hr-courses",
    title: "HR (Human Resources)",
    icon: Users,
    image: courseLeadership,
    courses: [
      { name: "Human Resource Management Specialization", type: "Video", topics: ["Recruitment & Hiring", "Employee Management", "Payroll & HR Policies"] },
      { name: "SHRM Certified Professional (SHRM-CP)", type: "Video", topics: ["Workforce Planning", "Leadership", "HR Strategy"] },
      { name: "HR Analytics – Data-Driven HR", type: "Video", topics: ["Employee Performance Tracking", "Hiring Analytics", "Data-driven decisions"] },
    ],
  },
  {
    id: "leadership-courses",
    title: "Leadership Courses",
    icon: Award,
    image: courseLeadership,
    courses: [
      { name: "Leadership & Management", type: "Video", topics: ["Team Management", "Decision-Making", "Communication"] },
      { name: "Leadership for Advanced Professionals", type: "Video", topics: ["Strategic Thinking", "Leadership Mindset", "Business Growth"] },
      { name: "Executive MBA (E-MBA)", type: "Video", topics: ["Leadership", "Business Strategy", "Finance"] },
    ],
  },
  {
    id: "sales-courses",
    title: "Sales & Business Development",
    icon: TrendingUp,
    image: teamMeeting,
    courses: [
      { name: "Strategic Sales Management", type: "Video", topics: ["Sales Strategy", "Revenue Growth", "Team Performance"] },
      { name: "HubSpot Sales Training", topics: ["Lead Generation", "CRM Usage", "Closing Deals"] },
      { name: "Sales Management Specialization", type: "Video", topics: ["Sales Funnels", "Negotiation", "Customer Psychology"] },
    ],
  },
  {
    id: "softskills-courses",
    title: "Soft Skills & Career Development",
    icon: GraduationCap,
    image: heroTechTeam,
    courses: [
      { name: "Communication Skills", type: "Video", topics: ["Public Speaking", "Business Communication", "Confidence Building"] },
      { name: "Interview Preparation & Career Skills", type: "Video", topics: ["Resume Building", "Mock Interviews", "Personal Branding"] },
      { name: "Time Management & Productivity", type: "Video", topics: ["Goal Setting", "Focus Techniques", "Work Efficiency"] },
    ],
  },
];

/* ═══════════════════════════════════════════════════
   SERVICE DATA
   ═══════════════════════════════════════════════════ */

const serviceCategories = [
  {
    id: "web-mobile",
    icon: Globe,
    label: "Web & Mobile",
    title: "Web & Mobile Application Development",
    tagline: "Enterprise-grade platforms built for speed, security, and scale.",
    image: webMobileDev,
    bannerImage: roadmapUxDesign,
    description: "We design and develop custom web platforms and mobile applications tailored to your business workflows. From responsive websites to complex enterprise portals and cross-platform mobile apps — our solutions are architected with modern frameworks, robust APIs, and scalable infrastructure that grows with your business.",
    extendedDesc: "Our full-cycle development approach ensures every application is built with performance, maintainability, and user experience at its core. We leverage React, Next.js, React Native, Flutter, and cloud-native backends to deliver solutions that drive measurable business outcomes.",
    features: [
      { icon: Layout, text: "Custom Web Application Development", desc: "Responsive, performant web apps using React, Angular, Vue.js, and Next.js" },
      { icon: Smartphone, text: "Native & Cross-Platform Mobile Apps", desc: "iOS & Android apps with React Native, Flutter, and Swift/Kotlin" },
      { icon: Database, text: "API Development & Integration", desc: "RESTful, GraphQL APIs with third-party CRM, ERP, and payment integrations" },
      { icon: Shield, text: "Enterprise Security & Compliance", desc: "OWASP, SOC2, HIPAA-compliant development with encryption & auth" },
      { icon: Layers, text: "UI/UX Design & Prototyping", desc: "User research, wireframing, high-fidelity prototypes, and design systems" },
      { icon: Rocket, text: "Progressive Web Applications (PWA)", desc: "Offline-capable, installable web apps with native-like performance" },
    ],
    departments: [
      { title: "Frontend Department", desc: "React, Angular, Vue.js, Next.js — building responsive, accessible, and performant user interfaces with modern frameworks and design systems.", image: roadmapUxDesign },
      { title: "Backend Department", desc: "Node.js, Python, Java, .NET — scalable microservices, REST/GraphQL APIs, database architecture, and server-side logic.", image: roadmapAgileDev },
      { title: "Mobile Department", desc: "React Native, Flutter, Swift, Kotlin — native and cross-platform mobile applications for iOS and Android with offline-first architecture.", image: roadmapTesting },
      { title: "QA & Testing Department", desc: "Automated and manual testing with Selenium, Cypress, Jest — ensuring zero-defect releases with comprehensive test coverage.", image: roadmapDeployment },
    ],
  },
  {
    id: "cloud-devops",
    icon: Cloud,
    label: "Cloud & DevOps",
    title: "Cloud & DevOps Services",
    tagline: "Modern infrastructure that cuts cost and accelerates delivery.",
    image: cloudInfra,
    bannerImage: roadmapCloudMigration,
    description: "We architect, migrate, and manage cloud infrastructure that reduces operational costs by up to 40%, improves uptime to 99.99%, and accelerates your deployment cycles from weeks to hours. Our certified cloud architects bring deep expertise across AWS, Azure, and GCP.",
    extendedDesc: "Whether you're migrating from on-premise, optimizing existing cloud spend, or building cloud-native from scratch — our DevOps engineers implement infrastructure as code, automated pipelines, and container orchestration that lets your team ship faster with confidence.",
    features: [
      { icon: BarChart3, text: "Cost Optimization & FinOps", desc: "Reserved instances, spot fleets, and resource right-sizing strategies" },
      { icon: Server, text: "Cloud Architecture & Migration", desc: "Lift-and-shift, re-platforming, and cloud-native migration strategies" },
      { icon: GitBranch, text: "CI/CD Pipeline Automation", desc: "Jenkins, GitHub Actions, GitLab CI with automated testing & deployment" },
      { icon: Monitor, text: "Infrastructure Monitoring & Alerting", desc: "Prometheus, Grafana, CloudWatch with real-time incident response" },
      { icon: Lock, text: "Security & Compliance Hardening", desc: "HIPAA, GDPR, ISO compliance with IAM policies, encryption, and VPC design" },
      { icon: Cpu, text: "Container Orchestration (Docker & K8s)", desc: "Kubernetes cluster management, Helm charts, and service mesh" },
    ],
    departments: [
      { title: "Cost Optimization & FinOps", desc: "Reserved instances, spot fleet management, resource right-sizing, cost allocation tags, and budget alerting across multi-cloud environments.", image: roadmapCloudMigration },
      { title: "Cloud Architecture & Migration", desc: "Multi-cloud strategy design, workload assessment, migration execution with zero-downtime cutover, and hybrid cloud integration.", image: roadmapDeployment },
      { title: "Security & Compliance Hardening", desc: "HIPAA, GDPR, and ISO compliance frameworks. IAM policies, encryption at rest/transit, vulnerability scanning, and penetration testing.", image: roadmapSecurity },
      { title: "Cloud Platform", desc: "AWS, Azure, GCP expertise with Terraform IaC, Kubernetes orchestration, serverless architecture, and managed database services.", image: roadmapAgileDev },
    ],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    label: "Digital Marketing",
    title: "Digital Marketing Services",
    tagline: "Data-driven strategies that grow your brand and revenue.",
    image: heroTechTeam,
    bannerImage: teamMeeting,
    description: "Our digital marketing team crafts comprehensive strategies that drive qualified traffic, generate leads, and increase conversions. We combine creative storytelling with data analytics to deliver measurable marketing ROI across all digital channels.",
    extendedDesc: "From SEO and SEM to social media management, content marketing, and email automation — we build end-to-end marketing ecosystems that align with your business goals and deliver sustainable growth.",
    features: [
      { icon: Search, text: "SEO & Search Optimization", desc: "Technical SEO, on-page optimization, link building, and keyword strategy" },
      { icon: Target, text: "PPC & Paid Advertising", desc: "Google Ads, Meta Ads, LinkedIn campaigns with conversion tracking" },
      { icon: Share2, text: "Social Media Marketing", desc: "Content strategy, community management, and influencer partnerships" },
      { icon: FileText, text: "Content Marketing", desc: "Blog content, whitepapers, case studies, and thought leadership" },
      { icon: Mail, text: "Email Marketing & Automation", desc: "Drip campaigns, newsletter strategy, and marketing automation workflows" },
      { icon: TrendingUp, text: "Analytics & Performance Tracking", desc: "Google Analytics, conversion funnels, A/B testing, and ROI reporting" },
    ],
    departments: [
      { title: "SEO & Content Department", desc: "Keyword research, technical SEO audits, content calendars, blog management, and organic growth strategies for sustainable traffic.", image: heroTechTeam },
      { title: "Paid Media Department", desc: "Google Ads, Meta Ads, LinkedIn campaigns, retargeting, and performance optimization with ROAS tracking.", image: teamMeeting },
      { title: "Social Media Department", desc: "Platform strategy, content creation, community engagement, influencer partnerships, and brand reputation management.", image: roadmapUxDesign },
      { title: "Analytics Department", desc: "Google Analytics setup, conversion tracking, A/B testing frameworks, marketing dashboards, and monthly performance reporting.", image: roadmapTesting },
    ],
  },
  {
    id: "ai-solutions",
    icon: Bot,
    label: "AI Solutions",
    title: "AI & Machine Learning Solutions",
    tagline: "Intelligent automation that transforms business operations.",
    image: roadmapAgileDev,
    bannerImage: roadmapSecurity,
    description: "We build intelligent solutions powered by artificial intelligence and machine learning that automate complex processes, uncover insights from data, and create competitive advantages. From chatbots to predictive analytics — our AI solutions are production-ready and enterprise-grade.",
    extendedDesc: "Our AI team combines deep technical expertise with business domain knowledge to deliver solutions that are not just technically impressive but drive real business value — reducing costs, improving efficiency, and enabling data-driven decision making.",
    features: [
      { icon: Brain, text: "Machine Learning Models", desc: "Custom ML models for prediction, classification, and recommendation systems" },
      { icon: MessageSquare, text: "NLP & Chatbots", desc: "Conversational AI, sentiment analysis, and intelligent document processing" },
      { icon: LineChart, text: "Predictive Analytics", desc: "Forecasting, anomaly detection, and data-driven decision support" },
      { icon: Workflow, text: "Process Automation (RPA)", desc: "Intelligent automation of repetitive tasks with AI-powered workflows" },
      { icon: Eye, text: "Computer Vision", desc: "Image recognition, object detection, and visual inspection solutions" },
      { icon: Lightbulb, text: "AI Strategy Consulting", desc: "AI readiness assessment, use-case identification, and roadmap planning" },
    ],
    departments: [
      { title: "Machine Learning Department", desc: "Model training, feature engineering, hyperparameter tuning, and deployment of production ML systems using TensorFlow, PyTorch, and scikit-learn.", image: roadmapAgileDev },
      { title: "NLP & Conversational AI", desc: "Chatbot development, sentiment analysis, text classification, and intelligent document processing with transformers and LLMs.", image: roadmapSecurity },
      { title: "Data Engineering", desc: "Data pipeline architecture, ETL workflows, data lake design, and real-time streaming for ML model training and inference.", image: roadmapCloudMigration },
      { title: "AI Integration & Deployment", desc: "MLOps, model serving, A/B testing, monitoring, and integration with existing enterprise systems and workflows.", image: roadmapDeployment },
    ],
  },
  {
    id: "teaching",
    icon: BookOpen,
    label: "Hagni's Ignite Program",
    title: "Hagni Ignite Learning's — Professional Training",
    tagline: "Build job-ready talent across your organization.",
    image: learningPlatform,
    bannerImage: teamMeeting,
    description: "Hagni Ignite Learning's is our professional training division that provides industry-aligned programs designed to bridge skill gaps and build future-ready talent. From technical bootcamps to leadership development — we prepare your workforce for the future of technology and business.",
    extendedDesc: "Our programs combine instructor-led training with hands-on projects, real-world case studies, and industry-recognized certifications. Whether you're upskilling existing teams or onboarding fresh talent — Hagni Ignite Learning's delivers measurable outcomes.",
    features: [
      { icon: Code, text: "Full-Stack Development Training", desc: "React, Node.js, Python, Java — intensive bootcamps with live projects" },
      { icon: Cloud, text: "Cloud & DevOps Training", desc: "AWS, Azure, GCP certification prep with hands-on lab exercises" },
      { icon: Megaphone, text: "Digital Marketing Training", desc: "SEO, SEM, social media, and analytics with real campaign projects" },
      { icon: Bot, text: "AI & Data Science Training", desc: "Python, ML, deep learning, NLP with capstone projects" },
      { icon: Users, text: "Leadership & HR Training", desc: "Management skills, team building, HR analytics, and talent development" },
      { icon: GraduationCap, text: "Sales & Communication Skills", desc: "Public speaking, negotiation, CRM mastery, and business communication" },
    ],
    departments: [
      { title: "Technical Training Department", desc: "Full-stack development, cloud computing, DevOps, and software engineering bootcamps with hands-on projects and industry mentorship.", image: learningPlatform },
      { title: "Digital & AI Training Department", desc: "Digital marketing, AI/ML, data science, and analytics training programs with real-world campaign and model-building projects.", image: heroTechTeam },
      { title: "Leadership & Soft Skills Department", desc: "Leadership development, HR management, communication skills, interview preparation, and career development programs.", image: teamMeeting },
      { title: "Certification & Assessment Department", desc: "AWS, Google, Meta, SHRM certification prep, skill assessments, competency dashboards, and learning analytics.", image: roadmapTesting },
    ],
    hasCourses: true,
  },
];

/* ═══════════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════════ */
const HeroSection = () => (
  <section className="section-dark relative overflow-hidden min-h-[45vh] flex items-center">
    <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 60% 30%, hsl(28,95%,52%) 0%, transparent 55%)" }} />
    <div className="absolute inset-0 dot-pattern-dark" />
    <FloatingElements />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24 pb-10 lg:pt-32 lg:pb-14 text-center">
      <AnimatedSection variant="blur">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-hero-foreground/10 bg-hero-foreground/5 mb-5"
        >
          <Sparkles size={14} className="text-accent" />
          <span className="text-xs font-medium text-hero-foreground/70 tracking-wide">Our Services</span>
        </motion.div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] tracking-tight text-hero-foreground mb-4 max-w-4xl mx-auto">
          Everything Your Enterprise Needs to{" "}
          <motion.span initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="gradient-flame-text inline-block">
            Build, Scale & Succeed
          </motion.span>
        </h1>
        <p className="text-base text-hero-foreground/60 max-w-2xl mx-auto leading-relaxed">
          From custom software development to cloud infrastructure, digital marketing, AI, and professional training — all under one roof.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   COURSE CATALOG COMPONENT
   ═══════════════════════════════════════════════════ */

const levelColors: Record<string, string> = {
  Beginner: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400",
  Intermediate: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400",
  Advanced: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400",
};

const CourseCatalog = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const cat = courseCategories[activeCategory];

  return (
    <div className="mt-16">
      <AnimatedSection className="text-center mb-10" variant="blur">
        <span className="section-label">Course Catalog</span>
        <h3 className="text-xl md:text-3xl font-extrabold mb-3">Complete Training Programs</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
          Explore our comprehensive course catalog designed to build industry-ready professionals across every technology domain.
        </p>
      </AnimatedSection>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {courseCategories.map((c, i) => (
          <button
            key={c.id}
            onClick={() => { setActiveCategory(i); setExpandedCourse(null); }}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
              activeCategory === i
                ? "gradient-flame text-accent-foreground shadow-lg shadow-accent/20"
                : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
            }`}
          >
            <c.icon size={14} />
            {c.title}
          </button>
        ))}
      </div>

      {/* Category Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={cat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Category Banner */}
          <div className="relative rounded-2xl overflow-hidden mb-10 h-48 md:h-64">
            <img src={cat.image} alt={cat.title} className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent flex items-center">
              <div className="px-8 md:px-12">
                <div className="w-14 h-14 rounded-2xl gradient-flame flex items-center justify-center mb-4 shadow-lg shadow-accent/20">
                  <cat.icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-2">{cat.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {cat.levels ? `${cat.levels.reduce((a, l) => a + l.courses.length, 0)} courses across ${cat.levels.length} levels` : `${cat.courses?.length} courses available`}
                </p>
              </div>
            </div>
          </div>

          {/* Level-based courses */}
          {cat.levels && cat.levels.map((lvl) => (
            <div key={lvl.level} className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <div className={`px-4 py-1.5 rounded-full bg-gradient-to-r border text-xs font-bold uppercase tracking-wider ${levelColors[lvl.level] || "border-border text-muted-foreground"}`}>
                  {lvl.level}
                </div>
                <div className="flex-1 h-px bg-border/50" />
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lvl.courses.map((course) => (
                  <motion.div
                    key={course.name}
                    whileHover={{ y: -4, boxShadow: "0 16px 32px -8px hsl(28 95% 52% / 0.12)" }}
                    className="card-professional p-5 cursor-pointer group"
                    onClick={() => setExpandedCourse(expandedCourse === course.name ? null : course.name)}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-sm font-bold group-hover:text-accent transition-colors leading-snug pr-2">{course.name}</h4>
                      <ChevronDown size={16} className={`text-muted-foreground shrink-0 mt-0.5 transition-transform ${expandedCourse === course.name ? "rotate-180" : ""}`} />
                    </div>
                    {course.type && (
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full mb-3">{course.type}</span>
                    )}
                    <AnimatePresence>
                      {expandedCourse === course.name && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                          <div className="pt-3 border-t border-border/50 space-y-2">
                            {course.topics.map((t, ti) => (
                              <div key={ti} className="flex items-start gap-2">
                                <CheckCircle size={13} className="text-accent shrink-0 mt-0.5" />
                                <span className="text-xs text-muted-foreground leading-relaxed">{t}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {expandedCourse !== course.name && (
                      <p className="text-xs text-muted-foreground">{course.topics.length} topics covered</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

          {/* Flat courses (no levels) */}
          {cat.courses && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {cat.courses.map((course) => (
                <motion.div
                  key={course.name}
                  whileHover={{ y: -4, boxShadow: "0 16px 32px -8px hsl(28 95% 52% / 0.12)" }}
                  className="card-professional p-5 cursor-pointer group"
                  onClick={() => setExpandedCourse(expandedCourse === course.name ? null : course.name)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-sm font-bold group-hover:text-accent transition-colors leading-snug pr-2">{course.name}</h4>
                    <ChevronDown size={16} className={`text-muted-foreground shrink-0 mt-0.5 transition-transform ${expandedCourse === course.name ? "rotate-180" : ""}`} />
                  </div>
                  {course.type && (
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded-full mb-3">{course.type}</span>
                  )}
                  <AnimatePresence>
                    {expandedCourse === course.name && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <div className="pt-3 border-t border-border/50 space-y-2">
                          {course.topics.map((t, ti) => (
                            <div key={ti} className="flex items-start gap-2">
                              <CheckCircle size={13} className="text-accent shrink-0 mt-0.5" />
                              <span className="text-xs text-muted-foreground leading-relaxed">{t}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {expandedCourse !== course.name && (
                    <p className="text-xs text-muted-foreground">{course.topics.length} topics covered</p>
                  )}
                </motion.div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div className="text-center mt-10">
            <Link to="/contact">
              <Button className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-8 text-sm shadow-lg shadow-accent/20">
                Enroll Now <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

/* ═══════════════════════════════════════════════════
   SERVICE DETAIL VIEW (Department Style)
   ═══════════════════════════════════════════════════ */
const ServiceDetail = ({ service }: { service: typeof serviceCategories[0] }) => (
  <AnimatePresence mode="wait">
    <motion.div
      key={service.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35 }}
    >
      {/* Banner */}
      <div className="relative rounded-2xl overflow-hidden mb-12 h-52 md:h-72">
        <img src={service.bannerImage} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent flex items-center">
          <div className="px-8 md:px-12 max-w-2xl">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 leading-tight">{service.title}</h2>
            <p className="text-accent font-semibold text-sm md:text-base">{service.tagline}</p>
          </div>
        </div>
      </div>

      {/* Description + Image */}
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
        <AnimatedSection variant="fadeLeft">
          <h3 className="text-xl md:text-2xl font-bold mb-4">Overview</h3>
          <p className="text-muted-foreground leading-relaxed text-[15px] mb-4">{service.description}</p>
          <p className="text-muted-foreground leading-relaxed text-[15px] mb-6">{service.extendedDesc}</p>
          <Link to="/contact">
            <Button className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-8 text-sm shadow-lg shadow-accent/20">
              Get a Free Consultation <ArrowRight size={16} />
            </Button>
          </Link>
        </AnimatedSection>
        <AnimatedSection delay={0.2} variant="fadeRight">
          <div className="relative">
            <div className="absolute -inset-4 gradient-flame opacity-10 blur-3xl rounded-3xl" />
            <img src={service.image} alt={service.title} width={1024} height={640} loading="lazy" className="relative rounded-2xl border border-border/60 shadow-2xl" />
          </div>
        </AnimatedSection>
      </div>

      {/* What We Offer — Features Grid */}
      <div className="mb-16">
        <AnimatedSection className="text-center mb-10" variant="blur">
          <span className="section-label">What We Offer</span>
          <h3 className="text-xl md:text-2xl font-bold">Comprehensive Service Capabilities</h3>
        </AnimatedSection>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {service.features.map((f) => (
            <motion.div key={f.text} variants={staggerItem}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px hsl(28 95% 52% / 0.15)" }}
                className="card-professional p-6 h-full group"
              >
                <div className="w-12 h-12 rounded-xl gradient-flame flex items-center justify-center mb-4 shadow-md shadow-accent/20 group-hover:shadow-lg group-hover:shadow-accent/30 transition-shadow">
                  <f.icon size={22} className="text-accent-foreground" />
                </div>
                <h4 className="text-base font-bold mb-2">{f.text}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Departments */}
      <div className="mb-8">
        <AnimatedSection className="text-center mb-12" variant="blur">
          <span className="section-label">Departments</span>
          <h3 className="text-xl md:text-2xl font-bold mb-3">Our Specialized Departments</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm leading-relaxed">
            Each department brings focused expertise to deliver excellence in their domain.
          </p>
        </AnimatedSection>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {service.departments.map((dept, i) => (
            <motion.div key={dept.title} variants={staggerItem}>
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 40px -12px hsl(28 95% 52% / 0.15)" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="card-professional overflow-hidden h-full"
              >
                <div className="relative h-44 overflow-hidden">
                  <img src={dept.image} alt={dept.title} className="w-full h-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 backdrop-blur-sm px-3 py-1 rounded-full border border-accent/20">
                      Department {i + 1}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-3">{dept.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{dept.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-10">
          <Link to="/contact">
            <Button className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-8 text-sm shadow-lg shadow-accent/20">
              Discuss Your Requirements <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </div>

      {/* Course Catalog (Hagni's Ignite Program only) */}
      {(service as any).hasCourses && <CourseCatalog />}
    </motion.div>
  </AnimatePresence>
);

/* ═══════════════════════════════════════════════════
   SERVICES TAB SECTION
   ═══════════════════════════════════════════════════ */
const ServicesTabSection = () => {
  const location = useLocation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const idx = serviceCategories.findIndex((c) => c.id === hash);
      if (idx >= 0) setActive(idx);
    }
  }, [location.hash]);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {serviceCategories.map((cat, i) => (
            <button
              key={cat.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                active === i
                  ? "gradient-flame text-accent-foreground shadow-lg shadow-accent/20"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              <cat.icon size={18} />
              {cat.label}
            </button>
          ))}
        </div>
        <ServiceDetail service={serviceCategories[active]} />
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════
   CTA
   ═══════════════════════════════════════════════════ */
const CTASection = () => (
  <section className="section-dark relative overflow-hidden py-16 lg:py-24">
    <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(ellipse at 50% 50%, hsl(28,95%,52%) 0%, transparent 60%)" }} />
    <FloatingElements />
    <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
      <AnimatedSection variant="scale">
        <h2 className="text-3xl md:text-4xl font-extrabold text-hero-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-hero-foreground/60 max-w-xl mx-auto mb-8 leading-relaxed">Tell us about your project and let's build something extraordinary together.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="gradient-flame text-accent-foreground font-semibold border-0 gap-2 h-12 px-7 text-sm shadow-lg shadow-accent/20">
              Schedule a Consultation <ArrowRight size={16} />
            </Button>
          </Link>
          <Link to="/partners">
            <Button size="lg" variant="outline" className="border-hero-foreground/20 text-hero-foreground bg-transparent hover:bg-hero-foreground/5 h-12 px-7 text-sm">
              Partner With Us
            </Button>
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════ */
const Services = () => (
  <div className="min-h-screen">
     <SEOHead
      title="Services — Web, Mobile, Cloud, AI, Digital Marketing & Training | Hagni Technologies"
      description="Explore Hagni Technologies' full range of services: Web & Mobile Development, Cloud & DevOps, Digital Marketing, AI Solutions, and Professional Training courses."
      keywords="web development services, mobile app development, cloud devops services, digital marketing agency, AI solutions, IT training courses, Hagni Technologies services"
      canonical="https://hagnitechnologies.com/services"
      jsonLd={{ "@context": "https://schema.org", "@type": "Service", provider: { "@type": "Organization", name: "Hagni Technologies" }, name: "Technology Services", description: "Full-stack digital services." }}
    />
    <Navbar />
    <HeroSection />
    <ServicesTabSection />
    <CTASection />
    <Footer />
  </div>
);

export default Services;
