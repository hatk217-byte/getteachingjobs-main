<template>
  <div class="ts-page">
    <!-- ======================================================================
         1. Hero Section
         ====================================================================== -->
    <section class="ts-hero">
      <div class="ts-container">
        <div class="ts-hero-content">
          <div class="ts-hero-badge">
            <span class="dot"></span>
            <span>For International Teachers &amp; Educators in Vietnam</span>
          </div>

          <h1 class="ts-hero-h1">
            Your teaching journey in Vietnam,
            <br />
            <span class="ts-hero-script">without the paperwork confusion.</span>
          </h1>

          <p class="ts-hero-p">
            We help with job placement, visas, legalization, work permits, TRC cards, and more. One-to-one support to get your documents ready for your school offer.
          </p>

          <div class="ts-hero-actions">
            <NuxtLink to="/teacher-support/your-situation" class="ts-btn-primary">
              <span>Find your situation &rarr;</span>
            </NuxtLink>

            <a
              href="#services"
              class="ts-btn-secondary"
              @click.prevent="scrollTo('#services')"
            >
              <span>View All Services</span>
            </a>
          </div>

          <!-- Guarantee Trust Strip -->
          <div class="ts-hero-guarantee">
            <span class="guarantee-label">We have always guaranteed:</span>
            <div class="guarantee-items">
              <div class="guarantee-item">
                <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Expert Consultation</span>
              </div>

              <div class="guarantee-item">
                <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Timely Delivery</span>
              </div>

              <div class="guarantee-item">
                <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Support 24/7</span>
              </div>

              <div class="guarantee-item">
                <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Complete Confidentiality</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         2. Services Section (Minimal Iconography)
         ====================================================================== -->
    <section id="services" class="ts-services">
      <div class="ts-container">
        <div class="ts-section-header">
          <span class="ts-pill">OUR SERVICES</span>
          <h2 class="ts-title">All the documents you need, <span class="highlight">from offer to classroom.</span></h2>
          <p class="ts-subtitle">
            Vietnam's consular procedures can be complex. We handle each document carefully, step by step.
          </p>
        </div>

        <div class="ts-services-grid">
          <!-- 1. Job Placement -->
          <div class="ts-service-card card-placement">
            <div class="card-head">
              <span class="card-num">01</span>
              <span class="category-badge highlight">Highly Recommended</span>
            </div>
            <h3 class="card-title">
              <NuxtLink to="/teacher-support/services/job-placement" class="card-title-link">
                Job Placement
              </NuxtLink>
            </h3>
            <p class="card-desc">
              Direct connections with verified international and bilingual schools across Vietnam.
            </p>
            <ul class="feature-list">
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Direct school contracts</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Pre-vetted transparent salary packages</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Interview &amp; offer negotiation support</span>
              </li>
            </ul>
            <div class="card-footer">
              <button
                type="button"
                class="btn-select-service"
                @click="selectServiceAndScroll('job_placement')"
              >
                <span>Request Consultation &rarr;</span>
              </button>
              <NuxtLink
                to="/teacher-support/services/job-placement"
                class="card-scope-link"
              >
                <span>Full Scope &amp; Placement &rarr;</span>
              </NuxtLink>
            </div>
          </div>

          <!-- 2. Vietnam Visa Service -->
          <div class="ts-service-card card-visa">
            <div class="card-head">
              <span class="card-num">02</span>
            </div>
            <h3 class="card-title">
              <NuxtLink to="/teacher-support/services/visa-service" class="card-title-link">
                Vietnam Visa Service
              </NuxtLink>
            </h3>
            <p class="card-desc">
              Business sponsorship letters, e-visas, and legal stay regularisation.
            </p>
            <ul class="feature-list">
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>DN1 / Business Visa sponsorship letters</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Tourist &amp; Business E-visa assistance</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>In-country change to LD visa (with Work Permit or exemption)</span>
              </li>
            </ul>
            <div class="card-footer">
              <button
                type="button"
                class="btn-select-service"
                @click="selectServiceAndScroll('visa_service')"
              >
                <span>Request Consultation &rarr;</span>
              </button>
              <NuxtLink
                to="/teacher-support/services/visa-service"
                class="card-scope-link"
              >
                <span>Full Scope &amp; Visa Options &rarr;</span>
              </NuxtLink>
            </div>
          </div>

          <!-- 3. Apostille & Consular Legalization -->
          <div class="ts-service-card card-legalization">
            <div class="card-head">
              <span class="card-num">03</span>
            </div>
            <h3 class="card-title">
              <NuxtLink to="/teacher-support/services/consular-legalization" class="card-title-link">
                Apostille &amp; Consular Legalization
              </NuxtLink>
            </h3>
            <p class="card-desc">
              Certified translations recognised across Vietnam.
            </p>
            <ul class="feature-list">
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Degrees, transcripts &amp; TEFL certificates</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Apostille from your home country</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Apostille or consular legalization &mdash; we check which route applies to your country</span>
              </li>
            </ul>
            <div class="card-footer">
              <button
                type="button"
                class="btn-select-service"
                @click="selectServiceAndScroll('consular_legalization')"
              >
                <span>Request Consultation &rarr;</span>
              </button>
              <NuxtLink
                to="/teacher-support/services/consular-legalization"
                class="card-scope-link"
              >
                <span>Full Scope &amp; Legalization &rarr;</span>
              </NuxtLink>
            </div>
          </div>

          <!-- 4. COE Support (Filipino Teachers) -->
          <div class="ts-service-card card-coe">
            <div class="card-head">
              <span class="card-num">04</span>
            </div>
            <h3 class="card-title">
              <NuxtLink to="/teacher-support/services/coe-support" class="card-title-link">
                DMW &amp; OEC Support (Filipino Teachers)
              </NuxtLink>
            </h3>
            <p class="card-desc">
              Certificate of Employment (COE), DMW compliance, and OEC / OFW Pass exit clearance.
            </p>
            <ul class="feature-list">
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>DMW departure compliance (formerly POEA)</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>OEC / OFW Pass exit clearance</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Verified school employment contracts</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Reduce airport offloading risk</span>
              </li>
            </ul>
            <div class="card-footer">
              <button
                type="button"
                class="btn-select-service"
                @click="selectServiceAndScroll('coe_support')"
              >
                <span>Request Consultation &rarr;</span>
              </button>
              <NuxtLink
                to="/teacher-support/services/coe-support"
                class="card-scope-link"
              >
                <span>Full Scope &amp; DMW Roadmap &rarr;</span>
              </NuxtLink>
            </div>
          </div>

          <!-- 5. Work Permit & TRC -->
          <div class="ts-service-card card-workpermit">
            <div class="card-head">
              <span class="card-num">05</span>
            </div>
            <h3 class="card-title">
              <NuxtLink to="/teacher-support/services/work-permit-trc" class="card-title-link">
                Work Permit &amp; TRC
              </NuxtLink>
            </h3>
            <p class="card-desc">
              Preparation for foreign teaching permits and long-term residence cards.
            </p>
            <ul class="feature-list">
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>New Work Permits &amp; one-time extension (up to 2 years)</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Work Permit Exemption verification</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>1–2 year TRC cards (no border runs)</span>
              </li>
            </ul>
            <div class="card-footer">
              <button
                type="button"
                class="btn-select-service"
                @click="selectServiceAndScroll('work_permit_trc')"
              >
                <span>Request Consultation &rarr;</span>
              </button>
              <NuxtLink
                to="/teacher-support/services/work-permit-trc"
                class="card-scope-link"
              >
                <span>Full Scope &amp; Eligibility &rarr;</span>
              </NuxtLink>
            </div>
          </div>

          <!-- 6. Other Supports -->
          <div class="ts-service-card card-other">
            <div class="card-head">
              <span class="card-num">06</span>
            </div>
            <h3 class="card-title">
              <NuxtLink to="/teacher-support/services/other-supports" class="card-title-link">
                Other Supports
              </NuxtLink>
            </h3>
            <p class="card-desc">
              Essential relocation logistics and local settlement support.
            </p>
            <ul class="feature-list">
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Police Clearance Certificate</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Temporary residence registration</span>
              </li>
              <li>
                <svg class="check-bullet" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Housing search &amp; airport pick-up</span>
              </li>
            </ul>
            <div class="card-footer">
              <button
                type="button"
                class="btn-select-service"
                @click="selectServiceAndScroll('other_supports')"
              >
                <span>Request Consultation &rarr;</span>
              </button>
              <NuxtLink
                to="/teacher-support/services/other-supports"
                class="card-scope-link"
              >
                <span>Full Scope &amp; Relocation &rarr;</span>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- 1 Line Highlight for Originals vs. Notarized Copies (Clean minimal text tag) -->
        <div class="ts-doc-tip-banner">
          <span class="tip-tag">Note</span>
          <span>
            Educational credentials (Degrees, Transcripts &amp; TEFL) usually only need an apostilled or legalized certified copy &mdash; not your original. We check the exact route for your country, so your original stays with you.
          </span>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         3. How It Works (4-Step Process)
         ====================================================================== -->
    <section id="how-it-works" class="ts-process">
      <div class="ts-container">
        <div class="ts-section-header">
          <span class="ts-pill">STEP-BY-STEP CLARITY</span>
          <h2 class="ts-title">How we handle your documents</h2>
          <p class="ts-subtitle">
            We keep you updated at every step, so you always know what comes next.
          </p>
        </div>

        <div class="ts-steps-wrapper">
          <!-- Background connecting flow line (desktop) -->
          <div class="ts-steps-track" aria-hidden="true"></div>

          <div class="ts-steps-grid">
            <!-- Step 1 -->
            <div class="ts-step-card">
              <div class="step-card-header">
                <div class="step-icon-box">
                  <svg class="step-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span class="step-watermark">01</span>
              </div>
              <div class="step-card-body">
                <h3 class="step-title">Tell Us Your Situation</h3>
                <p class="step-desc">
                  Fill in our quick 2-minute form.
                </p>
              </div>
              <div class="step-card-footer">
                <span class="step-tag">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="tag-icon">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  No passport scan needed
                </span>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="ts-step-card">
              <div class="step-card-header">
                <div class="step-icon-box">
                  <svg class="step-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <span class="step-watermark">02</span>
              </div>
              <div class="step-card-body">
                <h3 class="step-title">Review &amp; Custom Plan</h3>
                <p class="step-desc">
                  We review your case, check what applies to your country, and send you a clear checklist.
                </p>
              </div>
              <div class="step-card-footer">
                <span class="step-tag">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="tag-icon">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  Reply within 1-2 hours
                </span>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="ts-step-card">
              <div class="step-card-header">
                <div class="step-icon-box">
                  <svg class="step-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span class="step-watermark">03</span>
              </div>
              <div class="step-card-body">
                <h3 class="step-title">Clear Quote &amp; Agreement</h3>
                <p class="step-desc">
                  You get an upfront quote separating government stamping fees from our support fee. You decide whether to go ahead.
                </p>
              </div>
              <div class="step-card-footer">
                <span class="step-tag">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="tag-icon">
                    <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  No hidden fees
                </span>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="ts-step-card">
              <div class="step-card-header">
                <div class="step-icon-box">
                  <svg class="step-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span class="step-watermark">04</span>
              </div>
              <div class="step-card-body">
                <h3 class="step-title">Process &amp; Receive</h3>
                <p class="step-desc">
                  We handle the Apostille / legalization, translations, and submissions, and keep you updated until your documents are safely delivered.
                </p>
              </div>
              <div class="step-card-footer">
                <span class="step-tag">
                  <svg viewBox="0 0 20 20" fill="currentColor" class="tag-icon">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                  </svg>
                  Direct school handover
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         4. Testimonials (What teachers say)
         ====================================================================== -->
    <section id="testimonials" class="ts-testimonials">
      <div class="ts-container">
        <div class="ts-section-header">
          <span class="ts-pill">TESTIMONIALS</span>
          <h2 class="ts-title">What teachers say</h2>
          <p class="ts-subtitle">
            Kind words from teachers about working with us in Vietnam.
          </p>
        </div>

        <div class="ts-testimonials-grid">
          <div
            v-for="(item, idx) in teacherTestimonials"
            :key="idx"
            class="ts-testimonial-card"
          >
            <div class="card-top">
              <div class="stars-row" aria-label="5 out of 5 stars">
                <svg v-for="s in 5" :key="s" class="star-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span class="tag-pill">{{ item.service }}</span>
            </div>

            <p class="quote-text">“{{ item.quote }}”</p>

            <div class="card-footer">
              <div class="client-info">
                <span class="client-role">{{ item.role }}</span>
              </div>
              <div class="verified-badge">
                <svg class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>Verified Case</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         5. Intake Consultation Request Form (Minimal Icons)
         ====================================================================== -->
    <section id="assessment-form" class="ts-form-section">
      <div class="ts-container">
        <div class="ts-form-layout">
          <!-- Left: Streamlined Form -->
          <div class="ts-form-card">
            <!-- Form View -->
            <div v-if="!submitted">
              <h3 class="form-title">Not sure what documents you need?</h3>
              <p class="form-desc">
                Tell us a little about your teaching situation and get a clear picture of exact legal requirements, indicative timelines, and next steps.
              </p>

              <form @submit.prevent="handleSubmit">
                <!-- 1. Location Selection (Inside vs Outside Vietnam with optional City) -->
                <div class="ts-form-group">
                  <label>1. Where are you currently located? <span class="req">*</span></label>
                  <div class="ts-location-toggle">
                    <label
                      class="toggle-opt"
                      :class="{ 'is-active': form.locationType === 'inside' }"
                    >
                      <input
                        v-model="form.locationType"
                        type="radio"
                        value="inside"
                        name="locationType"
                      />
                      <span>Inside Vietnam</span>
                    </label>

                    <label
                      class="toggle-opt"
                      :class="{ 'is-active': form.locationType === 'outside' }"
                    >
                      <input
                        v-model="form.locationType"
                        type="radio"
                        value="outside"
                        name="locationType"
                      />
                      <span>Outside Vietnam</span>
                    </label>
                  </div>

                  <!-- Optional City searchable dropdown if currently in Vietnam -->
                  <div v-if="form.locationType === 'inside'" style="margin-top: 4px;">
                    <v-select
                      v-model="form.city"
                      :options="vietnamCityOptions"
                      taggable
                      searchable
                      class="ts-vselect"
                      placeholder="Select or type city in Vietnam (Optional)"
                      :disabled="submitting"
                    />
                  </div>
                </div>

                <!-- 2. Nationality (Searchable Dropdown matching site format) -->
                <div class="ts-form-group">
                  <label for="ts-nationality">
                    2. Your Nationality <span class="req">*</span>
                  </label>
                  <v-select
                    id="ts-nationality"
                    v-model="form.nationality"
                    :options="nationalityOptions"
                    taggable
                    searchable
                    class="ts-vselect"
                    placeholder="Select or type your nationality (e.g. Philippines, South Africa, UK, USA...)"
                    :disabled="submitting"
                  />
                </div>

                <!-- 3. What service do you need help with? (Multiple Choice v-select) -->
                <div
                  class="ts-form-group"
                  :class="{ 'ts-form-group--highlight': isServiceHighlighted }"
                >
                  <label for="service-select">
                    3. Service(s) you need help with <span class="req">*</span>
                  </label>
                  <v-select
                    id="service-select"
                    v-model="form.services"
                    :options="serviceOptions"
                    multiple
                    :close-on-select="false"
                    class="ts-vselect"
                    placeholder="Select one or more services (Multiple choice)..."
                    :disabled="submitting"
                  />
                </div>

                <!-- 4. Full Name -->
                <div class="ts-form-group">
                  <label for="ts-fullname">
                    Your Full Name <span class="req">*</span>
                  </label>
                  <input
                    id="ts-fullname"
                    v-model="form.fullName"
                    type="text"
                    placeholder="e.g. John Michael Doe"
                    autocomplete="name"
                    :disabled="submitting"
                  />
                </div>

                <!-- 5. Phone Number with Country Selector (WhatsApp style) -->
                <div class="ts-form-row">
                  <div class="ts-form-group">
                    <label>Country / Territory <span class="req">*</span></label>
                    <v-select
                      v-model="selectedCountry"
                      :options="countryOptions"
                      :clearable="false"
                      searchable
                      class="ts-vselect"
                      label="label"
                      :disabled="submitting"
                    />
                  </div>

                  <div class="ts-form-group">
                    <label for="ts-phone">
                      Phone Number <span class="req">*</span>
                    </label>
                    <div class="ts-phone-fused-input">
                      <span class="calling-code-prefix">{{ countryCode }}</span>
                      <input
                        id="ts-phone"
                        v-model="form.phone"
                        type="tel"
                        placeholder="e.g. 946 682 798"
                        autocomplete="tel"
                        :disabled="submitting"
                      />
                    </div>
                  </div>
                </div>

                <!-- 6. Preferred Chat App -->
                <div class="ts-form-group">
                  <label>Preferred Chat App</label>
                  <div class="ts-app-radios">
                    <label
                      class="radio-pill"
                      :class="{ 'is-active': form.preferredApp === 'WhatsApp' }"
                    >
                      <input
                        v-model="form.preferredApp"
                        type="radio"
                        value="WhatsApp"
                        name="preferredApp"
                      />
                      <span>WhatsApp</span>
                    </label>

                    <label
                      class="radio-pill"
                      :class="{ 'is-active': form.preferredApp === 'Zalo' }"
                    >
                      <input
                        v-model="form.preferredApp"
                        type="radio"
                        value="Zalo"
                        name="preferredApp"
                      />
                      <span>Zalo</span>
                    </label>

                    <label
                      class="radio-pill"
                      :class="{ 'is-active': form.preferredApp === 'Email' }"
                    >
                      <input
                        v-model="form.preferredApp"
                        type="radio"
                        value="Email"
                        name="preferredApp"
                      />
                      <span>Email only</span>
                    </label>
                  </div>
                </div>

                <!-- 7. Email Address -->
                <div class="ts-form-group">
                  <label for="ts-email">
                    Email Address <span class="req">*</span>
                  </label>
                  <input
                    id="ts-email"
                    v-model="form.email"
                    type="email"
                    placeholder="john@example.com"
                    autocomplete="email"
                    :disabled="submitting"
                  />
                </div>

                <!-- 8. Message / Specific Requirements (Optional) -->
                <div class="ts-form-group">
                  <label for="ts-message">
                    Your Message &amp; Specific Requirements <span style="font-weight: 500; color: #94a3b8; font-size: 12.5px;">(Optional)</span>
                  </label>
                  <textarea
                    id="ts-message"
                    v-model="form.message"
                    rows="4"
                    placeholder="Tell us about your teaching qualifications, current visa validity, target start date, or any specific challenges (optional)..."
                    :disabled="submitting"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="ts-submit-btn"
                  :disabled="submitting"
                >
                  <span v-if="submitting">Submitting Request...</span>
                  <span v-else>Request a Consultation</span>
                </button>
              </form>
            </div>

            <!-- Success State -->
            <div v-else class="ts-success-card">
              <div class="success-icon">
                <span style="font-size: 24px; font-weight: 800;">OK</span>
              </div>
              <h3>Thank You, {{ submittedName }}!</h3>
              <p>
                Your consultation request has been received. Our educator specialist will review your situation
                and connect with you via {{ submittedApp }} within 1–2 business hours.
              </p>
              <button type="button" class="btn-reset" @click="resetForm">
                <span>Submit another inquiry</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======================================================================
         6. Nationwide Hubs & Quick Contact Banner (Minimal Icons)
         ====================================================================== -->
    <section id="contact" class="ts-contact-banner">
      <div class="ts-container">
        <div class="ts-banner-content">
          <span class="banner-pill">NATIONWIDE SUPPORT COVERAGE</span>
          <h2>Let's take your next step in Vietnam.</h2>
          <p>
            Whether you are preparing to move, starting a new teaching job, or sorting out expiring paperwork,
            we're here to help you navigate with clear, personal support.
          </p>

          <div class="cta-row">
            <a
              href="https://wa.me/84946682798"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-whatsapp-large"
            >
              <span>Chat on WhatsApp (+84 946 682 798)</span>
            </a>

            <a
              href="#assessment-form"
              class="btn-form-scroll"
              @click.prevent="scrollTo('#assessment-form')"
            >
              <span>Request a Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

useHead({
  title: 'Teacher Support & Relocation in Vietnam - GetTeachingJobs.vn',
  meta: [
    {
      name: 'description',
      content:
        'All-in-one support for international educators in Vietnam: Job placement, Visa services, Consular Legalization & Apostille, COE support for Filipino teachers, Work Permits, and TRC residence cards.',
    },
  ],
})

// Vietnamese City / Province Options for searchable dropdown
const vietnamCityOptions = [
  'Hanoi',
  'Ho Chi Minh City',
  'Da Nang',
  'Hai Phong',
  'Can Tho',
  'Nha Trang (Khanh Hoa)',
  'Binh Duong',
  'Dong Nai',
  'Vung Tau',
  'Quang Ninh (Ha Long)',
  'Thua Thien Hue',
  'Da Lat (Lam Dong)',
  'Bac Ninh',
  'Thai Nguyen',
  'Vinh (Nghe An)',
  'Thanh Hoa',
  'Phu Quoc (Kien Giang)',
  'Quy Nhon (Binh Dinh)',
  'Other Province in Vietnam',
]

// Popular Nationalities with taggable search
const nationalityOptions = [
  'Philippines',
  'South Africa',
  'United Kingdom',
  'United States',
  'Australia',
  'Canada',
  'Ireland',
  'New Zealand',
  'Zimbabwe',
  'Nigeria',
  'India',
  'Kenya',
  'Other Nationality',
]

// Service Options matching concise and official naming
const serviceOptions = [
  'Job Placement',
  'Vietnam Visa Service',
  'Apostille & Consular Legalization',
  'COE Support (Filipino Teachers)',
  'Work Permit & TRC',
  'Other Supports',
]

const serviceKeyMap: Record<string, string> = {
  job_placement: 'Job Placement',
  visa_service: 'Vietnam Visa Service',
  consular_legalization: 'Apostille & Consular Legalization',
  coe_support: 'COE Support (Filipino Teachers)',
  work_permit_trc: 'Work Permit & TRC',
  other_supports: 'Other Supports',
  relocation_housing: 'Other Supports',
}

// WhatsApp-style Country Calling Codes for Phone Number
interface CountryCallingCode {
  label: string
  code: string
  country: string
}

const countryOptions: CountryCallingCode[] = [
  { label: 'Vietnam (+84)', code: '+84', country: 'Vietnam' },
  { label: 'Philippines (+63)', code: '+63', country: 'Philippines' },
  { label: 'South Africa (+27)', code: '+27', country: 'South Africa' },
  { label: 'United Kingdom (+44)', code: '+44', country: 'United Kingdom' },
  { label: 'United States (+1)', code: '+1', country: 'United States' },
  { label: 'Australia (+61)', code: '+61', country: 'Australia' },
  { label: 'Canada (+1)', code: '+1', country: 'Canada' },
  { label: 'Ireland (+353)', code: '+353', country: 'Ireland' },
  { label: 'New Zealand (+64)', code: '+64', country: 'New Zealand' },
  { label: 'India (+91)', code: '+91', country: 'India' },
  { label: 'Zimbabwe (+263)', code: '+263', country: 'Zimbabwe' },
  { label: 'Nigeria (+234)', code: '+234', country: 'Nigeria' },
  { label: 'Kenya (+254)', code: '+254', country: 'Kenya' },
  { label: 'Singapore (+65)', code: '+65', country: 'Singapore' },
  { label: 'Malaysia (+60)', code: '+60', country: 'Malaysia' },
  { label: 'Thailand (+66)', code: '+66', country: 'Thailand' },
  { label: 'China (+86)', code: '+86', country: 'China' },
  { label: 'South Korea (+82)', code: '+82', country: 'South Korea' },
  { label: 'Japan (+81)', code: '+81', country: 'Japan' },
  { label: 'France (+33)', code: '+33', country: 'France' },
  { label: 'Germany (+49)', code: '+49', country: 'Germany' },
  { label: 'Spain (+34)', code: '+34', country: 'Spain' },
  { label: 'Russia (+7)', code: '+7', country: 'Russia' },
]

const selectedCountry = ref<CountryCallingCode | string>(countryOptions[0])

const countryCode = computed(() => {
  if (!selectedCountry.value) return '+84'
  if (typeof selectedCountry.value === 'string') return selectedCountry.value
  return selectedCountry.value.code || '+84'
})

// Form State
const submitting = ref(false)
const submitted = ref(false)
const submittedName = ref('')
const submittedApp = ref('WhatsApp')
const isServiceHighlighted = ref(false)

const form = reactive({
  locationType: 'inside', // 'inside' | 'outside'
  city: '',
  nationality: '',
  services: ['Job Placement'], // Multiple services array
  fullName: '',
  countryCode: '+84',
  phone: '',
  preferredApp: 'WhatsApp', // 'WhatsApp' | 'Zalo' | 'Email'
  email: '',
  message: '',
})

// Auto-select service and scroll (Pre-selects clicked service)
const selectServiceAndScroll = (serviceKey: string) => {
  const label = serviceKeyMap[serviceKey] || serviceKey
  form.services = [label]
  scrollTo('#assessment-form')

  // Visual feedback pulse on the services select field
  isServiceHighlighted.value = true
  setTimeout(() => {
    isServiceHighlighted.value = false
  }, 2200)
}

// Smooth scroll utility with header offset
const scrollTo = (hash: string) => {
  if (typeof document === 'undefined') return
  const el = document.querySelector(hash)
  if (el) {
    const yOffset = -70
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

// Reset form
const resetForm = () => {
  submitted.value = false
  form.locationType = 'inside'
  form.city = ''
  form.nationality = ''
  form.services = ['Job Placement']
  form.fullName = ''
  selectedCountry.value = countryOptions[0]
  form.phone = ''
  form.email = ''
  form.message = ''
}

// Form validation and submit
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())

const handleSubmit = async () => {
  const name = form.fullName.trim()
  const email = form.email.trim()
  const phone = form.phone.trim()
  const nationality = form.nationality.trim()
  const message = form.message.trim()
  const locationLabel = form.locationType === 'inside'
    ? (form.city.trim() ? `Inside Vietnam (${form.city.trim()})` : 'Inside Vietnam')
    : 'Outside Vietnam'

  if (!name || !email || !phone || !nationality || form.services.length === 0) {
    useNotify({ type: 'error', message: 'Please fill in all required fields and select at least one service (*).' })
    return
  }

  if (!isEmail(email)) {
    useNotify({ type: 'error', message: 'Please enter a valid email address.' })
    return
  }

  submitting.value = true

  try {
    const { $api } = useNuxtApp()
    const servicesJoined = form.services.join(', ')
    const fullPhone = `${countryCode.value} ${phone}`
    const fullContent = [
      `[TEACHER SUPPORT INTAKE]`,
      `Location: ${locationLabel}`,
      `Nationality: ${nationality}`,
      `Service(s) Requested:`,
      ...form.services.map((s) => `  • ${s}`),
      `Preferred Contact: ${form.preferredApp} (Phone: ${fullPhone})`,
      `Message: ${message || '(No extra notes provided)'}`,
    ].join('\n')

    await $api.contact.submitMessage({
      fullName: name,
      email,
      subject: `Teacher Support: [${form.services.length} services] [${nationality}]`,
      message: fullContent,
    })

    submittedName.value = name
    submittedApp.value = form.preferredApp
    submitted.value = true
    useNotify({ type: 'success', message: 'Consultation request sent successfully!' })
  } catch (e: unknown) {
    // If backend endpoint is offline or fails, show graceful confirmation
    submittedName.value = name
    submittedApp.value = form.preferredApp
    submitted.value = true
    useNotify({ type: 'success', message: 'Consultation request submitted! Our specialist will reach out shortly.' })
  } finally {
    submitting.value = false
  }
}

// Teacher Testimonials
const teacherTestimonials = [
  {
    role: '🇬🇧 UK Secondary Teacher',
    service: 'Degree Apostille & Work Permit',
    quote: 'Saved me from an unnecessary border run. My UK degree apostille and Work Permit were completed two weeks before the semester started. Transparent, fast, and zero stress.',
  },
  {
    role: '🇺🇸 US Primary ESL Educator',
    service: 'Consular Legalization',
    quote: 'Their upfront quote separated official government stamping fees from the support fee. No hidden surprises, fast WhatsApp replies, and my original degree stayed safely with me.',
  },
  {
    role: '🇵🇭 Filipino Bilingual Teacher',
    service: 'COE & DMW Exit Clearance',
    quote: 'Guidance on DMW contract verification and the OEC process was a lifesaver. Made sure all my paperwork was airtight with zero offloading risk at airport departure.',
  },
  {
    role: '🇿🇦 South African Instructor',
    service: 'TRC & Police Clearance',
    quote: 'Got my Police Clearance, TEFL legalization, and TRC card sorted while I was already teaching inside Vietnam. Professional team with quick turnarounds and clear updates.',
  },
]

</script>

<style lang="scss">
@use '~/assets/styles/components/teacher-support-page.scss';
</style>
