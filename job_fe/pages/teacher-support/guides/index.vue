<template>
  <div class="ts-guides-page">
    <header class="guides-hero">
      <div class="ts-container">
        <nav class="ts-breadcrumbs" aria-label="Breadcrumbs">
          <NuxtLink to="/teacher-support">Teacher Support</NuxtLink>
          <span class="sep">/</span>
          <span class="current">Useful Guides</span>
        </nav>

        <span class="hero-pill">PRACTICAL KNOWLEDGE BASE</span>
        <h1 class="hero-title">Essential Legal &amp; Relocation Guides for Teachers in Vietnam</h1>
        <p class="hero-desc">
          No jargon, no outdated forum advice. Clear, up-to-date practical explanations written in native English to help you navigate Vietnamese consular procedures, immigration regulations, and classroom life.
        </p>
      </div>
    </header>

    <main class="guides-content">
      <div class="ts-container">
        <div class="guides-grid">
          <article
            v-for="guide in guideArticles"
            :key="guide.id"
            class="guide-card"
          >
            <div class="card-meta">
              <span class="guide-tag">{{ guide.category }}</span>
              <span class="guide-readtime">{{ guide.readTime }}</span>
            </div>

            <h2 class="guide-title">{{ guide.title }}</h2>
            <p class="guide-excerpt">{{ guide.excerpt }}</p>

            <div class="guide-highlights">
              <div v-for="(hl, i) in guide.keyTakeaways" :key="i" class="hl-item">
                <span class="hl-bullet">&bull;</span>
                <span>{{ hl }}</span>
              </div>
            </div>

            <div class="guide-footer">
              <NuxtLink
                :to="{ path: '/teacher-support/your-situation', query: { guide: guide.slug } }"
                class="btn-guide-action"
              >
                <span>Need help with this? Ask us &rarr;</span>
              </NuxtLink>
            </div>
          </article>
        </div>

        <!-- Guides Bottom Help Box -->
        <section class="guides-help-card">
          <div class="help-text">
            <h3>Can't find the answer to your specific paperwork issue?</h3>
            <p>Our bilingual educator desk reviews document scans and offers personalized roadmap advice within 1–2 business hours.</p>
          </div>
          <NuxtLink to="/teacher-support/your-situation" class="btn-help-primary">
            Submit Your Question &rarr;
          </NuxtLink>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const guideArticles = [
  {
    id: 1,
    slug: 'vietnam-consular-legalization-guide',
    category: 'Consular & Apostille',
    readTime: '6 min read',
    title: 'The Complete Vietnam Consular Legalization Guide for Teachers (2026)',
    excerpt: 'Step-by-step breakdown of certifying degrees, university transcripts, and 120-hour TEFL certificates for UK, US, South African, Canadian, and Australian educators.',
    keyTakeaways: [
      'Why Vietnam does not accept Hague Apostille directly without MOFA authentication',
      'Original degrees vs certified true copies from a notary public',
      'Embassy consular submission checklists and typical processing days',
    ],
  },
  {
    id: 2,
    slug: 'work-permit-trc-decree-152-guide',
    category: 'Work Permits & TRC',
    readTime: '8 min read',
    title: 'How to Get a Vietnam Work Permit & 2-Year TRC Card',
    excerpt: 'Detailed explanation of labor requirements under Decree 152/2020/ND-CP and Decree 70/2023. What counts as 3 years of experience and approved hospital health checks.',
    keyTakeaways: [
      'Foreign labor demand justification (Giải trình nhu cầu lao động)',
      'Authorized medical examination facilities in Hanoi, Da Nang, and HCMC',
      'How to sponsor your spouse and children for dependent TRC (TT visa)',
    ],
  },
  {
    id: 3,
    slug: 'filipino-teachers-dmw-naia-guide',
    category: 'Filipino Educators',
    readTime: '7 min read',
    title: 'Filipino Teachers Relocating to Vietnam: NAIA & DMW/POEA Survival Guide',
    excerpt: 'A comprehensive pre-departure guide specifically crafted for licensed and qualified Filipino teachers traveling to Vietnam without risking airport offloading.',
    keyTakeaways: [
      'Essential travel folders and questions asked by NAIA immigration officers',
      'CAV (CHED), DFA Apostille, and NBI clearances explained',
      'PRC teacher license vs non-PRC degree holder options in Vietnamese bilingual schools',
    ],
  },
  {
    id: 4,
    slug: 'vietnam-police-check-ly-lich-tu-phap',
    category: 'Local Logistics',
    readTime: '5 min read',
    title: 'Getting Your Vietnam Police Clearance (Lý Lịch Tư Pháp Số 1)',
    excerpt: 'If you have lived in Vietnam for more than 6 months, you must obtain a local criminal record check from the Department of Justice. Here is how to file without headaches.',
    keyTakeaways: [
      'Police check No. 1 vs No. 2: Which one is required for Work Permits',
      'The crucial role of temporary residence registration',
      'Online filing vs in-person submission at Sở Tư Pháp',
    ],
  },
  {
    id: 5,
    slug: 'changing-schools-work-permit-transfer',
    category: 'Career Transition',
    readTime: '6 min read',
    title: 'Changing Schools in Vietnam: Can Your Work Permit & TRC Be Transferred?',
    excerpt: 'What happens when your contract ends? How to obtain an official release letter, cancel your existing TRC safely, and avoid exit visa complications.',
    keyTakeaways: [
      'Official labor termination decision and TRC return protocol',
      'Transferring work permits between schools without leaving Vietnam',
      'Protecting yourself against unreasonable school penalty demands',
    ],
  },
  {
    id: 6,
    slug: 'teaching-salaries-cost-of-living-vietnam',
    category: 'Living in Vietnam',
    readTime: '7 min read',
    title: 'Teaching Salaries & Cost of Living in Vietnam: Hanoi vs HCMC vs Da Nang',
    excerpt: 'A realistic, data-backed financial overview of typical monthly expenses, apartment rent, food, healthcare, and savings potential for international teachers.',
    keyTakeaways: [
      'Salary ranges by school tier (English centers, bilingual, and international schools)',
      'Monthly budget breakdown for single teachers and teaching couples',
      'Taxes (PIT), social insurance withholding, and remittance back to your home country',
    ],
  },
]

useSeoMeta({
  title: 'Useful Legal & Teaching Guides for Vietnam | GetTeachingJobs',
  description: 'Practical guides on consular legalization, Work Permits, TRC cards, Filipino pre-departure clearance, and living in Vietnam for international educators.',
})
</script>

<style scoped lang="scss">
.ts-guides-page {
  background: #ffffff;
  min-height: 100vh;
  color: #1e293b;
}

.ts-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

.ts-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 20px;

  a { color: #475569; text-decoration: none; &:hover { color: #2563eb; } }
  .sep { color: #cbd5e1; }
  .current { color: #0f274a; font-weight: 700; }
}

.guides-hero {
  padding: 44px 0 48px;
  background: linear-gradient(180deg, #edf4fe 0%, #f8fafc 100%);
  border-bottom: 1px solid rgba(219, 234, 254, 0.65);

  .hero-pill {
    display: inline-block;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #2563eb;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 999px;
    padding: 3px 12px;
    margin-bottom: 14px;
  }

  .hero-title {
    font-size: clamp(28px, 3.8vw, 42px);
    font-weight: 800;
    color: #0f274a;
    line-height: 1.25;
    letter-spacing: -0.02em;
    margin: 0 0 14px;
    max-width: 860px;
  }

  .hero-desc {
    font-size: clamp(15px, 1.8vw, 17px);
    line-height: 1.65;
    color: #475569;
    max-width: 780px;
    margin: 0;
  }
}

.guides-content {
  padding: 64px 0 96px;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 28px;
  margin-bottom: 64px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  .guide-card {
    display: flex;
    flex-direction: column;
    padding: 28px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 18px;
    box-shadow: 0 4px 14px -2px rgba(15, 23, 42, 0.03);
    transition: all 0.2s ease;

    &:hover {
      border-color: #bfdbfe;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px -6px rgba(37, 99, 235, 0.08);
    }

    .card-meta {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 12px;

      .guide-tag {
        font-size: 11.5px;
        font-weight: 700;
        color: #2563eb;
        background: #eff6ff;
        border-radius: 6px;
        padding: 3px 8px;
      }

      .guide-readtime {
        font-size: 12px;
        color: #64748b;
      }
    }

    .guide-title {
      font-size: 18px;
      font-weight: 800;
      color: #0f274a;
      line-height: 1.35;
      margin: 0 0 10px;
    }

    .guide-excerpt {
      font-size: 14px;
      color: #64748b;
      line-height: 1.55;
      margin: 0 0 18px;
    }

    .guide-highlights {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 14px;
      background: #f8fafc;
      border-radius: 12px;
      margin-bottom: 22px;

      .hl-item {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        font-size: 13px;
        color: #334155;
        line-height: 1.45;

        .hl-bullet {
          color: #2563eb;
          font-weight: 800;
        }
      }
    }

    .guide-footer {
      margin-top: auto;
      padding-top: 14px;
      border-top: 1px solid #f1f5f9;

      .btn-guide-action {
        font-size: 13.5px;
        font-weight: 700;
        color: #2563eb;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

.guides-help-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 32px 36px;
  background: #f8fafc;
  border: 1.5px dashed #cbd5e1;
  border-radius: 18px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  .help-text {
    h3 {
      font-size: 18px;
      font-weight: 800;
      color: #0f274a;
      margin: 0 0 6px;
    }
    p {
      font-size: 14px;
      color: #64748b;
      margin: 0;
      line-height: 1.5;
    }
  }

  .btn-help-primary {
    padding: 12px 22px;
    background: #0f274a;
    color: #ffffff;
    font-size: 14px;
    font-weight: 700;
    border-radius: 10px;
    text-decoration: none;
    white-space: nowrap;
    transition: all 0.15s ease;

    &:hover {
      background: #1e3a8a;
    }
  }
}
</style>
