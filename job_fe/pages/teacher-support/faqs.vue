<template>
  <div class="ts-faqs-page">
    <header class="faqs-hero">
      <div class="ts-container">
        <nav class="ts-breadcrumbs" aria-label="Breadcrumbs">
          <NuxtLink to="/teacher-support">Teacher Support</NuxtLink>
          <span class="sep">/</span>
          <span class="current">Frequently Asked Questions</span>
        </nav>

        <div class="hero-center">
          <span class="hero-pill">TRANSPARENT ANSWERS</span>
          <h1 class="hero-title">Teacher Support FAQs</h1>
          <p class="hero-desc">
            Clear answers to common questions about teaching in Vietnam, visas, document legalization, work permits, and relocation.
          </p>

          <!-- Interactive Search Input -->
          <div class="faq-search-box">
            <svg class="search-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              class="faq-search-input"
              placeholder="Search questions (e.g. degree, TEFL, tourist visa, TRC, Filipino)..."
              aria-label="Search FAQs"
            />
            <button
              v-if="searchQuery"
              type="button"
              class="search-clear-btn"
              aria-label="Clear search"
              @click="searchQuery = ''"
            >
              ✕
            </button>
          </div>

          <!-- Category Filter Tabs with Counts -->
          <div class="faq-tabs">
            <button
              v-for="cat in categories"
              :key="cat.id"
              type="button"
              class="tab-btn"
              :class="{ 'is-active': activeCategory === cat.id && !searchQuery }"
              @click="selectCategory(cat.id)"
            >
              <span>{{ cat.label }}</span>
              <span class="tab-count">{{ getCategoryCount(cat.id) }}</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="faqs-content">
      <div class="ts-container">
        <div class="faqs-wrapper">
          <!-- Active search indicator bar -->
          <div v-if="searchQuery" class="search-status-bar">
            <span>
              Found <strong>{{ filteredFaqs.length }}</strong> question{{ filteredFaqs.length === 1 ? '' : 's' }} matching "<strong>{{ searchQuery }}</strong>"
            </span>
            <button type="button" class="btn-reset-filter" @click="resetSearch">
              Reset search
            </button>
          </div>

          <!-- Accordion List -->
          <div v-if="filteredFaqs.length > 0" class="faqs-accordion">
            <div
              v-for="(faq, index) in filteredFaqs"
              :key="`${faq.cat}-${index}`"
              class="faq-item"
              :class="{ 'is-open': openIndex === index }"
            >
              <button
                type="button"
                class="faq-trigger"
                :aria-expanded="openIndex === index"
                @click="toggleFaq(index)"
              >
                <div class="faq-question-wrap">
                  <div class="faq-badge-row">
                    <span class="faq-category-tag">
                      {{ getCategoryLabel(faq.cat) }}
                    </span>
                  </div>
                  <h3 class="faq-question-text">{{ faq.q }}</h3>
                </div>

                <div class="faq-icon-circle" aria-hidden="true">
                  <svg class="chevron-svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </div>
              </button>

              <div v-show="openIndex === index" class="faq-answer-panel">
                <div class="answer-inner">
                  <p>{{ faq.a }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Empty State when no results found -->
          <div v-else class="faq-empty-state">
            <div class="empty-icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </div>
            <h3>No matching questions found</h3>
            <p>We couldn't find any questions matching "<strong>{{ searchQuery }}</strong>". Try another keyword or submit your inquiry to our specialist.</p>
            <button type="button" class="btn-clear-search" @click="resetSearch">
              View All Questions
            </button>
          </div>

          <!-- Still have questions banner -->
          <section class="faqs-contact-box">
            <div class="contact-box-inner">
              <span class="contact-pill">DIRECT SPECIALIST SUPPORT</span>
              <h3>Have a question about your specific documents?</h3>
              <p>Every case depends on your passport nationality, degree issuing country, and school license. Ask our educator specialist directly for free.</p>
              <div class="contact-actions">
                <NuxtLink to="/teacher-support/your-situation" class="btn-primary">
                  <span>Submit Your Situation (Free) &rarr;</span>
                </NuxtLink>
                <a
                  href="https://wa.me/84946682798"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-whatsapp"
                >
                  <svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.043.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeCategory = ref('all')
const openIndex = ref<number | null>(0)
const searchQuery = ref('')

const toggleFaq = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const selectCategory = (catId: string) => {
  activeCategory.value = catId
  searchQuery.value = ''
  openIndex.value = 0
}

const resetSearch = () => {
  searchQuery.value = ''
  activeCategory.value = 'all'
  openIndex.value = 0
}

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'job-placement', label: 'Job Placement' },
  { id: 'visa', label: 'Visa & Entry' },
  { id: 'apostille', label: 'Apostille & Legalization' },
  { id: 'work-permit', label: 'Work Permit & TRC' },
  { id: 'filipino', label: 'Filipino Teachers (COE)' },
  { id: 'relocation', label: 'Relocation & Settlement' },
  { id: 'pricing', label: 'Pricing & Process' },
]

const getCategoryLabel = (catId: string) => {
  const cat = categories.find(c => c.id === catId)
  return cat ? cat.label : ''
}

const allFaqs = [
  // Job Placement
  {
    cat: 'job-placement',
    q: 'Can I teach in Vietnam without a degree?',
    a: "In most cases, no. For a work permit as a teacher, you usually need a bachelor's degree and a teaching certificate. From 5 December 2026, there is also a route for experts with 5 years of relevant experience and no degree, but it depends on your role and the province. Check with your school first.",
  },
  {
    cat: 'job-placement',
    q: 'Do you charge teachers for job placement?',
    a: 'We do not take a fee from your salary. Your contract is with the school. Ask us for the exact placement terms for your case before you decide.',
  },

  // Visa
  {
    cat: 'visa',
    q: 'Can I work in Vietnam on a tourist e-visa?',
    a: 'No. A tourist e-visa does not allow you to work. You need a work permit or an exemption first, then an LD1 or LD2 work visa, or a TRC.',
  },
  {
    cat: 'visa',
    q: 'I entered on an e-visa. Can I switch to a work visa without leaving Vietnam?',
    a: 'Sometimes, yes. You can change purpose only if you entered on an e-visa and you already have a work permit or an exemption confirmation, and you are sponsored to work. You must get the work permit first. You cannot work while it is still pending.',
  },
  {
    cat: 'visa',
    q: 'What is a DN1 Business Visa?',
    a: 'DN1 is a business visa for foreigners who come to work with a company, school, or licensed organisation in Vietnam. It needs an approval letter from the Immigration Department, sponsored by your school or company. It is not a work visa by itself.',
  },

  // Apostille & Consular Legalization
  {
    cat: 'apostille',
    q: 'Do I need to send my original degree to Vietnam?',
    a: 'No, not for the first check. Clear colour scans are enough to review your case. For the formal file, you usually need an apostilled or legalized certified copy, plus a certified Vietnamese translation. You still need your original to make that certified copy.',
  },
  {
    cat: 'apostille',
    q: 'Does Vietnam accept an Apostille now?',
    a: 'Yes. Since 11 September 2026, Vietnam is a party to the Hague Apostille Convention. A public document with a valid Apostille from a member country is accepted without consular legalization at a Vietnamese embassy. Consular legalization is still needed for Germany, Austria, the Czech Republic, and countries outside the Convention.',
  },
  {
    cat: 'apostille',
    q: 'Can my online TEFL certificate be legalized?',
    a: 'Often, yes, if it can be verified and notarized in the issuing country. The law does not set a number of hours, but employers usually ask for 120 hours. Acceptance also depends on your school and the province, so check before you pay for legalization.',
  },

  // Work Permit & TRC
  {
    cat: 'work-permit',
    q: 'What do I need for a Work Permit?',
    a: "Your employer files the application, not you alone. You usually need a bachelor's degree or other proof for your role, a teaching certificate if you teach, a police clearance issued within 6 months, and a health check issued within 12 months. The authority decides within 10 working days of a complete file. A permit lasts up to 2 years and can be extended once, for up to 2 years.",
  },
  {
    cat: 'work-permit',
    q: 'What is the difference between a Work Permit and a TRC?',
    a: 'A Work Permit lets you work legally for one specific employer. A TRC is a residence card issued by the Immigration Department based on your Work Permit. It lets you live in Vietnam and enter multiple times for 1 to 2 years, depending on your permit.',
  },
  {
    cat: 'work-permit',
    q: 'Can my Work Permit be extended every year?',
    a: 'No. It can be extended only once, for up to 2 years. After that, your employer must apply for a new permit.',
  },

  // Filipino Teachers - COE Support
  {
    cat: 'filipino',
    q: 'What do I need to leave the Philippines to teach in Vietnam?',
    a: 'You need a verified school contract and DMW clearance. For most first-time workers, that means an OEC. The DMW is the agency that took over from the former POEA. Returning workers to the same employer and jobsite may use an exemption or the OFW Pass instead. Check your case before you fly, because airport offloading is a real risk without the right papers.',
  },
  {
    cat: 'filipino',
    q: 'Do I need a PRC license to teach English in Vietnam?',
    a: 'No, a PRC license is a Philippine license, not a Vietnam work permit requirement. For Vietnam, you usually need a degree and a teaching certificate. Non-native English teachers also need to show English proficiency, for example IELTS 6.5 or an equivalent. Some international or bilingual schools may still prefer a PRC license, so ask your school.',
  },

  // Other Supports - Relocation
  {
    cat: 'relocation',
    q: 'Do I need a Vietnamese police clearance (Ly Lich Tu Phap No. 1)?',
    a: 'If you have lived in Vietnam and you apply for a new work permit or a TRC, yes, usually No. 1. Since 1 March 2025, it is issued by the provincial police under the Ministry of Public Security, not the Department of Justice. If you have just arrived, you usually use a police clearance from your home country instead.',
  },
  {
    cat: 'relocation',
    q: 'Do I need to register my temporary residence (tam tru)?',
    a: 'Yes. Your accommodation, usually your landlord or hotel, must declare your stay to the police. Since 24 July 2026, this is done on the Ministry of Public Security electronic system as soon as you arrive. Keep the confirmation, you will need it for your TRC and police clearance.',
  },

  // Pricing & Process
  {
    cat: 'pricing',
    q: 'How does your pricing work?',
    a: 'Government fees and our service fee are listed separately in your quote. You see the quote before anything is submitted. No work starts until you agree.',
  },
  {
    cat: 'pricing',
    q: 'How fast do you reply?',
    a: 'We reply within 1 to 2 business hours during office hours, Monday to Friday, 8:00 AM to 6:00 PM ICT. If you write outside those hours, we reply on the next business day.',
  },
  {
    cat: 'pricing',
    q: 'Can you guarantee my visa or Work Permit will be approved?',
    a: 'No. No service can guarantee approval. The final decision is made by the Vietnamese authorities. What we can do is check your documents first, tell you what is missing, and file a complete application.',
  },
]

const getCategoryCount = (catId: string) => {
  if (catId === 'all') return allFaqs.length
  return allFaqs.filter(f => f.cat === catId).length
}

const filteredFaqs = computed(() => {
  let list = allFaqs
  if (activeCategory.value !== 'all') {
    list = list.filter(f => f.cat === activeCategory.value)
  }
  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase().trim()
    list = list.filter(f => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q))
  }
  return list
})

// FAQPage Schema for Google Rich Snippets
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': allFaqs.map(f => ({
          '@type': 'Question',
          'name': f.q,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': f.a,
          },
        })),
      }),
    },
  ],
})

useSeoMeta({
  title: 'Teacher Support & Legalization FAQs in Vietnam | GetTeachingJobs',
  description: 'Answers to essential questions about teaching in Vietnam, job placement, consular legalization, Apostille, Work Permits, TRC cards, and Filipino teacher compliance.',
})
</script>

<style scoped lang="scss">
.ts-faqs-page {
  background: #ffffff;
  min-height: 100vh;
  color: #1e293b;
}

.ts-container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 24px;
}

.ts-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 24px;

  a {
    color: #475569;
    text-decoration: none;
    transition: color 0.15s ease;
    &:hover {
      color: #2563eb;
    }
  }
  .sep {
    color: #cbd5e1;
  }
  .current {
    color: #0f274a;
    font-weight: 700;
  }
}

/* ==========================================================================
   Hero Section
   ========================================================================== */
.faqs-hero {
  padding: 40px 0 44px;
  background: linear-gradient(180deg, #edf4fe 0%, #ffffff 100%);
  border-bottom: 1px solid rgba(219, 234, 254, 0.65);

  .hero-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 820px;
    margin: 0 auto;
  }

  .hero-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #2563eb;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 999px;
    padding: 4px 14px;
    margin-bottom: 16px;
  }

  .hero-title {
    font-size: clamp(28px, 4vw, 42px);
    font-weight: 800;
    color: #0f274a;
    line-height: 1.22;
    letter-spacing: -0.025em;
    margin: 0 0 14px;
  }

  .hero-desc {
    font-size: clamp(15px, 1.8vw, 17px);
    line-height: 1.6;
    color: #475569;
    max-width: 660px;
    margin: 0 0 32px;
  }

  /* Search Input */
  .faq-search-box {
    position: relative;
    width: 100%;
    max-width: 640px;
    margin: 0 auto 32px;

    .search-icon {
      position: absolute;
      left: 18px;
      top: 50%;
      transform: translateY(-50%);
      width: 20px;
      height: 20px;
      color: #94a3b8;
      pointer-events: none;
    }

    .faq-search-input {
      width: 100%;
      padding: 14px 44px 14px 48px;
      font-size: 15px;
      color: #0f274a;
      background: #ffffff;
      border: 1.5px solid #cbd5e1;
      border-radius: 9999px;
      box-shadow: 0 4px 16px -2px rgba(15, 23, 42, 0.06);
      outline: none;
      transition: all 0.2s ease;
      box-sizing: border-box;

      &::placeholder {
        color: #94a3b8;
      }

      &:focus {
        border-color: #2563eb;
        box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.12);
      }
    }

    .search-clear-btn {
      position: absolute;
      right: 14px;
      top: 50%;
      transform: translateY(-50%);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #e2e8f0;
      color: #64748b;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      transition: all 0.15s ease;

      &:hover {
        background: #cbd5e1;
        color: #0f172a;
      }
    }
  }

  /* Category Filter Tabs */
  .faq-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;

    .tab-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      font-size: 13px;
      font-weight: 600;
      color: #475569;
      background: #ffffff;
      border: 1px solid #cbd5e1;
      border-radius: 999px;
      cursor: pointer;
      transition: all 0.15s ease;

      .tab-count {
        font-size: 11px;
        font-weight: 700;
        background: #f1f5f9;
        color: #64748b;
        padding: 1px 7px;
        border-radius: 999px;
        transition: all 0.15s ease;
      }

      &:hover {
        background: #f8fafc;
        border-color: #94a3b8;
        color: #0f172a;
      }

      &.is-active {
        background: #0f274a;
        color: #ffffff;
        border-color: #0f274a;
        box-shadow: 0 2px 8px rgba(15, 39, 74, 0.2);

        .tab-count {
          background: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }
      }
    }
  }
}

/* ==========================================================================
   Content Area & Accordion
   ========================================================================== */
.faqs-content {
  padding: 48px 0 96px;

  .faqs-wrapper {
    max-width: 860px;
    margin: 0 auto;
  }

  /* Search status bar */
  .search-status-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 18px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    margin-bottom: 20px;
    font-size: 14px;
    color: #475569;

    strong {
      color: #0f274a;
    }

    .btn-reset-filter {
      background: none;
      border: none;
      color: #2563eb;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: underline;
      padding: 0;

      &:hover {
        color: #1d4ed8;
      }
    }
  }

  .faqs-accordion {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 56px;
  }

  .faq-item {
    border: 1px solid #e2e8f0;
    border-radius: 16px;
    background: #ffffff;
    overflow: hidden;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);

    &:hover {
      border-color: #cbd5e1;
      transform: translateY(-1px);
      box-shadow: 0 6px 18px -4px rgba(15, 23, 42, 0.05);
    }

    &.is-open {
      border-color: #93c5fd;
      box-shadow: 0 10px 28px -6px rgba(37, 99, 235, 0.09);
    }

    .faq-trigger {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding: 20px 24px;
      background: transparent;
      border: none;
      text-align: left;
      cursor: pointer;

      .faq-question-wrap {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 6px;
        flex: 1;

        .faq-badge-row {
          display: flex;
          align-items: center;
          margin-bottom: 2px;
        }

        .faq-category-tag {
          display: inline-block;
          font-size: 11.5px;
          font-weight: 500;
          color: #64748b;
          background: #f1f5f9;
          padding: 2.5px 8px;
          border-radius: 5px;
          line-height: 1.35;
        }

        .faq-question-text {
          font-size: 16.5px;
          font-weight: 700;
          color: #0f274a;
          line-height: 1.4;
          margin: 0;
          letter-spacing: -0.01em;
        }
      }

      .faq-icon-circle {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        color: #64748b;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        transition: all 0.25s ease;

        .chevron-svg {
          width: 16px;
          height: 16px;
          transition: transform 0.25s ease;
        }
      }
    }

    &.is-open .faq-trigger {
      .faq-icon-circle {
        background: #2563eb;
        border-color: #2563eb;
        color: #ffffff;
      }

      .chevron-svg {
        transform: rotate(180deg);
      }
    }

    .faq-answer-panel {
      border-top: 1px solid #f1f5f9;
      background: #fafcff;

      .answer-inner {
        padding: 18px 24px 22px;

        p {
          font-size: 14.5px;
          color: #334155;
          line-height: 1.7;
          margin: 0;
        }
      }
    }
  }

  /* Empty State */
  .faq-empty-state {
    padding: 60px 24px;
    text-align: center;
    background: #f8fafc;
    border: 1.5px dashed #cbd5e1;
    border-radius: 20px;
    margin-bottom: 56px;

    .empty-icon-box {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      background: #eff6ff;
      color: #2563eb;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;

      svg {
        width: 26px;
        height: 26px;
      }
    }

    h3 {
      font-size: 19px;
      font-weight: 700;
      color: #0f274a;
      margin: 0 0 8px;
    }

    p {
      font-size: 14.5px;
      color: #64748b;
      max-width: 480px;
      margin: 0 auto 20px;
      line-height: 1.55;
    }

    .btn-clear-search {
      padding: 10px 20px;
      font-size: 14px;
      font-weight: 700;
      color: #ffffff;
      background: #2563eb;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: background 0.15s ease;

      &:hover {
        background: #1d4ed8;
      }
    }
  }
}

/* ==========================================================================
   Bottom Contact Box
   ========================================================================== */
.faqs-contact-box {
  background: linear-gradient(135deg, #071530 0%, #0c234e 50%, #091a3c 100%);
  border-radius: 24px;
  padding: 44px 32px;
  color: #ffffff;
  text-align: center;
  box-shadow: 0 16px 36px -8px rgba(7, 21, 48, 0.35);

  .contact-box-inner {
    max-width: 600px;
    margin: 0 auto;
  }

  .contact-pill {
    display: inline-block;
    font-size: 10.5px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #93c5fd;
    background: rgba(147, 197, 253, 0.12);
    border: 1px solid rgba(147, 197, 253, 0.25);
    border-radius: 999px;
    padding: 3px 12px;
    margin-bottom: 14px;
  }

  h3 {
    font-size: 22px;
    font-weight: 800;
    color: #ffffff;
    margin: 0 0 10px;
    line-height: 1.3;
  }

  p {
    font-size: 15px;
    color: #cbd5e1;
    line-height: 1.6;
    margin: 0 0 28px;
  }

  .contact-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;

    .btn-primary {
      padding: 12px 24px;
      background: #2563eb;
      color: #ffffff;
      font-size: 14.5px;
      font-weight: 700;
      border-radius: 10px;
      text-decoration: none;
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.35);
      transition: all 0.15s ease;

      &:hover {
        background: #1d4ed8;
        transform: translateY(-1px);
      }
    }

    .btn-whatsapp {
      padding: 12px 22px;
      background: #22c55e;
      color: #ffffff;
      font-size: 14.5px;
      font-weight: 700;
      border-radius: 10px;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 14px rgba(34, 197, 94, 0.3);
      transition: all 0.15s ease;

      .wa-icon {
        width: 18px;
        height: 18px;
      }

      &:hover {
        background: #16a34a;
        transform: translateY(-1px);
      }
    }
  }
}
</style>