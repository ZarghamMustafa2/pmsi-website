# PMSI Administrative Dashboard & Backend System
## Architectural Planning & System Specification (Phase 3)

> **Document Status:** Planning & Technical Architecture Only  
> **Target Release:** Subsequent Phase (Pending Explicit Authorization)  
> **Implementation Policy:** Strictly not implemented in Phase 3.

---

### 1. Executive Summary & Objective

The Pakistan Minorities Support Initiative (PMSI) administrative platform will serve as a secure, role-governed back-office system to empower authorized leadership, communications staff, and program managers to manage public portal content, review institutional partnership inquiries, publish verified organizational updates, and maintain rigorous document custody.

---

### 2. Recommended Technology Stack & Architecture

To maintain maximum compatibility and developer efficiency with the existing Vite + React 19 + TypeScript frontend, the following backend architecture is recommended:

| Layer | Recommended Technology | Justification |
| :--- | :--- | :--- |
| **Backend Runtime** | Node.js (v20+ LTS) with Fastify / Express or NestJS | High throughput, native TypeScript support, shares types with the frontend |
| **API Architecture** | RESTful or tRPC with Zod schema validation | End-to-end type safety, rigorous payload validation, self-documenting endpoints |
| **Database** | PostgreSQL (v16+) with Prisma ORM | Relational integrity for inquiries, audit logs, program schemas, and ACID compliance |
| **Authentication** | Argon2 password hashing + JWT / HTTP-only Secure Session Cookies with MFA (TOTP) | Defense-in-depth security, prevents XSS token theft, enforces multi-factor access |
| **Asset Storage** | S3-compatible object storage (e.g., Cloudflare R2 / AWS S3) with signed URLs | Secure storage for approved documents, verified audit statements, and high-res photos |
| **Email Transport** | Resend / SendGrid / NodeMailer with DKIM, SPF & DMARC | Reliable, verified delivery of inquiry alerts and administrative notifications |

---

### 3. Core Functional Modules

#### Module 1: Program & Project Management
- **Program Editor:** Structured rich-text and JSON-schema editor for the 6 core humanitarian programs (`Minority Rights`, `Transgender Inclusion`, `Disaster Relief`, `Child Welfare`, `Education`, and `Community Welfare`).
- **Proposed Project Registry:** Manage specific project concept notes, target geographical corridors, required bilateral funding scopes, and proposed execution timelines.
- **Milestone Tracking:** Transition proposed projects into active interventions upon verified funding covenant execution.

#### Module 2: Partnership Inquiry & Lead Management
- **Inquiry Queue:** Secure administrative table listing incoming partnership expressions and contact requests.
- **Workflow Pipeline:** Status tagging (`New`, `Under Review`, `Bilateral Dialogue Scheduled`, `Archived`, `Spam`).
- **Communication Logs:** Internal notes on meeting outcomes and partner commitments without exposing donor data publicly.
- **Export & Reporting:** Anonymized, aggregated reporting on donor interest trends for board briefings.

#### Module 3: Approved Public Content & News Updates
- **Verified Updates Publisher:** Drafting, reviewing, and publishing formal press statements, situational reports on flood emergencies, and event notices.
- **Publication Gatekeeping:** Two-person approval rule: content drafted by communications staff requires editorial approval by executive leadership before public rendering.

#### Module 4: Document & Legal Disclosure Repository
- **Official Filing Management:** Secure repository for domestic legal registration certificates (upon completion), tax exemptions, and statutory auditor statements.
- **Controlled Public Access:** Tagging documents as `Internal Only`, `Registered Donors Under NDA`, or `Public Transparency Repository`.

#### Module 5: Future Image & Media Asset Management
- **Approved Asset Library:** Centralized repository for actual organizational photographs when supplied in future phases.
- **Safeguarding Compliance Checks:** Mandatory metadata check verifying that images of minors or vulnerable beneficiaries possess signed consent and conform to PMSI’s non-exposure safeguarding policies.
- **Automated Web Optimization:** On-the-fly WebP conversion, thumbnail generation, and metadata stripping for security.

#### Module 6: Role-Based Administrative Access Control (RBAC)
Granular, least-privilege permission matrix:

| Role | Permissions |
| :--- | :--- |
| **Super Administrator** | Full system control, user provisioning, audit log inspection, environment configuration. |
| **Executive Director** | Read/write access to all programs, inquiry approvals, and public document releases. |
| **Program Coordinator** | View relevant programmatic inquiries, draft program updates, propose project briefs. |
| **Communications Officer**| Draft public statements, upload media assets, manage website text (subject to approval). |
| **Auditor / Compliance** | Read-only access to financial records, inquiry logs, and governance documentation. |

---

### 4. Security, Auditability & Compliance Standards

1. **Immutable Audit Logs:** Every administrative action (login, content modification, inquiry review, status change) is recorded in an append-only database table capturing timestamp, user ID, IP address, and payload diff.
2. **Multi-Factor Authentication (MFA):** Mandatory TOTP (Google Authenticator / 1Password) for all administrative accounts.
3. **Rate Limiting & Brute Force Defense:** Progressive delay and IP lockout after 5 consecutive failed login attempts.
4. **Data Minimization:** No storage of non-essential personal information; automated data pruning for inquiries archived longer than 24 months.

---

### 5. Implementation Roadmap for Subsequent Phases

```
┌────────────────────────────────────────────────────────┐
│ Phase 4: Backend API & Database Infrastructure Setup   │
│ - Deploy PostgreSQL database with Prisma schema        │
│ - Configure Node.js server with JWT/Cookie auth & RBAC │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│ Phase 5: Admin UI & Program Content Management Engine  │
│ - Build React administrative dashboard interface       │
│ - Connect live /api/inquiry inbox and review workflow  │
└───────────────────────────┬────────────────────────────┘
                            │
┌───────────────────────────▼────────────────────────────┐
│ Phase 6: Verified Media Management & Document Portal   │
│ - Integrate S3 object storage with safeguarding checks │
│ - Publish authenticated transparency repository       │
└────────────────────────────────────────────────────────┘
```
